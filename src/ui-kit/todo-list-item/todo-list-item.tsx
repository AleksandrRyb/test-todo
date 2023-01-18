import { Box, Flex, Heading, ListItem, Switch, Text } from "@chakra-ui/react";
import type { ITodo } from "../../api/mutations";

interface ITodoListItem {
  todo: ITodo;
}

const TodoListItem = ({ todo }: ITodoListItem) => {
  return (
    <ListItem display="flex" alignItems="center" height="79px">
      <Box
        height="40px"
        width="5px"
        marginRight="13px"
        borderRadius="3px"
        bg={todo.colorBadge}
      />
      <Flex
        width="70%"
        marginRight="10%"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          lineHeight="1"
          fontSize="24px"
          as="h2"
        >
          {todo.title}
        </Heading>
        <Text
          fontWeight="600"
          fontSize="14px"
          color="rgba(255, 255, 255, 0.6)"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {todo.description}
        </Text>
      </Flex>
      <Switch
        width="15%"
        display="block"
        alignItems="center"
        size="md"
        colorScheme="blue"
      />
    </ListItem>
  );
};

export default TodoListItem;
