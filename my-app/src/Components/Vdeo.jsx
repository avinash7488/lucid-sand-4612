import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';



function Video(){
    return(
        
        <Box align='center' marginBottom='50px'>
        <AspectRatio maxW='container.lg' ratio={14 / 8} >
        <iframe src="https://www.youtube.com/embed/76LxkWflyCI" frameborder="0" overflow='hidden'  blur='2xl'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" >
        </iframe>
        </AspectRatio>
        </Box>
    )
}

export default Video;