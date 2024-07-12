class User {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}

class GroupUsers {
  private _users: User[];

  constructor() {
    this._users = [];
  }

  public addUser(user: User): void {
    this._users.push(user);
  }

  public getNameUsers(): string[] {
    return this._users.map((user: User) => user.name);
  }
}

const group = new GroupUsers();
group.addUser(new User("João"));
group.addUser(new User("Maria"));

console.log(group.toString()); // Saída: João, Maria