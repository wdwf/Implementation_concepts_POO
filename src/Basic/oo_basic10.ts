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

class UserRepositoryMySQL implements Repository {
  model: any;

  constructor(model: any) {
    this.model = model
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

class UserRepositoryMongo implements Repository {
  model: any;
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

// Exemplo de inversão de dependência
const getAllUsers = (repository: Repository): DefaultResponse[] => {
  return repository.findAll()
}