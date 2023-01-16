import { useState } from "react";
import { useMutation } from "react-query";
import { v4 as uuidv4 } from "uuid";
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
            <FormControl mb="20px" variant="floating">
              <Input
                placeholder=" "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel>Title</FormLabel>
            </FormControl>

            <FormControl mb="20px" variant="floating">
              <Textarea
                resize="none"
                placeholder=" "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormLabel>Description</FormLabel>
            </FormControl>

            <FormControl>
              <FormLabel mb="0px">Badge Color</FormLabel>
              <ColorPicker setColor={setColor} color={color} />
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
