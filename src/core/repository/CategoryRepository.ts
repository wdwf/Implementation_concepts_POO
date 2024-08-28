/* 
 Cada repositório é responsável apenas pela lógica de 
 persistência de uma única entidade. Isso torna o código 
 mais modular e mais fácil de entender.

 - abstrai o acesso a dados
 - Ele serve como uma interface entre a camada de domínio (core) 
 e a camada de infraestrutura (onde residem os detalhes de implementação, 
 como bancos de dados).
*/

import type Category from "../entity/Category";

export default interface ICategoryRepository {
	findById(categoryId: string): Promise<Category | null>;
	findByName(name: string): Promise<Category | null>;
	save(Category: Category): Promise<void>;
	delete(CategoryId: string): Promise<void>;
}
