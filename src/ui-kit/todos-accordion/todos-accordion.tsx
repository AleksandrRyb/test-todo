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
        <AccordionItem border="none" key={todoBundleKey}>
          <Heading as="h2">
            <AccordionButton>
              <Flex display="flex" justifyContent="space-between">
                <Box w="5px" bg="gray.500" />
                <Box marginRight="20px">{todoBundleKey}</Box>
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
