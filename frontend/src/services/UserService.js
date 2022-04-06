import axios from "axios";

const USERS_REST_API_URL='http://localhost:8080/api/users';

class UserService {
  getUsers(){
    const result = axios.get(USERS_REST_API_URL);
    return result;
  }
}

export default new UserService();