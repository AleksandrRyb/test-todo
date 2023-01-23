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
import { getTodos } from "../../api/queries";

import AddTodoForm from "../../ui-kit/todo-item-form";
import TodosAccordion from "../../ui-kit/todos-accordion";
import TodayTodosForm from "../../ui-kit/today-todos-form";
import TodoListItem from "../../ui-kit/todo-list-item";

const TodoWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const query = useQuery("todos", getTodos);

  const onModalClose = () => {
    setIsOpen(false);
  };

  console.log(query.data);

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

        <TodayTodosForm isChecked onChange={onCheckboxChange} />

        {query.isLoading && (
          <Stack>
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
          </Stack>
        )}

        {isChecked && query.data && (
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
            {query.data["01/17/2023"].map((todo) => (
              <TodoListItem todo={todo} />
            ))}
          </List>
        )}

        {query.data && <TodosAccordion todosBundles={query.data} />}
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

      <AddTodoForm isOpen={isOpen} onClose={onModalClose} />
    </Box>
  );
};

export default TodoWindow;
