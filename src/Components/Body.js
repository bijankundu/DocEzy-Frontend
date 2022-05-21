import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    VStack,
    HStack,
    Button,
    useColorModeValue,
    Spacer,
  } from '@chakra-ui/react';
import { FaIcons, FaLaptopHouse,FaMicroscope, FaClinicMedical } from 'react-icons/fa'


  export default function Body() {
    return (
      <VStack>
        <HStack>
          <Box p={6}>
          <Flex>
          <a href="">
          <Box w="380px" h="150px" border={"1px"} borderRadius='md' borderColor={'violet'} bg='purple.50'>
            <Flex justifyContent={'center'} p={10}>
              <HStack>
            <FaLaptopHouse size={80} color={'purple'}/>
              <VStack>
              <Text fontWeight={'Bold'} fontSize={30} color={'purple'}>Video</Text>
              <Text display={'flex'}>Consult virtually with Doctors</Text>
              </VStack>
             
             </HStack>
            </Flex>
            
          </Box>
          </a>
          <Spacer w={55}/>
          <a href="">
          <Box w="380px" h="150px" border={"1px"} borderRadius='md' borderColor={'violet'} bg='purple.50'>
          <Flex justifyContent={'center'} p={10}>
              <HStack>
            <FaClinicMedical size={80} color={'purple'}/>
              <VStack>
              <Text fontWeight={'Bold'} fontSize={30} color={'purple'}>Inclinic</Text>
              <Text display={'flex'}>Find doctors near you</Text>
              </VStack>
             
             </HStack>
            </Flex>
          </Box>
          </a>
          <Spacer w={55}/>
          <a href="">
          <Box w="380px" h="150px" border={"1px"} borderRadius='md' borderColor={'violet'} bg='purple.50'>
          <Flex justifyContent={'center'} p={10}>
              <HStack>
            <FaMicroscope size={80} color={'purple'}/>
              <VStack>
              <Text fontWeight={'Bold'} fontSize={30} color={'purple'}>Lab Test</Text>
              <Text display={'flex'}>Lab Tests at Home</Text>
              </VStack>
             
             </HStack>
            </Flex>
          </Box>
          </a>
          <Spacer/>
          </Flex>
          </Box>
        </HStack>
        <Box w={'1250px'}>
          <Text textAlign={'left'} fontSize='xl' fontWeight={700}>Looking for a Specialist?</Text>
        </Box>
        <HStack>
          <Box p={5}>
          <Flex direction={'row'}>
            <a href=''>
            <Box>
            <Image boxSize={150} src="/Images/acne.jpg"></Image>
          </Box>
            </a>
          <Spacer w={50}/>
          <a href=''>
          <Box>
          <Image boxSize={150} src="/Images/anxiety.jpg"></Image>
          </Box>
          </a>
          <Spacer w={50}/>
          <a href=''>
          <Box>
          <Image boxSize={150}src="/Images/fever.jpg"></Image>
          </Box>
          </a>
          <Spacer w={50}/>
          <a href=''>
          <Box>
          <Image boxSize={150} src="/Images/hairfall.jpg"></Image>
          </Box>
          </a>
          <Spacer w={50}/>
          <a href=''>
          <Box>
          <Image boxSize={150} src="/Images/joint-pain.jpg"></Image>
          </Box>
          </a>
          <Spacer w={50}/>
          <a href=''>
          <Box>
          <Image boxSize={150} src="/Images/stomachache.jpg"></Image>
          </Box>
          </a>
          <Spacer w={50}/>
          <a href=''>
          <Box>
          <Image boxSize={150} src="/Images/toothache.jpg"></Image>
          </Box>
          </a>
          </Flex>
          </Box>
        </HStack>
      </VStack>
    );
  }
