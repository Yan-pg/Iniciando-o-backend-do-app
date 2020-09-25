import AppError from '@shared/errors/AppError';

import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateProfileServices {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    old_password,
    password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const userWithUpdateEmail = await this.usersRepository.findByEmail(email);

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user_id) {
      throw new AppError('E-mail already in use.');
    }
    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError('You neewd infrom the old to set a new password');
    }

    if (password && old_password) {
      const checkOldPasswrod = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPasswrod) {
        throw new AppError('Old password does not math');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateProfileServices;
