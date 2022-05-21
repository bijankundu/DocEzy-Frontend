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
      <Box p={"2px"}>
        <Flex wrap={'wrap'}>
          <Link to={'Consult'}>
            <Box
              w="380px"
              h="150px"
              border={"1px"}
              borderRadius="md"
              borderColor={"violet"}
              bg="purple.50"
            >
              <Flex justifyContent={"center"} p={10}>
                <FaLaptopHouse size={80} color={"purple"} />
                <VStack>
                  <Text fontWeight={"Bold"} fontSize={30} color={"purple"}>
                    Video
                  </Text>
                  <Text display={"flex"}>Consult virtually with Doctors</Text>
                </VStack>
              </Flex>
            </Box>
          </Link>
          <Spacer w={"40px"} />
          <a href="">
            <Box
              w="380px"
              h="150px"
              border={"1px"}
              borderRadius="md"
              borderColor={"violet"}
              bg="purple.50"
            >
              <Flex justifyContent={"center"} p={10}>
                <FaClinicMedical size={80} color={"purple"} />
                <VStack>
                  <Text fontWeight={"Bold"} fontSize={30} color={"purple"}>
                    Inclinic
                  </Text>
                  <Text display={"flex"}>Find doctors near you</Text>
                </VStack>
              </Flex>
            </Box>
          </a>
          <Spacer />
          <a href="">
            <Box
              w="380px"
              h="150px"
              border={"1px"}
              borderRadius="md"
              borderColor={"violet"}
              bg="purple.50"
            >
              <Flex justifyContent={"center"} p={10}>
                <FaMicroscope size={80} color={"purple"} />
                <VStack>
                  <Text fontWeight={"Bold"} fontSize={30} color={"purple"}>
                    Lab Test
                  </Text>
                  <Text display={"flex"}>Lab Tests at Home</Text>
                </VStack>
              </Flex>
            </Box>
          </a>
        </Flex>
      </Box>

      <Box w={"1250px"}>
        <Text textAlign={"left"} fontSize="xl" fontWeight={700}>
          Looking for a Specialist?
        </Text>
      </Box>

      <Box p={5}>
        <Flex direction={"row"}>
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
      </Box>
    </VStack>
  );
}
