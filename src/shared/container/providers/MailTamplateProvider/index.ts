import { container } from 'tsyringe';

import IMailTamplateProvider from './models/IMailTemplateProvider';

import HandelebarsMailTamplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandelebarsMailTamplateProvider,
};

container.registerSingleton<IMailTamplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
