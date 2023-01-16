import axios from "axios";

const PORT = 5555;
const SERVER_URI = `http://localhost:${PORT}`;

interface ITodo {
  id: string;
  title: string;
  description: string;
  colorBadge: string;
  date: Date;
}

export const addTodo = async (newTodo: ITodo): Promise<void> => {
  await axios.post(`${SERVER_URI}/todos`, newTodo);
};
