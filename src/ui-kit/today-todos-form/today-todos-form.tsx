import { Checkbox, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface ITodayTodosForm {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const TodayTodosForm = ({ onChange, isChecked }: ITodayTodosForm) => {
  return (
    <Flex mb="15px">
      <Checkbox
        defaultChecked={isChecked}
        onChange={onChange}
        size="lg"
        borderRadius="5px"
        mr="10px"
      />
      <Heading fontSize="24px" fontStyle="Regular" marginRight="20px" as="h2">
        Today tasks:
      </Heading>
    </Flex>
  );
};

export default TodayTodosForm;
