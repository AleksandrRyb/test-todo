import { useMutation } from "react-query";
import { Box, Flex, Heading, ListItem, Switch, Text } from "@chakra-ui/react";
import { openTodo, closeTodo } from "api/mutations";
import { FetchedTodo, ITodo, QueryRefetch } from "types";

interface ITodoListItem {
  todo: ITodo;
  refetch: QueryRefetch;
  setTodos: React.Dispatch<React.SetStateAction<FetchedTodo | undefined>>;
}

interface IListItemView {
  todo: ITodo;
  onChangeChecked: (id: string) => void;
  isClosed: boolean;
}

const TodoListItem = ({ todo, refetch, setTodos }: ITodoListItem) => {
  const mutation = useMutation(todo.isClosed ? openTodo : closeTodo, {
    onSuccess: async () => {
      const result = await refetch();
      setTodos(result.data);
    },
  });

  const onChangeChecked = async (id: string) => {
    await mutation.mutateAsync(id);
  };

  return (
    <ListItem display="flex" alignItems="center" height="79px">
      <ListItemView
        todo={todo}
        onChangeChecked={onChangeChecked}
        isClosed={todo.isClosed}
      />
    </ListItem>
  );
};

export const ListItemView = ({
  todo,
  onChangeChecked,
  isClosed,
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
        textDecoration={`${todo.isClosed ? "line-through" : ""}`}
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
      onChange={() => onChangeChecked(todo.id)}
      isChecked={isClosed}
      width="15%"
      display="block"
      alignItems="center"
      size="md"
      colorScheme="blue"
    />
  </>
);

export default TodoListItem;
