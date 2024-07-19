export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    private _password: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) { }

  public checkPassword(password: string): boolean {
    return this._password === password;
  }

  public setPassword(password: string): void {
    this._password = password;
  }
}