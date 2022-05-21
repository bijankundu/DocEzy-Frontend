import React from 'react'
import Card from './Doctor-card/Card'
import contacts from './Doctor-card/DocList'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'

function createCard(contacts){
  return <Card 
  name={contacts.name} 
  imgURL={contacts.imgURL} 
  degree={contacts.degree}
  genre={contacts.genre}
  exp={contacts.exp}
  fee={contacts.fee} 
  lang={contacts.lang}
  />
}


function Doctors() {
  return (
    <VStack>
      <Flex className='Doctor Available' width={'100%'}>
        <Box ml='10px'>
          <Text fontWeight={'semibold'} fontSize='35px' alignSelf={'left'}>Doctors Available</Text>
        </Box>
      </Flex>
      <Flex width={'100%'} className='Doctor-Cards'>
        <Box ml={'18px'} mb='20px'>
          {contacts.map(createCard)}
        </Box> 
      </Flex>
    </VStack>
  )
}

export default Doctors