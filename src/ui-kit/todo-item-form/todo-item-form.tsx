import { useState } from "react";
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

interface ITodoItemForm {
  isOpen: boolean;
  onClose: () => void;
}

const TodoItemForm = ({ isOpen, onClose }: ITodoItemForm) => {
  const [color, setColor] = useState("gray.500");
  const [title, setTitle] = useState("");
  console.log(title);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create To Do</ModalHeader>

        <ModalBody>
          <Flex flexDirection="column" alignItems="space-between">
            <FormControl mb="20px" variant="floating" isRequired>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>

            <FormControl mb="20px" variant="floating" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea resize="none" />
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
