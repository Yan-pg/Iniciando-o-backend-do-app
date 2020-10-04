import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
// import AppError from '@shared/errors/AppError';

import IChacheProvider from '@shared/container/providers/CacheProvider/models/IChacheProvider';

import { inject, injectable } from 'tsyringe';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('ChacheProvider')
    private chacheProvider: IChacheProvider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    let users = await this.chacheProvider.recover<User[]>(
      `providers-list:${user_id}`,
    );

    if (!users) {
      users = await this.usersRepository.findAllProvdiders({
        except_user_id: user_id,
      });
    }

    console.log('A query no banco foi feita');

    await this.chacheProvider.save(`providers-list:${user_id}`, users);

    return users;
  }
}

export default ListProvidersService;
