import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { FaBookMedical } from "react-icons/fa";


const data = [
  {
    id: nanoid(),
    text: "General Store",
    quantity: "75",
  },
  {
    id: nanoid(),
    text: "Pharmaceuticals",
    quantity: 34,
  },
  {
    id: nanoid(),
    text: "Non Pharmaceuticals",
    quantity: 50,
  },
];

const Stores = () => {
  return (
    <VStack mt={10} height={"100vh"} w={"full"} alignItems={"center"}>
      <HStack p={3} w={'full'} justifyContent={'space-between'}>
        {data.map((item) => (
          <Box rounded={"lg"} boxShadow={"lg"} 
          p={3} key={item.id}
          border={'1px'}
          borderColor={'gray.100'}
          >
            <IconButton rounded={"full"}>
              <FaBookMedical />
            </IconButton>
            <Box ml={10} w={"200px"}>
              <Text fontSize={"lg"} color={"gray.500"}>
                {item.text}
              </Text>
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                {item.quantity}
              </Text>
            </Box>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default Stores;
