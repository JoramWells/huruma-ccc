import {  Button, HStack, Text, VStack } from "@chakra-ui/react"
import { FaFileDownload, FaPrint } from "react-icons/fa"

const PriceLists = () => {
  return (
    <VStack mt={10}
    w={'full'}
    >
    <HStack
        mt={5}
        w={'100%'}
        justifyContent={'flex-end'}

    >
        <Button leftIcon={<FaPrint/>}
        >Print Report</Button>

        <Button leftIcon={<FaFileDownload/>}>Download</Button>

    </HStack>
        <Text>
            PriceLists
        </Text>
    </VStack>
  )
}

export default PriceLists