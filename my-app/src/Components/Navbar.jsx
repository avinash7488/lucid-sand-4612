import React from "react";
import { Flex,Text,Center,Box,Image,HStack, Button } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"


 

function Navbar(){
    return(
<Flex color='white' height='80px' shadow='base'>
<Box  flex='1'>
  <Center><Image
  boxSize='230px'
  height='80px'
   src="https://images.ctfassets.net/rvt0uslu5yqp/18DtpQEcpcNMOWcJaoTAxQ/25d7c32ba96d21dee48d1fc3b097dad7/Mentimeter_Branding_Logo_2020_RGB-10-v2.jpg"></Image></Center>
  </Box>
  <Box flex='2' color='black'>
  <Center padding='2rem'>
    <HStack gap='2rem' fontWeight='bold'>
  <Menu >
  <MenuButton fontWeight='bold'>
    Features <ChevronDownIcon />
  </MenuButton>
  <MenuList >
    <MenuItem>Overview</MenuItem>
    <MenuItem>Live Polling</MenuItem>
    <MenuItem>Word Cloud</MenuItem>
    <MenuItem>Quiz</MenuItem>
    <MenuItem>Q&A</MenuItem>
    <MenuItem>Survey</MenuItem>
    <MenuItem>Presentation</MenuItem>
  </MenuList>
</Menu>

<Menu >
  <MenuButton fontWeight='bold'>
    Solutions <ChevronDownIcon />
  </MenuButton>
  <MenuList >
    <MenuItem>Overview</MenuItem>
    <MenuItem>Speakers</MenuItem>
    <MenuItem>Business</MenuItem>
    <MenuItem>Educations</MenuItem>
    <MenuItem>Private events</MenuItem>
  </MenuList>
</Menu>

<Menu autoSelect={true} >
  <MenuButton fontWeight='bold'>
    Resources <ChevronDownIcon />
  </MenuButton>
  <MenuList >
    <MenuItem>How to</MenuItem>
    <MenuItem>MentiAcadmy</MenuItem>
    <MenuItem>Tamplates</MenuItem>
    <MenuItem>Webinars</MenuItem>
    <MenuItem>Blog</MenuItem>
    <MenuItem>Integrations</MenuItem>
    <MenuItem>Help Center</MenuItem>
  </MenuList>
</Menu>
<Text>Pricing</Text>
<Text>Enterprise</Text>
  </HStack>
  </Center>
  </Box>
  <Box flex='1'>
    <Center padding='1rem'>
    <HStack gap='1rem' fontWeight='bold'>
    <Text color='black'>Login</Text>
    <Button bg='blue' color='white'>Signup</Button>
  </HStack>
  </Center>
  </Box>
</Flex>
    )
}

export default Navbar;
