import React from 'react'
import { Button } from "@chakra-ui/react";

import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react';
import { FaDiceD6, FaHourglassHalf, FaBomb } from 'react-icons/fa'; // Example icons, you can choose others


const HowToPlay = ({ setPage }) => {
  return (
    <div>
      <Flex
        minH="100vh"
        bgGradient="linear(to-br, purple.700, indigo.900)"
        align="center"
        justify="center"
        p={{ base: 4, sm: 6, md: 8 }}
      >
        <Box
          bg="white"
          p={{ base: 6, sm: 8, md: 10 }}
          borderRadius="2xl"
          boxShadow="2xl"
          maxW="2xl"
          w="full"
          border="4px"
          borderColor="indigo.300"
          transition="all 0.3s ease-in-out"
          _hover={{ transform: 'scale(1.01)' }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            fontWeight="extrabold"
            textAlign="center"
            color="purple.800"
            mb={{ base: 6, sm: 8 }}
            lineHeight="tight"
          >
            How to Play <Text as="span" color="indigo.600">TicTacGuedes!</Text>
          </Heading>

          <Box spacing={{ base: 5, sm: 6 }} fontSize={{ base: 'lg', sm: 'xl' }} color="gray.800" fontWeight="medium">
            {/* Rule 1: Initial Actions */}
            <Flex align="flex-start" mb={5}>
              <Icon as={FaDiceD6} color="indigo.600" mr={3} boxSize="1.75em" />
              <Text flex="1">
                To start, <Text as="strong" color="purple.700">roll the dice</Text> and <Text as="strong" color="purple.700">draw a card</Text>. This card will show a letter or a combination of letters!
              </Text>
            </Flex>

            {/* Rule 2: Dice Roll 'Tic' */}
            <Flex align="flex-start" mb={5}>
              <Icon as={FaHourglassHalf} color="indigo.600" mr={3} boxSize="1.75em" /> {/* Using a different icon here */}
              <Text flex="1">
                If the dice lands on <Text as="strong" color="green.600">"TIC"</Text>: You must say a word where the letter(s) from your card appear at the <Text as="strong" color="green.600">BEGINNING</Text> of the word.
              </Text>
            </Flex>

            {/* Rule 3: Dice Roll 'Tac' */}
            <Flex align="flex-start" mb={5}>
              <Icon as={FaHourglassHalf} color="indigo.600" mr={3} boxSize="1.75em" /> {/* Using a different icon here */}
              <Text flex="1">
                If the dice lands on <Text as="strong" color="blue.600">"TAC"</Text>: You must say a word where the letter(s) from your card appear at the <Text as="strong" color="blue.600">END</Text> of the word.
              </Text>
            </Flex>

            {/* Rule 4: Dice Roll 'Guedes' */}
            <Flex align="flex-start" mb={5}>
              <Icon as={FaBomb} color="indigo.600" mr={3} boxSize="1.75em" />
              <Text flex="1">
                If the dice lands on <Text as="strong" color="red.600">"GUEDES"</Text>: You must say a word where the letter(s) from your card can be found <Text as="strong" color="red.600">ANYWHERE</Text> in the word.
              </Text>
            </Flex>

            {/* Rule 5: Bomb and Passing */}
            <Flex align="flex-start" mb={5}>
              <Icon as={FaBomb} color="indigo.600" mr={3} boxSize="1.75em" />
              <Text flex="1">
                After a word is said, a <Text as="strong" color="red.700">bomb starts ticking</Text> (between 40 and 180 seconds)! Pass the phone quickly and keep saying words until the bomb explodes!
              </Text>
            </Flex>
          </Box>

          <Text textAlign="center" color="gray.600" mt={8} fontSize={{ base: 'base', sm: 'lg' }} fontWeight="light" fontStyle="italic">
            Keep it quick, keep it fun, and don't let the guedes get you!
          </Text>
          <Button marginTop='1rem' width="100%" onClick={() => setPage('home')} variant='surface' colorPalette='red'>Back to Menu</Button>
        </Box>
      </Flex>
    </div>
  )
}

export default HowToPlay