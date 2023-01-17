import React from "react";
import { useQuery } from "react-query";
import { Flex, Box, Heading, Button, Stack, Skeleton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { getTodos } from "../../api/queries";

import AddTodoForm from "../../ui-kit/todo-item-form";
import TodosAccordion from "../../ui-kit/todos-accordion/todos-accordion";

const TodoWindow = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const query = useQuery("todos", getTodos);

  console.log(query);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      width="390px"
      height="500px"
      minHeight="200px"
      paddingX="20px"
      paddingY="13px"
      position="relative"
      bg="gray.100"
      borderTopRadius="30px"
    >
      <Box
        overflow="scroll"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        height="500px"
      >
        <Flex
          mb="15px"
          paddingX="17px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading fontSize="36px" as="h1">
            To Do
          </Heading>
          <SettingsIcon width="28.5px" height="30px" />
        </Flex>

        {query.isLoading && (
          <Stack>
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
            <Skeleton borderRadius="25px" height="79px" />
          </Stack>
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

      <AddTodoForm isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TodoWindow;
