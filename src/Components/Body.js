import React from "react";
import { Box, Image, Flex, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaLaptopHouse, FaMicroscope, FaClinicMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

import acneIcon from "./../assets/acne.jpg";
import anxietyIcon from "./../assets/anxiety.jpg";
import feverIcon from "./../assets/fever.jpg";
import hairfallIcon from "./../assets/hairfall.jpg";
import jointPainIcon from "./../assets/joint-pain.jpg";
import stomachacheIcon from "./../assets/stomachache.jpg";
import toothacheIcon from "./../assets/toothache.jpg";

export default function Body() {
  return (
    <VStack>
      <HStack align={"center"} justify={"space-between"} w={"full"} px={{ lg: 16, base: 8 }} my={10}>
        <Link to={"Consult"}>
          <VStack
            w={300}
            h={150}
            border={"1px"}
            borderRadius="md"
            borderColor={"violet"}
            bg="purple.50"
            align="center"
            justify={"center"}
            p={6}
          >
            <HStack spacing={6}>
              <FaLaptopHouse size={"5em"} color={"purple"} />
              <VStack align={"left"}>
                <Text fontWeight={"Bold"} fontSize={"2xl"} color={"purple"}>
                  Video
                </Text>
                <Flex wrap={"wrap"} align="center">
                  <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                    Consult virtually with Doctors
                  </Text>
                </Flex>
              </VStack>
            </HStack>
          </VStack>
        </Link>
        <Spacer w={8} />

        <VStack
          w={300}
          h={150}
          border={"1px"}
          borderRadius="md"
          borderColor={"violet"}
          bg="purple.50"
          align="center"
          justify={"center"}
        >
          <HStack spacing={6}>
            <FaClinicMedical size={"5em"} color={"purple"} />
            <Spacer w={3} />
            <VStack align={"left"}>
              <Text fontWeight={"Bold"} fontSize={"2xl"} color={"purple"}>
                Inclinic
              </Text>
              <Flex wrap={"wrap"}>
                <Text Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                  Find Doctors near you
                </Text>
              </Flex>
            </VStack>
          </HStack>
        </VStack>

        <Spacer w={3} />

        <VStack
          w={300}
          h={150}
          border={"1px"}
          borderRadius="md"
          borderColor={"violet"}
          bg="purple.50"
          align="center"
          justify={"center"}
        >
          <Flex p={10}>
            <FaMicroscope size={"5em"} color={"purple"} />
            <Spacer w={3} />
            <VStack align={"left"}>
              <Text fontWeight={"Bold"} fontSize={"2xl"} color={"purple"}>
                Lab Test
              </Text>
              <Flex wrap={"wrap"}>
                <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                  Lab Tests at Home
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </VStack>
      </HStack>

      <Flex w={"100%"}>
        <HStack ml={3} px={{ lg: 16, base: 8 }}>
          <Text fontWeight={"semibold"} fontSize="28px">
            Looking for Specialist ?
          </Text>
        </HStack>
      </Flex>

      <VStack px={{ lg: 16, base: 8 }} py={{ lg: 8, base: 4 }}>
        <Flex wrap={"wrap"} justify={"space-evenly"} gap={"4"}>
          <Link to={"/Doctors"}>
            <Box>
              <Image h={120} w={120} src={acneIcon}></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image h={120} w={120} src={anxietyIcon}></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image h={120} w={120} src={feverIcon}></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image h={120} w={120} src={hairfallIcon}></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image h={120} w={120} src={jointPainIcon}></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image h={120} w={120} src={stomachacheIcon}></Image>
            </Box>
          </Link>
          <Spacer w={50} />
          <Link to={"/Doctors"}>
            <Box>
              <Image h={120} w={120} src={toothacheIcon}></Image>
            </Box>
          </Link>
        </Flex>
      </VStack>
    </VStack>
  );
}
