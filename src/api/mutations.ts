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

export const closeTodo = async (id: string): Promise<void> => {
  await axios.put(`${SERVER_URI}/todos/${id}`, { opened: false });
};

export const openTodo = async (id: string): Promise<void> => {
  await axios.put(`${SERVER_URI}/todos/${id}`, { opened: true });
};
