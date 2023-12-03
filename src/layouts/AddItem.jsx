import { Badge, Box, FormControl, FormLabel, HStack, Input, VStack } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'

const AddItem = () => {
    const navigate = useNavigate()
  return (
    <VStack w={"full"} h={"100vh"}>
      <Box w={"50%"} mt={5} boxShadow={"lg"} p={5} rounded={"lg"}>
        <FormControl>
        <HStack w={'full'}
        justifyItems={'center'}
        alignContent={'center'}
        alignItems={'center'}
        >
          <FormLabel mt={1}>Item Type</FormLabel>
          <Badge
          _hover={{
            cursor:'pointer',
            bgColor:'gray.100'
          }}
          colorScheme="green"
          onClick={()=>navigate('/add-item-type')}
          >Add Item Type</Badge>
        </HStack>
          <Input placeholder="Enter Item Type" />
        </FormControl>

        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel>Sub Item of</FormLabel>
          <Input placeholder="Enter Sub Item of" />
        </FormControl>

        {/* category */}
        <FormControl mt={5}>
          <FormLabel>Item Category</FormLabel>
          <Input placeholder="Select Item Category" />
        </FormControl>

        {/* item code */}
        <FormControl mt={5}>
          <FormLabel>Item Code</FormLabel>
          <Input placeholder="Enter Item code" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Item Description</FormLabel>
          <Input as={"textarea"} placeholder="Enter Sub Item of" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Measuring Unit</FormLabel>
          <Input placeholder="Select Measuring Unit" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Buying Price</FormLabel>
          <Input placeholder="Select Buying Price" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Selling Price</FormLabel>
          <Input placeholder="Select Selling Price" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Reorder Level</FormLabel>
          <Input placeholder="Enter Reorder Level" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Expense Account</FormLabel>
          <Input placeholder="Select Expense Account" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Select Income Account</FormLabel>
          <Input placeholder="Select Income Account" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Brand</FormLabel>
          <Input placeholder="Select Brand" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Buying Price</FormLabel>
          <Input placeholder="Select Store" />
        </FormControl>
      </Box>
    </VStack>
  );
};

export default AddItem;
