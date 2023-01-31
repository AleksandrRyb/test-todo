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

import TodoItemForm from "components/todo-item-form";
import TodosAccordion from "components/todos-accordion";
import TodayTodosForm from "components/today-todos-form";
import TodoListItem from "components/todo-list-item";
import { isListHasTodayTask, returnTodayDate } from "utils/todos-utils";

const TodoWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const query = useQuery("todos", getTodos);

  const data = query.data;

  const onModalClose = () => {
    setIsOpen(false);
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
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

        {data && isListHasTodayTask(data) && (
          <TodayTodosForm isChecked onChange={onCheckboxChange} />
        )}

        {isChecked && data && isListHasTodayTask(data) && (
          <>
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
              {query.data[returnTodayDate()].map((todo) => (
                <TodoListItem
                  refetch={query.refetch}
                  todo={todo}
                  key={todo.id}
                />
              ))}
            </List>
          </>
        )}

        {query.isLoading && (
          <Stack>
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
          </Stack>
        )}

        {query.data && (
          <TodosAccordion refetch={query.refetch} todosBundles={query.data} />
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

      <TodoItemForm
        refetch={query.refetch}
        isOpen={isOpen}
        onClose={onModalClose}
      />
    </Box>
  );
};

export default TodoWindow;
