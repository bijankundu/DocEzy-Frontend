import { Box, Flex, Spacer, Text, VStack, AvatarGroup, Avatar, HStack, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { GiStarMedal } from "react-icons/gi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { HiOutlineCursorClick, HiOutlineDocumentDuplicate, HiOutlineChatAlt2, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

function consult() {
  return (
    <VStack>
      <Flex w={"100%"} direction="column">
        <Box bg="gray.100" w="100%" p={10}>
          <Text align={"center"} fontWeight="semibold" fontSize="35px">
            Skip the travel!
            <br />
            <Text>Take Online Doctor Consultation</Text>
          </Text>
          <Spacer></Spacer>
          <Text align={"center"} fontSize="20px">
            Private consultation
          </Text>
          <Spacer h={"15px"} />
          <VStack align={"center"}>
            <Flex align={"center"}>
              <AvatarGroup size="md" max={2} alignItems="center">
                <Avatar
                  name="Ryan Florence"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0k2rCQT_0YdmbqUxbjGNtwxf7NsDLJr3HA&usqp=CAU"
                />
                <Avatar name="Segun Adebayo" src="https://deephospitals.in/images/doctor-2.jpg" />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
              </AvatarGroup>
              <Spacer w={"10px"} />
              <Text>+106 Doctors are online </Text>
              <Spacer w={"10px"} />
              <Text color={"#48BB78"}>●</Text>
            </Flex>
          </VStack>
          <VStack align={"center"} mt="20px">
            <Button size={"md"} bg={"brand.800"} color={"white"} _hover={{ bg: "brand.600" }}>
              Consult Now
            </Button>
          </VStack>
          <VStack mt={"40px"} fontWeight={"semibold"}>
            <Flex>
              <GiStarMedal size={"20px"} />
              <Text ml={"8px"} fontSize="14px">
                Verified Doctors
              </Text>

              <Spacer width={"25px"} />

              <AiOutlineFileProtect size={"20px"} />
              <Text ml={"8px"} fontSize="14px">
                Digital Prescription
              </Text>

              <Spacer width={"25px"} />

              <BsChatLeftText size={"20px"} />
              <Text ml={"8px"} fontSize="14px">
                Free Followup
              </Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>

      <Flex width={"100%"} px={10}>
        <VStack w="100%" p={4} align="left">
          <Flex justify={"space-between"}>
            <Flex direction={"column"}>
              <Text fontWeight={"semibold"} fontSize="35px">
                25+ Specialities
              </Text>

              <Text fontSize={"18px"} color="#787887" mt="20px">
                Consult with top doctors across specialities
              </Text>
            </Flex>
            <VStack align={"right"} p="30px">
              <Link to={"/Doctors"}>
                <Button size={"md"} colorScheme="white" border={"1px"} color="black">
                  See all Specialities
                </Button>
              </Link>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
      <Flex width={"100%"} px={10}>
        <VStack w="100%" p={4} align="left">
          <Flex justify={"space-between"}>
            <Flex direction={"column"}>
              <Text fontWeight={"semibold"} fontSize="35px">
                Common Health Concerns
              </Text>

              <Text fontSize={"18px"} color="#787887" mt="20px">
                Consult a doctor online for any health issue
              </Text>
            </Flex>
            <VStack align={"right"} p="30px">
              <Button size={"md"} colorScheme="white" border={"1px"} color="black">
                See all Symptoms
              </Button>
            </VStack>
          </Flex>
        </VStack>
      </Flex>

      <Flex width={"100%"} direction={"column"} justify="space-evenly">
        <VStack w={"100%"} p={4}>
          <Heading fontSize={"35px"} fontWeight="semibold">
            How it works
          </Heading>

          <Flex w={"100%"} justify={"space-evenly"} wrap="wrap">
            <VStack mt="50px" p={4}>
              <VStack w={"60px"} h="60px" justify={"center"} borderRadius={"50%"} bg={"gray.200"}>
                <HiOutlineCursorClick size={"30px"} color="#2D3748" />
              </VStack>
              <Text color="gray.700" fontWeight={"600"}>
                Select a speciality or symptom
              </Text>
            </VStack>

            <VStack mt="50px" p={4}>
              <VStack w={"60px"} h="60px" justify={"center"} borderRadius={"50%"} bg={"gray.200"}>
                <HiOutlineChatAlt2 size={"30px"} color="#2D3748" />
              </VStack>
              <Text color="gray.700" fontWeight={"600"}>
                Audio/ video call with a verified doctor
              </Text>
            </VStack>

            <VStack mt="50px" p={4}>
              <VStack w={"60px"} h="60px" justify={"center"} borderRadius={"50%"} bg={"gray.200"}>
                <HiOutlineDocumentDuplicate size={"30px"} color="#2D3748" />
              </VStack>
              <Text color="gray.700" fontWeight={"600"}>
                Get a digital prescription & a free follow-up
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
      <Flex w="100%" wrap={"wrap"}>
        <HStack w={"100%"} bg={"gray.800"} p={2}>
          <Flex w="100%" wrap={"wrap"} justify="space-around">
            <VStack color={"white"} align="left" p={5}>
              <Heading fontSize={"35px"} fontWeight="semibold">
                2,00,000+
              </Heading>
              <Text fontSize={"14px"} fontWeight="semibold">
                Happy Users
              </Text>
            </VStack>
            <VStack color={"white"} align="left" p={5}>
              <Heading fontSize={"35px"} fontWeight="semibold">
                20,000+
              </Heading>
              <Text fontSize={"14px"} fontWeight="semibold" ext>
                Verified Doctors
              </Text>
            </VStack>
            <VStack color={"white"} align="left" p={5}>
              <Heading fontSize={"35px"} fontWeight="semibold">
                25+
              </Heading>
              <Text fontSize={"14px"} fontWeight="semibold">
                Specialities
              </Text>
            </VStack>
            <VStack color={"white"} align="left" p={5}>
              <Heading fontSize={"35px"} fontWeight="semibold">
                4.5 / 5
              </Heading>
              <Text fontSize={"14px"} fontWeight="semibold">
                App Rating
              </Text>
            </VStack>
          </Flex>
        </HStack>
      </Flex>
      <VStack w={"100%"}>
        <HStack w={"100%"} p="8">
          <Text fontWeight={"bold"} fontSize="35px" align={"left"}>
            Benefits of Online Consultation
          </Text>
        </HStack>
        <Flex w={"100%"} wrap={"wrap"} justify="start">
          <VStack w={"400px"} align={"left"} p="10">
            <Flex>
              <HiCheck size={25} />
              <Heading fontSize={"20px"} fontWeight="semibold" ml="5px">
                Consult Top Doctors 24x7
              </Heading>
            </Flex>

            <Flex wrap={"wrap"}>
              <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
              </Text>
            </Flex>
          </VStack>

          <VStack w={"400px"} align={"left"} p="10">
            <Flex>
              <HiCheck size={25} />
              <Heading fontSize={"20px"} fontWeight="semibold" ml="5px">
                Convenient and Easy
              </Heading>
            </Flex>

            <Flex wrap={"wrap"}>
              <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                Start an instant consultation within 2 minutes or do video consultation at the scheduled time.
              </Text>
            </Flex>
          </VStack>

          <VStack w={"400px"} align={"left"} p="10">
            <Flex>
              <HiCheck size={25} />
              <Heading fontSize={"20px"} fontWeight="semibold" ml="5px">
                100% Safe Consultations
              </Heading>
            </Flex>

            <Flex wrap={"wrap"}>
              <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                Be assured that your online consultation will be fully private and secured.
              </Text>
            </Flex>
          </VStack>

          <VStack w={"400px"} align={"left"} p="10">
            <Flex>
              <HiCheck size={25} />
              <Heading fontSize={"20px"} fontWeight="semibold" ml="5px">
                Similar Clinic Experience
              </Heading>
            </Flex>

            <Flex wrap={"wrap"}>
              <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                Experience clinic-like consultation through a video call with the doctor.
              </Text>
            </Flex>
          </VStack>

          <VStack w={"400px"} align={"left"} p="10">
            <Flex>
              <HiCheck size={25} />
              <Heading fontSize={"20px"} fontWeight="semibold" ml="5px">
                Free Follow-up
              </Heading>
            </Flex>

            <Flex wrap={"wrap"}>
              <Text fontSize={"14px"} fontWeight="semibold" color="#787887">
                Get a valid digital prescription and a 7-day, free follow-up for further clarifications.
              </Text>
            </Flex>
          </VStack>
        </Flex>
      </VStack>
      <Flex width={"100%"}>
        <VStack w="100%" p={8} align="left" bg={"gray.800"}>
          <Flex justify={"space-between"}>
            <Flex direction={"column"}>
              <Text fontWeight={"semibold"} color="white" fontSize="35px">
                Still delaying your health concerns ?
              </Text>

              <Text fontSize={"18px"} color="gray.400" mt="20px">
                Connect with India's top doctors online
              </Text>
            </Flex>
            <VStack align={"right"} p="30px">
              <Button
                size={"lg"}
                variant={"outline"}
                borderColor={"brand.800"}
                bg={"white"}
                color={"brand.800"}
                _hover={{ bg: "brand.300" }}
              >
                Consult Now
              </Button>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
}

export default consult;
