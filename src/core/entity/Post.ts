// Representa uma postagem no blog.

export default class Post {
	id: string;
	title: string;
	content: string;
	author: string;
	date: Date;

	constructor(
		id: string,
		title: string,
		content: string,
		author: string,
		date: Date,
	) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.author = author;
		this.date = date;
	}

	// isTheSamePost(post: Post) {}
}
