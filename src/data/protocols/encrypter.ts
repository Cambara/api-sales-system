
export interface IEncrypter {
  encrypt(value: string): Promise<string>
  isMatch(password: string, hash: string): Promise<boolean>
}
