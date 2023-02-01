import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  Flex,
  Box,
  Heading,
  Button,
  Stack,
  Skeleton,
  List,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { getTodos } from "api/queries";

import AddTodoItemForm from "components/add-todo-item-form";
import TodosAccordion from "components/todos-accordion";
import TodayTodosCheckbox from "components/today-todos-checkbox";
import TodoListItem from "components/todo-list-item";
import { isListHasTodayTask, returnTodayDate } from "utils/todos-utils";
import { FetchedTodo, QueryRefetch } from "types";

interface ITodayTaskList {
  refetch: QueryRefetch;
  todos: FetchedTodo;
  setTodos: React.Dispatch<React.SetStateAction<FetchedTodo | undefined>>;
}

const TodoWindow = () => {
  const [todos, setTodos] = useState<FetchedTodo | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [showTodayTask, setShowTodayTask] = useState(true);
  const { refetch, isLoading } = useQuery("todos", getTodos, {
    onSuccess: (data) => setTodos(data),
  });

  const onModalClose = () => {
    setIsOpen(false);
  };

  const onCheckboxChange = () => {
    setShowTodayTask((prev) => !prev);
  };

  return (
    <Box
      width="390px"
      height="500px"
      minHeight="200px"
      position="relative"
      bg="gray.100"
      borderTopRadius="30px"
    >
      <Box
        overflow="scroll"
        paddingX="20px"
        paddingY="13px"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "&": {
            scrollbarWidth: "none",
          },
        }}
        height="500px"
      >
        <Flex
          mb="15px"
          paddingX="10px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading fontSize="36px" as="h1">
            To Do
          </Heading>

          <SettingsIcon width="28.5px" height="30px" />
        </Flex>

        {todos && isListHasTodayTask(todos) && (
          <TodayTodosCheckbox showTodayTask onChange={onCheckboxChange} />
        )}

        {showTodayTask && todos && isListHasTodayTask(todos) && (
          <TodayTaskList setTodos={setTodos} todos={todos} refetch={refetch} />
        )}

        {isLoading && (
          <Stack>
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
          </Stack>
        )}

        {todos && (
          <TodosAccordion
            setTodos={setTodos}
            refetch={refetch}
            todosBundles={todos}
          />
        )}
      </Box>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        position="absolute"
        right="0"
        bottom="-40px"
        borderRadius="none"
        borderBottomRadius="36px"
        width="100%"
        bg="blue.100"
        _hover={{
          bg: "blue.200",
        }}
      >
        Add Todo
      </Button>

      <AddTodoItemForm
        refetch={refetch}
        isOpen={isOpen}
        onClose={onModalClose}
      />
    </Box>
  );
};

const TodayTaskList = ({ todos, refetch, setTodos }: ITodayTaskList) => (
  <List
    border="none"
    borderRadius="25px"
    marginBottom="32px"
    paddingLeft="15px"
    css={{
      boxShadow:
        "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
    }}
    bg="#282828"
  >
    {todos[returnTodayDate()].map((todo) => (
      <TodoListItem
        setTodos={setTodos}
        refetch={refetch}
        todo={todo}
        key={todo.id}
      />
    ))}
  </List>
);

export default TodoWindow;
