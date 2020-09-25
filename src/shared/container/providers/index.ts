import { container } from 'tsyringe';

import EthereaMailProvider from './MailProvider/implementations/EtherealIMailProvider';
import IMailProvider from './MailProvider/models/IMailProvider';

import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStoregeProvider';

import HandelebarsMailTamplateProvider from './MailTamplateProvider/implementations/HandlebarsMailTemplateProvider';
import IMailTamplateProvider from './MailTamplateProvider/models/IMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTamplateProvider>(
  'MailTemplateProvider',
  HandelebarsMailTamplateProvider,
);
container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EthereaMailProvider),
);
