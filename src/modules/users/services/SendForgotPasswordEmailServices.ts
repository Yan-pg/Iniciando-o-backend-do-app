import { inject, injectable } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import IUsersReposuitory from '../repositories/IUsersRepository';

// import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersReposuitory,
  ) {}

  public async execute(data: IRequest): Promise<void> {}
}

export default SendForgotPasswordEmailService;
