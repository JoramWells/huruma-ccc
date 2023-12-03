import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const Step2 = () => {
  return (
    <Box>
      <FormControl mt={5}>
        <FormLabel>Buying Price</FormLabel>
        <Input placeholder="Select Buying Price" />
      </FormControl>

      <FormControl mt={5}>
        <FormLabel>Selling Price</FormLabel>
        <Input placeholder="Select Selling Price" />
      </FormControl>

      <FormControl mt={5}>
        <FormLabel>Expense Account</FormLabel>
        <Input placeholder="Select Expense Account" />
      </FormControl>

      <FormControl mt={5}>
        <FormLabel>Select Income Account</FormLabel>
        <Input placeholder="Select Income Account" />
      </FormControl>


    </Box>
  );
}

export default Step2