import IParseMailTemplateDTO from '../dtos/IParseTemplateDTO';

export default interface IMailTamplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>; // sempre que algum método da minha interface receber mais de uma infromação é preciso criar um DTO
}
