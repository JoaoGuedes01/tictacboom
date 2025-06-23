import React, { useState, useEffect } from 'react';
import { Center, VStack, Heading, HStack, Box, Text, Button } from "@chakra-ui/react";

// Import sound files
import tickSoundSource from '../assets/ticking.mp3';
import explodeSoundSource from '../assets/explosion.mp3';

import GuedesTickSoundSource from '../assets/ticking_guedes.mp3';
import GuedesExplodeSoundSource from '../assets/explosion_guedes.mp3';

const Game = (props) => {
  const setPage = props.setPage;
  const config = props.config;
  console.log(config)

  // State for game elements
  const [currentDiceRoll, setCurrentDiceRoll] = useState('-');
  const [currentCardDraw, setCurrentCardDraw] = useState('-');
  const [bombTimer, setBombTimer] = useState(null); // null means not active, a number will be the countdown
  const [bombActive, setBombActive] = useState(false); // To control bomb interval
  const [flashScreen, setFlashScreen] = useState(false); // New state for screen flash

  // Create audio objects
  const tickSound = config.settings.guedesSounds === true ? GuedesTickSoundSource : tickSoundSource
  const explodeSound = config.settings.guedesSounds === true ? GuedesExplodeSoundSource : explodeSoundSource

  const tickAudio = new Audio(tickSound);
  const explodeAudio = new Audio(explodeSound);

  // Event handler for rolling the dice
  const handleRollDice = () => {
    const randomIndex = Math.floor(Math.random() * config.dice.length);
    setCurrentDiceRoll(config.dice[randomIndex]);
  };

  // Event handler for drawing a card
  const handleDrawCard = () => {
    const randomIndex = Math.floor(Math.random() * config.cards.length);
    setCurrentCardDraw(config.cards[randomIndex]);
  };

  // Event handler for starting the bomb timer
  const handleStartBomb = () => {
    if (!bombActive) {
      const bombSettings = config.settings.bomb
      const initialTime = getRandomInt(bombSettings.startRange, bombSettings.endRange)
      setBombTimer(initialTime);
      setBombActive(true);
    }
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Effect hook to manage the bomb timer countdown, sound, and screen flash
  useEffect(() => {
    let timerInterval;
    if (bombActive && bombTimer > 0) {
      timerInterval = setInterval(() => {
        setBombTimer((prevTime) => prevTime - 1);
        tickAudio.play(); // Play tick sound
        setFlashScreen(true); // Start flash
        setTimeout(() => setFlashScreen(false), 100); // Stop flash after a short duration
      }, 1000);
    } else if (bombTimer === 0 && bombActive) { // Ensure bombActive is true to only explode once
      setBombActive(false);
      clearInterval(timerInterval);
      setBombTimer('The Bomb Exploded!');
      explodeAudio.play(); // Play explode sound
      // You could add a more dramatic visual here if desired, like a persistent red overlay
    }

    return () => clearInterval(timerInterval); // Cleanup on component unmount or bomb deactivation
  }, [bombActive, bombTimer]); // Removed 'toast' from dependency array

  // Event handler for resetting the game
  const handleResetGame = () => {
    setCurrentDiceRoll('-');
    setCurrentCardDraw('-');
    setBombTimer(null);
    setBombActive(false);
    setFlashScreen(false); // Reset flash state
  };

  return (
    <Center
      style={{
        width: '100%',
        maxWidth: "80rem",
        border: "solid, 0.14rem, #444852",
        backgroundColor: "#31343C",
        borderRadius: "0.6rem",
        padding: '1rem',
        transition: 'background-color 0.1s ease-in-out', // Smooth transition for background
        backgroundColor: flashScreen ? '#B84E50' : '#31343C', // Conditional background for flash
      }}
    >
      <VStack gap={5} alignItems="center" width="100%" >
        <Heading>Game Screen</Heading>
        <HStack maxWidth="50rem" width='100%' alignItems="center" justifyContent="center">
          <Box width="100%" bg="bg" borderRadius="md" padding="1rem" backgroundColor="#DBEAFE">
            <VStack>
              <Text color="#1e40af" fontWeight="medium" fontSize="1.5rem">Dice Roll</Text>
              <Text color="#1e40af" fontWeight="black" fontSize="2.5rem">{currentDiceRoll}</Text>
            </VStack>
          </Box>

          <Box width="100%" bg="bg" borderRadius="md" padding="1rem" backgroundColor="#dcfce7">
            <VStack>
              <Text color="#166534" fontWeight="medium" fontSize="1.5rem">Card Draw</Text>
              <Text color="#166534" fontWeight="black" fontSize="2.5rem">{currentCardDraw.toUpperCase()}</Text>
            </VStack>
          </Box>
        </HStack>

        <Box maxWidth="50rem" width="100%" bg="bg" borderRadius="md" padding="1rem" backgroundColor="#1f2937">
          <VStack>
            <Text color="#ffffff" fontWeight="medium" fontSize="1.5rem">Bomb Timer</Text>
            <Text color="#e04243" fontWeight="black" fontSize="2.5rem">
              {bombTimer !== null ? bombTimer : '0'}
            </Text>
          </VStack>
        </Box>

        <HStack maxWidth="50rem" width='100%' alignItems="center" justifyContent="center">
          <Button onClick={handleRollDice} variant='solid' colorPalette='blue' flex={1}>Roll Dice</Button>
          <Button onClick={handleDrawCard} variant='solid' colorPalette='green' flex={1}>Draw Card</Button>
          <Button onClick={handleStartBomb} variant='solid' colorPalette='red' flex={1} isDisabled={bombActive}>
            {bombActive ? `Bomb Active (${bombTimer})` : 'Start Bomb'}
          </Button>
        </HStack>

        <HStack maxWidth="50rem" width='100%' alignItems="center" justifyContent="center">
          <Button onClick={handleResetGame} variant='surface' colorPalette='gray' flex={1}>Reset Game</Button>
          <Button onClick={() => setPage('home')} variant='surface' colorPalette='red' flex={1}>Back to Menu</Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Game;