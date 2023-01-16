import React from "react";
import { useQuery } from "react-query";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { getTodos } from "../../api/queries";

import AddTodoForm from "../../ui-kit/todo-item-form";

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
      height="auto"
      minHeight="200px"
      paddingX="20px"
      paddingY="13px"
      position="relative"
      bg="gray.100"
      borderRadius="30px"
    >
      <Flex paddingX="17px" alignItems="center" justifyContent="space-between">
        <Heading fontSize="36px" as="h1">
          To Do
        </Heading>
        <SettingsIcon width="28.5px" height="30px" />
      </Flex>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        position="absolute"
        right="0"
        bottom="0"
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
