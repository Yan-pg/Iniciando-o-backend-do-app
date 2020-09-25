import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileServices from './ShowProfileServices';

let fakeUsersRepository: FakeUsersRepository;
let showrofile: ShowProfileServices;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showrofile = new ShowProfileServices(fakeUsersRepository);
  });

  it('shoud be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const profile = await showrofile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('John Doe');
    expect(profile.email).toBe('johndoe@example.com');
  });

  it('shoud be able to show the profile from non-existing user', async () => {
    expect(
      showrofile.execute({
        user_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
