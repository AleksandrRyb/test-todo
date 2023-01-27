import React, { useState } from "react";
import { Box, Flex, Heading, ListItem, Switch, Text } from "@chakra-ui/react";
import type { ITodo } from "../../api/mutations";

interface ITodoListItem {
  todo: ITodo;
}

interface IListItemView {
  todo: ITodo;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoListItem = ({ todo }: ITodoListItem) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ListItem display="flex" alignItems="center" height="79px">
      <ListItemView
        todo={todo}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </ListItem>
  );
};

export const ListItemView = ({
  todo,
  isChecked,
  setIsChecked,
}: IListItemView) => (
  <>
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
      onChange={() => setIsChecked(!isChecked)}
      isChecked={isChecked}
      width="15%"
      display="block"
      alignItems="center"
      size="md"
      colorScheme="blue"
    />
  </>
);

export default TodoListItem;
