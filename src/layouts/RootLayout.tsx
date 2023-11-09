import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar.tsx";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../component/sidebar.tsx";

const RootLayout: React.FC = () => {
  return (
    <Grid
      templateColumns={{
        base: "1fr 36fr",   // On mobile screens, use 1 column layout
        sm: "1fr 24fr", // On small screens (tablets), use 2 columns layout
        md: "1fr 12fr", // On medium screens, use the default layout
        lg: "1fr 6fr", // On large screens (PC), make the sidebar smaller (1.5fr)
      }}
      gap={4} // Adjust the gap between columns as needed
      bg="gray.50"
      h="100vh"
    >
      {/* Sidebar */}
      <GridItem
        as="aside"
        bg="gray.200"
        minHeight="60vh"
        p={{ base: "10px", lg: "15px" }}
      >
        <Sidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem as="main">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
