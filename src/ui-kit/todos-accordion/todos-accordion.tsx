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
  ListItem,
  Switch,
  Text,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import type { ITodo } from "../../api/mutations";

interface ITodosAccordion {
  todosBundles: { [key: string]: ITodo[] };
}

const TodosAccordion = ({ todosBundles }: ITodosAccordion) => {
  return (
    <Accordion allowMultiple>
      {Object.keys(todosBundles).map((todoBundleKey) => (
        <AccordionItem
          key={todoBundleKey}
          border="none"
          borderRadius="25px"
          marginBottom="32px"
          paddingLeft="15px"
          paddingRight="32px"
          css={{
            "box-shadow":
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
          >
            <AccordionButton paddingX="0">
              <Flex display="flex" justifyContent="space-between" width="100%">
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
                    {todoBundleKey} Tasks
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
          <AccordionPanel paddingX="0px">
            <List>
              {todosBundles[todoBundleKey].map((todo) => (
                <ListItem height="79px" mb="20px" key={todo.id}>
                  <Flex>
                    <Box
                      height="40px"
                      width="5px"
                      marginRight="13px"
                      borderRadius="3px"
                      bg={todo.colorBadge}
                    />
                    <Flex flex="8" flexDirection="column">
                      <Heading fontSize="24px" as="h2">
                        {todo.title}
                      </Heading>
                      <Text>{todo.description}</Text>
                    </Flex>
                    <Switch
                      display="flex"
                      alignItems="center"
                      size="md"
                      colorScheme="blue"
                    />
                  </Flex>
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TodosAccordion;
