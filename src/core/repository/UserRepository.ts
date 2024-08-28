import type User from "../entity/User";

export default interface IUserRepository {
	findById(userId: string): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
	save(user: User): Promise<void>;
	delete(userId: string): Promise<void>;
}
