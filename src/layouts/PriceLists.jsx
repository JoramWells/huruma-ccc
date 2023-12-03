import {  Button, HStack, Text, VStack } from "@chakra-ui/react"
import axios from "axios"
import { useEffect } from "react"
import { FaFileDownload, FaPrint } from "react-icons/fa"

const PriceLists = () => {
  const fetchData = async () =>{
    await axios.get(
      "http://localhost:5000/pricelists/get-all-pricelists"
    ).then(res=> console.log(res.data)).catch(error=>console.log(error.message))
  }

  useEffect(()=>{
    fetchData()
  },[])
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