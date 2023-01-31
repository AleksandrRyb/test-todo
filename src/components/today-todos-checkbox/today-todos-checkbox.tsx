import React from "react";
import { Checkbox, Flex, Heading } from "@chakra-ui/react";

interface ITodayTodosCheckbox {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const TodayTodosCheckbox = ({ onChange, isChecked }: ITodayTodosCheckbox) => {
  return (
    <Flex mb="15px">
      <Checkbox
        defaultChecked={isChecked}
        onChange={onChange}
        size="lg"
        borderRadius="5px"
        marginRight="10px"
      />
      <Heading fontSize="24px" fontStyle="Regular" marginRight="20px" as="h2">
        Today tasks:
      </Heading>
    </Flex>
  );
};

export default TodayTodosCheckbox;
