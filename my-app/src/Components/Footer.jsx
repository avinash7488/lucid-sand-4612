import { Box, SimpleGrid ,VStack,Text, Container,Image,HStack, Heading} from '@chakra-ui/react';
import React from 'react';




function Footer(){
    return(
        <Box bg='gray.100' marginTop='50px' paddingTop='50px'>
        <Container maxWidth='6xl' borderBottom='1px solid black'>
        <SimpleGrid columns={6} spacingX='20' >
        <Box>
         <Image
             width='400px'
             height='100px'
              src="https://images.ctfassets.net/rvt0uslu5yqp/duhEd1tLbUSQlR9cV7tf4/4efd046b6c8a334c7b771215dcd5528d/Mentimeter_Logotype.png">
         </Image> 
        </Box>
        
        <VStack align='left' fontWeight='bold'>
               <Text fontSize='lg' borderBottom='1px solid black'>Features</Text>
               <Text>Overview</Text>
               <Text>Word Cloud</Text>
               <Text>Live Polling</Text>
               <Text>Quiz</Text>
               <Text>Q&A</Text>
               <Text>Survey</Text>
               <Text>Presentation</Text>
            </VStack>
        
        
            <VStack align='left' fontWeight='bold'>
               <Text fontSize='lg' borderBottom='1px solid black'>Resources</Text>
               <Text>Blog</Text>
               <Text>How to</Text>
               <Text>Solutions</Text>
               <Text>Academy</Text>
               <Text>Tamplates</Text>
               <Text>Webinars</Text>
               <Text>Comparison</Text>
               <Text>Integrations</Text>
               <Text>Stories</Text>
            </VStack>
       
        
        <VStack align='left' fontWeight='bold'>
               <Text fontSize='lg' borderBottom='1px solid black'>Details</Text>
               <Text>Legal</Text>
               <Text>Policies</Text>
               <Text>Accessibility</Text>
               <Text>Help Center</Text>
               <Text>Requirements</Text>
            </VStack>
        
        
        <VStack align='left' fontWeight='bold'>
               <Text fontSize='lg' borderBottom='1px solid black'>About us</Text>
               <Text>Press Info</Text>
               <Text>The Team</Text>
               <Text>Jobs</Text>
               <Text>Culture</Text>
               <Text>Benefits</Text>
               <Text>Contact us</Text>
               <Text>Climate</Text>
               <Text>Investors</Text>
            </VStack>
    
        <Box paddingTop='16rem' marginBottom='50px'>
        <VStack gap='1rem'><Text fontWeight='bold'>Social Media</Text></VStack>
         <HStack width='30px' height='30px' gap='1rem'>
            <Image src='https://img.freepik.com/free-icon/facebook-logo-with-rounded-corners_318-9850.jpg?w=740&t=st=1664396930~exp=1664397530~hmac=56dc2638e698ac970e42d05de0ae11e24c6c521f3a1e67bfd9e411f032156720'></Image>
            <Image src='https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-2.png'></Image>
            <Image src='https://cdn-icons-png.flaticon.com/512/733/733635.png'></Image>
            <Image src='https://cdn-icons-png.flaticon.com/512/87/87390.png'></Image>
         </HStack>
         </Box>
      </SimpleGrid>
      </Container>
      <HStack padding='2rem' gap='1rem' fontWeight='bold' marginLeft='150px'>
        <Text>Choose Your Language:</Text>
        <Text>English</Text>
        <Text>Portuguise(Brazil)</Text>
        <Text>Spanish</Text>
      </HStack>
      </Box>
    )
}

export default Footer;