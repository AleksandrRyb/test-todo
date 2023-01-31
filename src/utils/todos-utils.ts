import { format } from "date-fns";
import { ITodo } from "api/mutations";

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

export const converDataToTodayOrYestoday = (date: string) => {
  const timeStamp = new Date().getTime();
  const singleDay = 24 * 60 * 60 * 1000;

  const yesterday = format(new Date(timeStamp - singleDay), "MM/dd/yyyy");
  const tomorrow = format(new Date(timeStamp + singleDay), "MM/dd/yyyy");
  const today = format(new Date(), "MM/dd/yyyy");

  if (yesterday == date) {
    return "Yesterday";
  }

  if (tomorrow == date) {
    return "Tomorrow";
  }

  if (today == date) {
    return "Today";
  }

  return date;
};

export const returnTodayDate = () => {
  return format(new Date(), "MM/dd/yyyy");
};

export const isListHasTodayTask = (list: { [key: string]: ITodo[] }) => {
  return list[returnTodayDate()];
};
