import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Image,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Link as Linkto, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";

import { userStateSelector, resetUserDetails } from "../store/userSlice";
import { setSocket, socketStateSelector } from "./../store/socketSlice";
import { useAutoLogin } from "./../api/userService";
import brandLogo from "./../assets/brand-logo.svg";

const Links = ["Book Appointment", "Book Lab Test", "Medicines", "Video Consult", "Call for Ambulance"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const user = useSelector(userStateSelector);
  const { autoLogin } = useAutoLogin();
  const dispatch = useDispatch();
  const { socket } = useSelector(socketStateSelector);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && Object.keys(user).length === 0) {
      autoLogin();
    } else if (Object.keys(user).length === 0) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (Object.keys(user).length !== 0 && !socket) {
      const customSocket = io("http://localhost:8008");
      dispatch(setSocket(customSocket));
    }

    return () => {
      if (socket) socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Box bg={"purple.50"} px={4}>
        <Flex alignItems={"center"} justifyContent={"space-between"} py={4}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Linkto to={"/"}>
              <Image src={brandLogo} h={10} />
            </Linkto>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Linkto to={"/Login"}>
              <Button
                variant={"solid"}
                // colorScheme={'red'}
                size={"md"}
                mr={4}
              >
                Login
              </Button>
            </Linkto>
            <Linkto to={"/Signup"}>
              <Button variant={"solid"} colorScheme={"red"} size={"md"} mr={4}>
                Signup
              </Button>
            </Linkto>
            <Menu>
              {/* <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton> */}
              <MenuList>
                <VStack>
                  <MenuItem>
                    <Box w="100%">
                      <Button w="100%" variant="ghost" onClick={onOpen}>
                        Sign Up/ Sign In
                      </Button>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <Button variant="ghost" onClick={onOpen}>
                      Logout
                    </Button>
                  </MenuItem>
                </VStack>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
