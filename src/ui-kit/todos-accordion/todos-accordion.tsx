import { Accordion } from "@chakra-ui/react";
import type { ITodo } from "../../api/mutations";

interface ITodosAccordion {
  accordionTitle: string;
  accordionItems: ITodo[];
}

const TodosAccordion = ({
  accordionTitle,
  accordionItems,
}: ITodosAccordion) => {
  return <Accordion></Accordion>;
};

export default TodosAccordion;
