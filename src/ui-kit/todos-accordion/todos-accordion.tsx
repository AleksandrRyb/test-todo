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
              <Flex display="flex" justifyContent="space-between">
                <Box
                  marginRight="13px"
                  marginLeft="13px"
                  height="40px"
                  width="5px"
                  borderRadius="3px"
                  bg="gray.500"
                />
                <Box fontSize="24px" fontStyle="Regular" marginRight="20px">
                  {todoBundleKey} Tasks
                </Box>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </Heading>
          <AccordionPanel>
            <List>
              {todosBundles[todoBundleKey].map((todo) => (
                <ListItem mb="20px" key={todo.id}>
                  <Flex>
                    <Box
                      mr="10px"
                      borderRadius="3px"
                      w="5px"
                      bg={todo.colorBadge}
                    />
                    <Flex flex="8" flexDirection="column">
                      <Heading as="h3">{todo.title}</Heading>
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
