import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

const Items = () => {
    const navigate = useNavigate()
  return (
    <VStack mt={10} w={"full"}>
      <HStack mt={5} w={"100%"} justifyContent={"flex-end"}>
        <Button leftIcon={<FaPlus />} onClick={()=>navigate('/add-item')}>New</Button>

      </HStack>
      <Text>items</Text>
    </VStack>
  );
}

export default Items