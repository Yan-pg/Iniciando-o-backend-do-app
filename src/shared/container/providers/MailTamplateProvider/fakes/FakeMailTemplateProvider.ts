import IMailTamplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTamplateProvider {
  public async parse(): Promise<string> {
    return 'Mail ccontent';
  }
}

export default FakeMailTemplateProvider;
