import axios from "axios";
import { SERVER_URI } from "../constants/api-constants";
import { formatTodosForAccordion } from "../utils/todos-utils";

export const getTodos = async () => {
  const result = await axios.get(`${SERVER_URI}/todos`);

  const formatedTodos = formatTodosForAccordion(result.data);

  return formatedTodos;
};
