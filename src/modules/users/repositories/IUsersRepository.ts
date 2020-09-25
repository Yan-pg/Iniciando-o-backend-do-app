import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTOS';
import IFindAllProviderDTO from '../dtos/IfindAllProviderDTO';

export default interface IUsersRepository {
  findAllProvdiders(data: IFindAllProviderDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(id: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
