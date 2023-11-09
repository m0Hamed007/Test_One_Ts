import React, { useState, useEffect } from 'react';
import { Box, VStack, Button, Flex, Image, Icon } from '@chakra-ui/react';
import {  BiSolidGridAlt,  BiObjectsHorizontalLeft,  BiMenu, } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { CgDatabase } from "react-icons/cg";
import { VscFile } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import { BsCalendar3 } from "react-icons/bs";
import { PiClipboardTextBold } from "react-icons/pi";
const items = [
  { icon: BiSolidGridAlt, label: "Dashboard", nav: "/dashboard" },
  { icon: VscFile, label: "Announcements", nav: "/pages/Announcements" },
  { icon: HiOutlineBriefcase, label: "Grades", url: "/grades" },
  { icon: PiClipboardTextBold, label: "Schedule", url: "/schedule" },
  { icon: BsCalendar3, label: "Calendar", url: "/calendar" },
  { icon: VscBook, label: "Digital Library", url: "/library" },
  { icon: CgDatabase, label: "VCR", url: "/vcr" },
  { icon: TfiWrite, label: "Exams", url: "/exams" },
  { icon: BiObjectsHorizontalLeft, label: "Analytics", url: "/analytics" },
];
const Sidebar = (): React.JSX.Element =>{
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false); // Add a state for collapse/expand
  const [showButton, setShowButton] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowButton((prevState) => !prevState);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setShowButton(false);
    toggleSidebar();
  };

  return (
    <Box p={4} w={isCollapsed ? "200px" : "290px"} color="fbfbfb" ml={isCollapsed ? "0px" : "-6px"}>
      <Flex align="center" mb={6}
        marginRight={1000} // if you want to show logo delete marginright .
>
        <Image
          src="/img/logo.png"
          alt="Logo"
          mb={2}
          boxSize={isCollapsed ? "60px" : "60px"}
          w={isCollapsed ? "60px" : "200px"}
        />
        <Button onClick={toggleSidebar} variant="ghost">
          <Icon as={BiMenu} boxSize={6} />
        </Button>
      </Flex>

      <VStack align="start" spacing={4}>
        {items.map((item) => (
          <Button
            as="div" // To override the default button behavior
            leftIcon={<Icon as={item.icon} boxSize={7} />}
            variant="ghost"
            justifyContent="start"
            fontWeight="bold"
            colorScheme='red'
            borderTop="none"
            borderRight="none"
            borderBottom="none"
            w="100%"
            margin="5px"
            borderLeft={activeItem === item.label ? "10px solid blue" : "5px solid transparent"}
            color={activeItem === item.label ? "blue.500" : "gray.500"}
            onClick={() => setActiveItem(item.label)}
          >
            {isCollapsed ? "" : item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
