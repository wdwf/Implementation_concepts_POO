import type Post from "../entity/Post";

export default interface IPostRepository {
	findById(postId: string): Promise<Post | null>;
	findByTitle(postTitle: string): Promise<Post | null>;
	getAll(): Promise<Post[]>;
	save(post: Post): Promise<void>;
	delete(postId: string): Promise<void>;
}
