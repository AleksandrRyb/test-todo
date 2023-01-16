import { useState } from "react";
import { useMutation } from "react-query";
import { v4 as uuidv4 } from "uuid";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import ColorPicker from "../color-picker";
import { addTodo } from "../../api/mutations";

interface ITodoItemForm {
  isOpen: boolean;
  onClose: () => void;
}

const TodoItemForm = ({ isOpen, onClose }: ITodoItemForm) => {
  const [color, setColor] = useState("gray.500");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const currentDate = new Date();
  const today = currentDate.setDate(currentDate.getDate() - 1);

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const onCreateTodo = async () => {
    const todo = {
      id: uuidv4(),
      title,
      description,
      colorBadge: color,
      date,
    };

    await mutation.mutate(todo);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create To Do</ModalHeader>

        <ModalBody>
          <Flex flexDirection="column" alignItems="space-between">
            <FormControl mb="20px" variant="floating" isRequired>
              <Input
                placeholder=" "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel>Title</FormLabel>
            </FormControl>

            <FormControl mb="20px" variant="floating" isRequired>
              <Textarea
                resize="none"
                placeholder=" "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormLabel>Description</FormLabel>
            </FormControl>

            <FormControl mb="20px">
              <FormLabel mb="0px">Badge Color</FormLabel>
              <ColorPicker setColor={setColor} color={color} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel mb="0px">Date</FormLabel>
              <SingleDatepicker
                minDate={new Date(today)}
                name="date-input"
                date={date}
                onDateChange={setDate}
              />
            </FormControl>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button variant="link" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={onCreateTodo}
            bg="blue.100"
            color="textColor.white"
            _hover={{ bg: "blue.200" }}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TodoItemForm;
