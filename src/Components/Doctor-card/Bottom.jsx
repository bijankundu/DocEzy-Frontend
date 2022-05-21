import { Flex, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Bottom() {
  return (
    <div>
        <VStack>
        
          <Flex width={"600px"} mt="20px" justify={"space-around"}>
                    
            
              <Button mt="10px" variant='outline' borderRadius={"20px"} p="5">Know More</Button>
              <Link to={'/Consult'}>
                <Button mt="10px" colorScheme='teal' variant='solid' borderRadius={"20px"} p="5">Book Appointment</Button>
              </Link>
          </Flex>

        </VStack>
    </div>
  )
}

export default Bottom