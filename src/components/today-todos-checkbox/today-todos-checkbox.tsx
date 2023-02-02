import React from "react";
import { Checkbox, Flex, Heading } from "@chakra-ui/react";

interface ITodayTodosCheckbox {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showTodayTask: boolean;
}

const TodayTodosCheckbox = ({
  onChange,
  showTodayTask,
}: ITodayTodosCheckbox) => {
  return (
    <Flex mb="15px">
      <Checkbox
        defaultChecked={showTodayTask}
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
