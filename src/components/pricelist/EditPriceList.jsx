import { Button, FormControl, FormLabel, Input, Modal, 
  ModalBody, ModalCloseButton, ModalContent, ModalFooter, 
  ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

const  EditPriceList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} leftIcon={<FaEdit/>}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            <FormLabel>Service Name</FormLabel>
            <Input placeholder="Service Name" />
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditPriceList;
