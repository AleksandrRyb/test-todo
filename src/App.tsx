import { Center } from "@chakra-ui/react";

import TodoWindow from "./components/todo-window";

import "./App.css";

const App = () => {
  return (
    <Center height="100vh" width="100%" bg="#121212" color="textColor.white">
      <TodoWindow />
    </Center>
  );
};

export default App;
