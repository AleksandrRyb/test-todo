import { SERVER_URI } from "../constants/api-constants";
import axios from "axios";

export const getTodos = async () => {
  const todos = await axios.get(`${SERVER_URI}/todos`);

  console.log(todos);
};
