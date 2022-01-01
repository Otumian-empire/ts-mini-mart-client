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

  // create user
  create = ({ name, email, address }: UserDefinition) => {
    const req = new AxiosBaseRequest(this.path, "POST", {
      name,
      email,
      address,
    });

    this.makeRequest(req);
  };

  // list/read all users
  list = () => {
    const req = new AxiosBaseRequest(this.path);
    this.makeRequest(req);
  };

  // read one
  read = (id: number) => {
    const req = new AxiosBaseRequest(`${this.path}/${id}`);
    this.makeRequest(req);
  };

  // remove/delete user
  remove = (id: number) => {
    const req = new AxiosBaseRequest(this.path, "DELETE", { userId: id });
    this.makeRequest(req);
  };

  // update user
  update = (id: number, { name, email, address }: UserDefinition) => {
    const req = new AxiosBaseRequest(this.path, "PUT", {
      userId: id,
      name,
      email,
      address,
    });

    this.makeRequest(req);
  };
}
