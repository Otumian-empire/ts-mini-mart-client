import UserDefinition from "../definition/user.definition";
import AxiosBaseRequest from "../utils/AxiosBaseRequest";
import BaseWrapper from "./base.wrapper";

export default class UserWrapper extends BaseWrapper {
  // constructor - sets the path/ base endpoint
  public path: string;
  constructor() {
    super();
    this.path = "/user";
  }

  // Create/Add User with name, email and address
  create = ({ name, email, address }: UserDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", {
      name,
      email,
      address,
    });

    this.makeRequest(req);
  };

  // List all Users
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // Read a User by userId
  read = (userId: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${userId}`);
    this.makeRequest(req);
  };

  // Delete User by userId
  remove = (userId: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", { userId });
    this.makeRequest(req);
  };

  // Update User by userId passing the name, email and address
  update = (userId: number, { name, email, address }: UserDefinition) => {
    const req = new AxiosBaseRequest(this.path, "PUT", {
      userId,
      name,
      email,
      address,
    });

    this.makeRequest(req);
  };
}
