import { format } from "date-fns";
import { ITodo } from "../api/mutations";

export const formatTodosForAccordion = (todos: ITodo[]) => {
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

export const sortByDate = (a: string, b: string) => {
  const aDate = new Date(a).getTime();
  const bDate = new Date(b).getTime();

  return aDate - bDate;
};
