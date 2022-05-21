import React from 'react'
import { Flex, VStack, Box, Avatar, Spacer  } from '@chakra-ui/react'
import Top from "./Top"
import Bottom from './Bottom'

function Card(props) {
  return (
    <VStack>
        <Flex width={"100%"} m="8px">
        <Box width={"700px"} height="280px" bg="gray.100" p="8" 
        border={"1px"} borderColor="gray.200" boxShadow='lg' rounded={"md"} mb='10px'>
            <Flex width={"100%"} m="0">
              
               <Top name={props.name} 
                degree={props.degree}
                genre={props.genre}
                exp={props.exp}
                fee={props.fee}
                lang={props.lang}
                />

                <Spacer></Spacer>

                <Avatar 
                ml={"10"}
                w={"150px"}
                h="150px"
                name="" 
                size={"2xl"}
                src={props.imgURL} />

                
            </Flex> 
            <Bottom />
            
        </Box> 
        </Flex>
    </VStack>
  )
}

export default Card