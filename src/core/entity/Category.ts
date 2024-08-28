// Representa uma categoria de posts no blog.
import { v4 as uuid } from "uuid";

export default class Category {
	id: string;
	name: string;
	description: string;

	constructor(name: string, description: string) {
		this.id = uuid();
		this.name = name;
		this.description = description;
	}
}
