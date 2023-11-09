import React from 'react';
import { ChatIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const Profile: React.FC = (): JSX.Element => {
  return (
    <Tabs mt="40px" m="20px" colorScheme="purple">
      <TabList>
        <Tab _selected={{color: "white", bg: "purple.300"}}>Account Information</Tab>
        <Tab _selected={{color: "white", bg: "purple.300"}}>History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={ChatIcon} />
              email: mohamed@hesham1.com
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              email: mohamed@hesham2.com
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={ChatIcon} color="red" />
              email: mohamed@hesham1.com
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} color="purple" />
              email: mohamed@hesham2.com
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Profile;
