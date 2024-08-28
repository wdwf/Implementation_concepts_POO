import Post from "../entity/Post";
import type IPostRepository from "../repository/PostRepository";

export default class CreatePost {
	postRepository: IPostRepository;

	constructor(postRepository: IPostRepository) {
		this.postRepository = postRepository;
	}

	async execute(postData: {
		title: string;
		content: string;
		author: string;
	}) {
		const alreadyExistsPost = await this.postRepository.findByTitle(
			postData.title,
		);

		if (alreadyExistsPost) {
			throw new Error("Um post com esse titulo ja existe.");
		}

		const newPost = new Post(postData.title, postData.content, postData.author);

		await this.postRepository.save(newPost);

		return newPost;
	}
}
