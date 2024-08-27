// Representa uma categoria de posts no blog.

export default class Category {
	id: string;
	name: string;
	description: string;

	constructor(id: string, name: string, description: string) {
		this.id = id;
		this.name = name;
		this.description = description;
	}
}
