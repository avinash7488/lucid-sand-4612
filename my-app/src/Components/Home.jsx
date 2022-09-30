import { Box, Button, Center, Container, Heading, SimpleGrid, Text, VStack,Image } from '@chakra-ui/react';
import React from 'react';
import Video from './Vdeo';


function Home(){
    return(
        <div>
       <Box marginTop='80px' alignItems='center' textAlign='center' marginBottom='100px'>
           <Heading  fontSize='6xl' fontWeight='medium'>
               Engage your audience &
               <br />
              eliminate awkward silences
           </Heading> 
           <Text fontSize='2xl' color='gray'>
              Our easy-to-build presentations, interactive Polls, Quizzes, and 
              <br />
              Word Clouds mean more participation and less stress
           </Text>
           <Button alignItems='center' bg='blue' color='white' padding='1rem' marginTop='30px' fontSize='2xl' width='8rem' height='4rem'>
             Signup
           </Button>
           <Text color='gray'>
              No credit card needed
           </Text>
       </Box>
       <Video/>

       <Box bg='gray.100'>
       <Container maxWidth='6xl' textAlign='center'>
        <Heading color='blue' fontSize='xxx-large' lineHeight='tall'>What Is Mentimeter?</Heading>
         <SimpleGrid columns={3} spacingX={20}>
            <Box>
               <VStack>
                  <Image width='350px' height='275px' src='https://www.mentimeter.com/_next/static/media/prepare.589e36de.svg' />
                  <Heading fontWeight='medium'>Prepare</Heading>
                  <Text>Build interactive presentations with the easy-to-use online editor. Add questions, polls, quizzes, slides, images, gifs and more to your presentation to create fun and engaging presentations.</Text>
               </VStack>
            </Box>

            <Box>
               <VStack>
                  <Image width='350px' height='275px' src='https://www.mentimeter.com/_next/static/media/engage.ba9959f7.svg' />
                  <Heading fontWeight='medium'>Engage</Heading>
                  <Text>Your audience uses their smartphones to connect to the presentation where they can answer questions. Visualize their responses in real-time to create a fun and interactive experience.</Text>
               </VStack>
            </Box>

            <Box>
               <VStack>
                  <Image width='350px' height='275px' src='https://www.mentimeter.com/_next/static/media/followup.14994f30.svg' />
                  <Heading fontWeight='medium'> Follow-up</Heading>
                  <Text>Once your Mentimeter presentation is over, share and export your results for further analysis and even compare data over time to measure the progress of your audience.'</Text>
               </VStack>
            </Box>
         </SimpleGrid>
          <Button bg='white' color='blue' border='2px solid blue' _hover={{bg:'blue',color:'white'}} margin='50px'>
              Explore featurers
          </Button>
         </Container>
       </Box>

       <Box margin='60px'>
           <Container maxWidth='6xl' textAlign='center'>
               <Heading marginBottom='50px'>Millions of voices have
                <br /> already been heard</Heading>
            <SimpleGrid columns={3} spacing={5}>
               <VStack>
                  <Heading width='250px' borderBottom='2px solid black'>280 M</Heading>
                  <Text fontSize='2xl' fontWeight='semibold'>Voters</Text>
               </VStack>

               <VStack>
                  <Heading width='250px' borderBottom='2px solid black'>14 M</Heading>
                  <Text fontSize='2xl' fontWeight='semibold'>Presenters</Text>
               </VStack>

               <VStack>
                  <Heading width='250px' borderBottom='2px solid black'>220+</Heading>
                  <Text fontSize='2xl' fontWeight='semibold'>Countries & territories</Text>
               </VStack>
            </SimpleGrid>
           </Container>
       </Box>

       <Box>
          <Container maxWidth='6xl' textAlign='center'>
            <SimpleGrid columns={2} spacing={30}>
                <Image height='350px' width='400px' src='https://www.mentimeter.com/_next/static/media/teresa-homepage.c9b9b37e.png' />
                <Box>
                 <Text fontSize='xx-large' fontWeight='semibold'>
                 "Mentimeter allows everyone to ask questions, to get clarification or a clearer understanding on subjects resulting in a more fulfilling learning experience."
                 </Text>
                 <Text color='blue' fontSize='xl' fontWeight='semibold'>Teresa Delfín, California State Polytechnic University</Text>
                 </Box>
            </SimpleGrid>
          </Container>
       </Box>
      
    </div>



    )
}

export default Home;