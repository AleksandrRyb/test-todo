import axios from "axios";
import { format } from "date-fns";
import { SERVER_URI } from "../constants/api-constants";
import { ITodo } from "./mutations";

export const getTodos = async () => {
  const result = await axios.get(`${SERVER_URI}/todos`);

  const formatedTodos = formatTodosForAccordion(result.data);

  return formatedTodos;
};

const formatTodosForAccordion = (todos: ITodo[]) => {
  let newTodos: { [key: string]: ITodo[] } = {};

  todos.forEach((todo) => {
    const key = format(new Date(todo.date), "MM/dd/yyyy");

    if (!newTodos.hasOwnProperty(key)) {
      newTodos[key] = [todo];
    } else {
      newTodos[key].push(todo);
    }
  });

  return newTodos;
};
