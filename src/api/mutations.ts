import axios from "axios";
import { SERVER_URI } from "../constants/api-constants";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  colorBadge: string;
  opened: boolean;
  date: Date;
}

export const addTodo = async (newTodo: ITodo): Promise<void> => {
  await axios.post(`${SERVER_URI}/todos`, newTodo);
};
