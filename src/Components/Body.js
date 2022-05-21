import React from "react";
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
} from "@chakra-ui/react";
import {
  FaIcons,
  FaLaptopHouse,
  FaMicroscope,
  FaClinicMedical,
} from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <VStack>
      <HStack align={'center'} p={3}> 
        <Flex wrap={'wrap'} w='100%'>
          <Link to={'Consult'}>
            <VStack
              w="380px"
              h="150px"
              border={"1px"}
              borderRadius="md"
              borderColor={"violet"}
              bg="purple.50"
              mt={'15px'}
              align='center'
            >
              <Flex p={10}>
                <FaLaptopHouse size={80} color={"purple"} />
                <Spacer w={3} />
                <VStack align={'left'}>
                  <Text fontWeight={"Bold"} fontSize={30} color={"purple"}>
                    Video
                  </Text>
                  <Flex wrap={'wrap'} align='center'>
                    <Text fontSize={'14px'} fontWeight='semibold' color='#787887'>
                      Consult virtually with Doctors
                    </Text>
                  </Flex>
                </VStack>
              </Flex>
            </VStack>
          </Link>
          <Spacer w={8}/>
          <a href="">
            <VStack
              w="380px"
              h="150px"
              border={"1px"}
              borderRadius="md"
              borderColor={"violet"}
              bg="purple.50"
              mt={'15px'}
              align='center'
            >
              <Flex p={10}>
                <FaClinicMedical size={80} color={"purple"} />
                <Spacer w={3}/>
                <VStack align={'left'}>
                  <Text fontWeight={"Bold"} fontSize={30} color={"purple"}>
                    Inclinic
                  </Text>
                  <Flex wrap={'wrap'}>
                    <Text Text fontSize={'14px'} fontWeight='semibold' color='#787887'>
                      Find Doctors near you
                    </Text>
                  </Flex>
                </VStack>
              </Flex>
            </VStack>
          </a>
          <Spacer w={3} />
          <a href="">
            <VStack
              w="380px"
              h="150px"
              border={"1px"}
              borderRadius="md"
              borderColor={"violet"}
              bg="purple.50"
              mt={'15px'}
              align='center'
            >
              <Flex p={10}>
                <FaMicroscope size={80} color={"purple"} />
                <Spacer w={3}/>
                <VStack align={'left'}>
                  <Text fontWeight={"Bold"} fontSize={30} color={"purple"}>
                    Lab Test
                  </Text>
                  <Flex wrap={'wrap'}>
                    <Text fontSize={'14px'} fontWeight='semibold' color='#787887'>
                      Lab Tests at Home
                    </Text>
                  </Flex>
                </VStack>
              </Flex>
            </VStack>
          </a>
        </Flex>
      </HStack>

      
      <Flex w={'100%'} >  
        <HStack ml={3}>
          <Text fontWeight={'semibold'} fontSize='28px'>Looking for Specialist ?</Text>
        </HStack>  
      </Flex>
      

      <VStack p={5}>
        <Flex wrap={'wrap'}>
          <Link to={"/Doctors"}>
            <Box>
              <Image boxSize={150} src="/Images/acne.jpg"></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image boxSize={150} src="/Images/anxiety.jpg"></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image boxSize={150} src="/Images/fever.jpg"></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image boxSize={150} src="/Images/hairfall.jpg"></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image boxSize={150} src="/Images/joint-pain.jpg"></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image boxSize={150} src="/Images/stomachache.jpg"></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image boxSize={150} src="/Images/toothache.jpg"></Image>
            </Box>
          </Link>
        </Flex>
      </VStack>
    </VStack>
  );
}
