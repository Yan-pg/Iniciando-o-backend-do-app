export default interface IHashProvider {
  generateHash(payloadd: string): Promise<string>;
  compareHash(payload: string, hased: string): Promise<boolean>;
}
