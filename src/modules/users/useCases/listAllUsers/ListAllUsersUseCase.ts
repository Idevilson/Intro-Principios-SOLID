import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userFoundById = this.usersRepository.findById(user_id);

    if (userFoundById !== undefined) {
      if (userFoundById.admin === true) {
        const user = this.usersRepository.list();
        return user;
      }
      throw new Error("User not admin");
    } else {
      throw new Error("Invalid ID!");
    }
  }
}

export { ListAllUsersUseCase };
