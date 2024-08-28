// Representa um usuário do blog, que pode ser um autor ou um leitor.
import { v4 as uuid } from "uuid";

interface IUserRole {
	role: "autor" | "leitor";
}

export default class User {
	id: string;
	name: string;
	email: string;
	password: string;
	role: IUserRole;

	constructor(name: string, email: string, password: string, role: IUserRole) {
		this.id = uuid();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
	}
}
