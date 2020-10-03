import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUsersTokenRepository from '@modules/users/repositories/IUsersTokenRepository';
import UserTolkensRepository from '@modules/users/infra/typeorm/repositories/UserTolkensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificatitionsRepository from '@modules/notifications/infra/typeorm/repositories/NotificatitionsRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokenRepository>(
  'UserTokensRepository',
  UserTolkensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificatitionsRepository',
  NotificatitionsRepository,
);
