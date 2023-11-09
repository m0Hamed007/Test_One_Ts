import React, { useState, useEffect, FC } from 'react';
import {
  Card, CardBody, IconButton, SimpleGrid, Text,
  Heading, CardHeader, Flex, Box, Divider, Avatar, AvatarGroup
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LockIcon } from "@chakra-ui/icons";

interface AvatarData {
  src: string;
  name: string;
}

const avatarsDataFirstGroup: AvatarData[] = [
  { src: "/img/P_img/001.jpg", name: "a1" },
  { src: "/img/P_img/002.jpg", name: "a2" },
  { src: "/img/P_img/003.jpg", name: "a3" },
  { src: "/img/P_img/001.jpg", name: "a4" },
  { src: "/img/P_img/002.jpg", name: "a5" },
  { src: "/img/P_img/003.jpg", name: "a6" },
  { src: "/img/P_img/001.jpg", name: "a7" },
  { src: "/img/P_img/002.jpg", name: "a8" },
  { src: "/img/P_img/003.jpg", name: "a9" },
  { src: "/img/P_img/001.jpg", name: "a10" },
  { src: "/img/P_img/002.jpg", name: "a2" },
  { src: "/img/P_img/003.jpg", name: "a3" },
];
const avatarsDataSecondGroup: AvatarData[] = [
  { src: "/img/P_img/007.jpg", name: "b1" },
  { src: "/img/P_img/003.jpg", name: "b2" },
  { src: "/img/P_img/003.jpg", name: "b3" },
  { src: "/img/P_img/001.jpg", name: "b4" },
  { src: "/img/P_img/007.jpg", name: "b5" },
  { src: "/img/P_img/003.jpg", name: "b6" },
  { src: "/img/P_img/003.jpg", name: "b7" },
  { src: "/img/P_img/001.jpg", name: "b8" },
];

const FirstAvatarGroup: FC = () => (
  <Flex align="center" justifyContent="space-between" width="100%">
    <AvatarGroup size="md" spacing={-5} borderColor="blue.500" max={3}>
      {avatarsDataFirstGroup.map((avatar, idx) => (
        <Avatar key={idx} src={avatar.src} name={avatar.name} />
      ))}
    </AvatarGroup>
    <Box ml={4}>
      <Avatar src="/img/se.png" size="xs" />
      <Text ml={1} color="gray.700" as="samp" align="center">36</Text>
    </Box>
  </Flex>
);

const SecondAvatarGroup: FC = () => (
  <Flex align="center" justifyContent="space-between" width="100%">
    <AvatarGroup size="md" spacing={-8} borderColor="blue.500" max={5} flexDirection="row">
      {avatarsDataSecondGroup.map((avatar, idx) => (
        <Avatar key={idx} src={avatar.src} name={avatar.name} />
      ))}
    </AvatarGroup>
    <Box ml={4}>
      <Avatar src="/img/se.png" size="xs" />
      <Text ml={1} color="gray.700" as="samp" align="center">36</Text>
    </Box>
  </Flex>
);
interface Task {
  id: number;
  img: string;
  title: string;
  author: string;
  description: string;
  date: string;
  lastpost: string;}
const Dashboard: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await tasksloader();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const getPublishedData = (index: number): string => {
    switch (index) {
      case 0:
        return "all classes";
      case 1:
        return "2 classes";
      case 2:
        return "students";
      case 3:
        return "3 classes";
      case 4:
        return "7 classes";
      case 5:
        return "student";
        default: return "";
      }
    };
    return (
      <SimpleGrid spacing={5} minChildWidth="500px" width="90.2%" paddingLeft="20px">
        {tasks.map((task, index) => (
          <Card key={task.id}>
            <CardHeader>
              <Flex align="center" justifyContent="space-between">
                <Flex align="center" gap={5}>
                  <Box w="50px" h="50px">
                    <Avatar src={task.img} />
                  </Box>
                  <Box>
                    <Flex align="center" gap={2}>
                      <Heading as='h5' size='sm' color = {{base:"blue.900",lg:"gray" }}>{task.title}</Heading>
                    </Flex>
                    <Text as='sub' color = {{base:"red.900",lg:"gray" }}>{task.author}</Text>
                  </Box>
                </Flex>
                <Box>
                  <LockIcon color="lightseagreen" />
                  <IconButton
                    aria-label="More server options"
                    icon={<BsThreeDotsVertical />}
                    variant="ghost"
                    colorScheme="gray"
                    color="gray"
                  />
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Box>
                <Text color = {{ sm:"black.900" , md:"gray.600" }}>{task.description}</Text>
                <Divider borderColor={"gray.200"} p="14px" />
                <Flex align="center" justifyContent="space-between">
                  <Box>
                    <Text as="sub" color="gray">Creation Data:</Text>
                    <Text color="gray.700">{task.date}</Text>
                  </Box>
                  <Box>
                    <Text as='sub' color="gray.500">Published to:</Text>
                    <Text color="gray.700">{getPublishedData(index)}</Text>
                  </Box>
                  <Box>
                    <Text as="sub" color="gray.500">Last post data:</Text>
                    <Text color="gray.700">{task.lastpost}</Text>
                  </Box>
                </Flex>
                <Divider borderColor={"gray.200"} p="14px" />
                <Box p="14px">
                  {index === 3 ? <SecondAvatarGroup /> : <FirstAvatarGroup />}
                </Box>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    );
  }
  
  export const tasksloader = async (): Promise<Task[]> => {
    const res = await fetch("http://localhost:3000/tasks");
    const data: Task[] = await res.json();
    return data;
  };
  
  export default Dashboard;
  