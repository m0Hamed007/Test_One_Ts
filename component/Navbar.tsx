import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { keyframes } from '@chakra-ui/react';
import {
  Box, Flex, Text, InputLeftElement, Input, InputGroup, InputRightElement, Menu, MenuDivider,
  MenuItem, MenuButton, MenuList, Button, Avatar, AvatarBadge, Image, Wrap, WrapItem, Heading, Spacer,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Navbar: FC = () => {
  const handleNavigation = (): void => {
  };

  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%, 50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  `;

  return (
    <Flex as="nav" direction="column" p="25px" width="91.5%">
      <Flex width="100%" alignItems="center">
        <Box flex="1" bg="gray.250" width="89%" >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" bottom="10px" right="10px" />}
            />
            <Input
              placeholder="courses, tasks, homeworks.."
              borderRadius="md"
              size="md"
              color="gray.100"
              sx={{
                '@media (max-width: 768px)': {
                  color:'transparent',
                },
              }}
            />
            <InputRightElement>
              <Box display ="flex" alignItems="center">
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        variant="ghost"
                        colorScheme="gray.200"
                        position="absolute"
                        top="2px"
                        right="3px"
                      >
                        <Text fontSize='md'color="gray.600" >Tasks</Text>
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Tasks</MenuItem>
                        <MenuItem>Courses</MenuItem>
                        <MenuItem>Homework</MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Spacer />
        <Box spacing ={10} alignItems="center" bg="gray.200" p="5px">
          <Wrap spacing={3} >
            <WrapItem>
              <Box 
                position="relative"
                w="35px"
                h="35px"
              >
                <Box
                  as="div"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  _before={{
                    content: "''",
                    position: 'absolute',
                    display: 'block',
                    top: "0.5",
                    left:"1.5",
                    width: '150%',
                    height: '150%',
                    boxSizing: 'border-box',
                    marginLeft: '-25%',
                    marginTop: '-25%',
                    borderRadius: '50%',
                    bgColor: 'teal',
                    animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                  }}
                />
                <Avatar src="/img/m1.png" size="xs" mt="0.13in" display="inline-block" flexGrow="2">
    <AvatarBadge boxSize="1em" bg="green.500" position="absolute" top="0" right="0" />
</Avatar>
              </Box>
            </WrapItem>
            <WrapItem>
            <Avatar src="/img/h2.PNG" size="xs" mt="0.13in" display="inline-block">
    <AvatarBadge boxSize="1em" bg="red.500" position="absolute" top="0" right="0" />
           </Avatar>
            </WrapItem>
            <WrapItem>
              <Flex align="center">
                <Image src="/img/es.png" boxSize="35px" alt="Esraa's Image" />
                <Text ml={0} fontWeight="bold" display="inline-block">Israa Adel Ba</Text>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                  </MenuButton>
                  <MenuList bg="white">
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Help && Support</MenuItem>
                    <MenuDivider />
                    <MenuItem>Sign Out</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>

      <Flex mt={4} width="100%" alignItems="center">
        <Link to="./pages/Dashboard">
          <Text mr={4} color="black" textDecoration="none" as='b'>Dashboard</Text>
        </Link>
        <Flex alignItems="center">
          <Image src="/img/RightIcon.png" boxSize="24px" alt="Discussion Rooms" mr={2} />
          <Text mr={4} as='b'>Discussion Rooms</Text>
          <Image src="/img/RightIcon.png" boxSize="24px" alt="Another Image" />
        </Flex>
      </Flex>

      <Button alignSelf="flex-end" colorScheme="blue" width="190px" fontSize="13px">+ Discussion Rooms </Button>

      <Box mt={5} bg="gray.200" p="10px" onClick={handleNavigation}>
        <Flex align="center">
          <Image src="/img/fdot.png" boxSize="100px" />
          <Heading size="lg" fontSize="40px">
            Discussion Rooms
          </Heading>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
