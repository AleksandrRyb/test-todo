import { AxiosResponse } from "./../../node_modules/axios/index.d";
import axios from "axios";

interface ITodo {
  id: string;
  title: string;
  description: string;
  colorBadge: string;
}

export const addTodo = async (newTodo: ITodo): Promise<AxiosResponse> => {
  const response = await axios.post("/todos", newTodo);

  return response;
};
