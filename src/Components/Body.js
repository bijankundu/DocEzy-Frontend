import React from "react";
import { Box, Image, Flex, Text, VStack, HStack, Spacer, Tag, chakra } from "@chakra-ui/react";
import { FaLaptopHouse, FaMicroscope, FaClinicMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

import acneIcon from "./../assets/acne.jpg";
import anxietyIcon from "./../assets/anxiety.jpg";
import feverIcon from "./../assets/fever.jpg";
import hairfallIcon from "./../assets/hairfall.jpg";
import jointPainIcon from "./../assets/joint-pain.jpg";
import stomachacheIcon from "./../assets/stomachache.jpg";
import toothacheIcon from "./../assets/toothache.jpg";
import HomeBanner from "./HomeBanner";

export default function Body() {
  return (
    <VStack>
      <HomeBanner />
      <HStack align={"center"} justify={"space-between"} w={"full"} px={{ lg: 16, base: 8 }} py={20}>
        <Link to={"Consult"}>
          <VStack
            w={350}
            h={150}
            border={"1px"}
            borderRadius="md"
            borderColor={"brand.900"}
            align="center"
            justify={"center"}
            p={6}
          >
            <HStack spacing={6}>
              <FaLaptopHouse size={"5em"} color={"#2926a6"} />
              <VStack align={"left"}>
                <Text fontWeight={"Bold"} fontSize={"2xl"} color={"brand.900"}>
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
        <Spacer w={3} />

        <VStack
          w={350}
          h={150}
          border={"1px"}
          borderRadius="md"
          borderColor={"brand.900"}
          align="center"
          justify={"center"}
          p={6}
        >
          <HStack spacing={6}>
            <FaClinicMedical size={"5em"} color={"#2926a6"} />
            <Spacer w={3} />
            <VStack align={"left"}>
              <Text fontWeight={"Bold"} fontSize={"2xl"} color={"brand.900"}>
                Inclinic
              </Text>
              <VStack wrap={"wrap"} spacing={2} align={"flex-start"}>
                <Text Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                  Find Doctors near you
                </Text>
                <Tag colorScheme={"brand"}>Comming Soon!</Tag>
              </VStack>
            </VStack>
          </HStack>
        </VStack>

        <Spacer w={3} />

        <VStack
          w={350}
          h={150}
          border={"1px"}
          borderRadius="md"
          borderColor={"brand.900"}
          align="center"
          justify={"center"}
          p={6}
        >
          <HStack spacing={6}>
            <FaMicroscope size={"5em"} color={"#2926a6"} />
            <Spacer w={3} />
            <VStack align={"left"}>
              <Text fontWeight={"Bold"} fontSize={"2xl"} color={"brand.900"}>
                Lab Test
              </Text>
              <VStack wrap={"wrap"} spacing={2} align={"flex-start"}>
                <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                  Lab Tests at Home
                </Text>
                <Tag colorScheme={"brand"}>Comming Soon!</Tag>
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      </HStack>

      <Flex w={"100%"}>
        <HStack ml={3} px={{ lg: 16, base: 8 }}>
          <Text fontWeight={"semibold"} fontSize="28px">
            Looking for Specialist ?
          </Text>
        </HStack>
      </Flex>

      <VStack px={{ lg: 16, base: 8 }} pt={{ lg: 8, base: 4 }} pb={{ lg: 20, base: 10 }}>
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
