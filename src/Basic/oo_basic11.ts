//Herança de interfaces

type DefaultResponse = {
  id: (string | number),
  name: string,
  createAt: string
}

type ID = (string | number)

type inputDto = { name: string, active: boolean }

interface Repository {
  readonly model: any;
  findAll(): DefaultResponse[],
  findById(id: ID): DefaultResponse,
  insert(data: inputDto): DefaultResponse
  update(id: ID, data: inputDto): DefaultResponse
  destroy(id: ID): boolean
}

interface Searchable {
  search(filter: string): DefaultResponse[]
}

interface EventManager {
  dispatch(payload: object): void
}

interface FullRepository extends Repository, Searchable, EventManager { }

// class UserRepository implements Repository, Searchable, EventManager {
class UserRepository implements FullRepository {
  model: any;
  dispatch(payload: object): void {
    throw new Error("Method not implemented.");
  }
  search(filter: string): DefaultResponse[] {
    throw new Error("Method not implemented.");
  }
  findAll(): DefaultResponse[] {
    throw new Error("Method not implemented.");
  }
  findById(id: ID): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  insert(data: inputDto): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  update(id: ID, data: inputDto): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  destroy(id: ID): boolean {
    throw new Error("Method not implemented.");
  }

}

export { }