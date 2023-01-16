import { useState } from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
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
  FormErrorMessage,
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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const currentDate = new Date();
  const today = currentDate.setDate(currentDate.getDate() - 1);

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      setTitle("");
      setDescription("");
      setDate(new Date());
      setColor("gray.500");
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

    mutation.mutate(todo);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create To Do</ModalHeader>
        <form onSubmit={handleSubmit(onCreateTodo)}>
          <ModalBody>
            <Flex flexDirection="column" alignItems="space-between">
              <FormControl
                mb="20px"
                variant="floating"
                isInvalid={Boolean(errors?.title)}
              >
                <Input
                  id="title"
                  placeholder=" "
                  {...register("title", {
                    required: true,
                    minLength: {
                      value: 2,
                      message: "A title can't be empty",
                    },
                  })}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <FormLabel>Title</FormLabel>
                <FormErrorMessage>
                  {errors?.title && (errors?.title?.message as string)}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mb="20px"
                variant="floating"
                isInvalid={Boolean(errors?.description)}
              >
                <Textarea
                  {...register("description", {
                    required: true,
                    minLength: {
                      value: 2,
                      message: "A description can't be empty",
                    },
                  })}
                  id="description"
                  placeholder=" "
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  resize="none"
                />
                <FormLabel>Description</FormLabel>
                <FormErrorMessage>
                  {errors?.description &&
                    (errors?.description?.message as string)}
                </FormErrorMessage>
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
            <Button
              disabled={mutation.isLoading}
              variant="link"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              isLoading={mutation.isLoading}
              type="submit"
              bg="blue.100"
              color="textColor.white"
              _hover={{ bg: "blue.200" }}
            >
              Create
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default TodoItemForm;
