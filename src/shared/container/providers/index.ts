import { container } from 'tsyringe';

import EthereaMailProvider from './MailProvider/implementations/EtherealIMailProvider';
import IMailProvider from './MailProvider/models/IMailProvider';

import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStoregeProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailProvider>(
  'StorageProvider',
  EthereaMailProvider,
);
