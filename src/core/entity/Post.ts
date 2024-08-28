// Representa uma postagem no blog.

import { v4 as uuid } from "uuid";

export default class Post {
	public id: string;
	public title: string;
	public content: string;
	public author: string;
	public createdAt: Date;
	public updatedAt: Date;

	constructor(title: string, content: string, author: string) {
		this.id = uuid();
		this.title = title;
		this.content = content;
		this.author = author;
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}

	// isTheSamePost(post: Post) {}
}
