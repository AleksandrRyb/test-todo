import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  List,
} from "@chakra-ui/react";
import { format } from "date-fns";
import type { ITodo } from "../../api/mutations";
import { sortByDate } from "../../utils/array-utils";
import TodoListItem from "../todo-list-item";

interface ITodosAccordion {
  todosBundles: { [key: string]: ITodo[] };
}

const TodosAccordion = ({ todosBundles }: ITodosAccordion) => {
  const converDataToTodayOrYestoday = (date: string) => {
    const timeStamp = new Date().getTime();
    const singleDay = 24 * 60 * 60 * 1000;

    const yesterday = format(new Date(timeStamp - singleDay), "MM/dd/yyyy");
    const tomorrow = format(new Date(timeStamp + singleDay), "MM/dd/yyyy");
    const today = format(new Date(), "MM/dd/yyyy");

    if (yesterday == date) {
      return "Yesterday";
    }

    if (tomorrow == date) {
      return "Tomorrow";
    }

    if (today == date) {
      return "Today";
    }

    return date;
  };

  return (
    <Accordion allowMultiple>
      {Object.keys(todosBundles)
        .sort(sortByDate)
        .map((todoBundleKey) => (
          <AccordionItem
            key={todoBundleKey}
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
            <Heading
              as="h2"
              height="79px"
              display="flex"
              alignItems="center"
              borderRadius="25px"
              paddingRight="32px"
            >
              <AccordionButton paddingX="0">
                <Flex
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Box
                    marginRight="13px"
                    height="40px"
                    width="5.32px"
                    borderRadius="3px"
                    bg="gray.500"
                  />
                  <Flex
                    alignItems="center"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Box fontSize="24px" fontStyle="Regular" marginRight="20px">
                      {converDataToTodayOrYestoday(todoBundleKey)} Tasks
                    </Box>
                    <AccordionIcon
                      borderRadius="10px"
                      color="#282828"
                      bg="#F4F4F4"
                    />
                  </Flex>
                </Flex>
              </AccordionButton>
            </Heading>
            <AccordionPanel padding="0px" paddingRight="10px">
              <List>
                {todosBundles[todoBundleKey].map((todo) => (
                  <TodoListItem todo={todo} key={todo.id} />
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default TodosAccordion;
