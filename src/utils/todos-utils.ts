import { FetchedTodo } from "./../types.d";
import { format } from "date-fns";
import { ITodo } from "types";

export const formatTodosForAccordion = (todos: ITodo[]) => {
  const newTodos: { [key: string]: ITodo[] } = {};

  for (const todo of todos) {
    const key = format(new Date(todo.date), "MM/dd/yyyy");
    if (newTodos[key]) {
      newTodos[key].push(todo);
    } else {
      newTodos[key] = [todo];
    }
  }

  return newTodos;
};

export const convertDataToTodayOrYesterday = (date: string) => {
  const singleDay = 24 * 60 * 60 * 1000;

  const today = format(new Date(), "MM/dd/yyyy");
  const yesterday = format(new Date(Date.now() - singleDay), "MM/dd/yyyy");
  const tomorrow = format(new Date(Date.now() + singleDay), "MM/dd/yyyy");

  if (date === today) return "Today";
  if (date === yesterday) return "Yesterday";
  if (date === tomorrow) return "Tomorrow";

  return date;
};

export const returnTodayDate = () => {
  return format(new Date(), "MM/dd/yyyy");
};

export const isListHasTodayTask = (list: FetchedTodo) => {
  return list[returnTodayDate()];
};
