import { VStack, Heading, Flex,Text, Box } from '@chakra-ui/react'
import React from 'react'

function Top(props) {
  return (
    <div>
        <VStack position={"absolute"} mt="0">
            <Flex direction={"column"}>
                <Heading fontWeight={"semibold"} size="xl" mb={"2"}>Dr. {props.name}</Heading>
                <Text>{props.degree}</Text>
                <Box textAlign={"left"} display="flex">
                    <Text fontWeight={"semibold"}>{props.genre} </Text>
                    <Text mr="1" ml="1"> | </Text>
                    <Text>{props.exp}</Text>
                </Box>
                <Box mb={"10px"}>
                  <Text size="lg" fontWeight={"bold"} color="red" mt={"5"}>Rs. {props.fee}</Text>
                  <Text borderTop={"2px"} borderTopColor="gray.200" width="400px">{props.lang}</Text>
                </Box>
                
            </Flex>
                
        </VStack>
    </div>
  )
}

export default Top