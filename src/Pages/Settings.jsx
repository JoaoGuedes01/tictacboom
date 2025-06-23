import React from 'react'

import { Button, Heading, Switch, VStack, NumberInput, HStack, Box, Text, Input, Wrap, Icon } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

const Settings = ({ config, setPage, setGameConfig }) => {
    console.log(config)

    const handleSoundChange = (value) => {
        setGameConfig(prevConfig => ({
            ...prevConfig,
            settings: {
                ...prevConfig.settings,
                guedesSounds: value
            }
        }))
    }

    const handleBombRangeChange = (attribute, value) => {
        setGameConfig(prevConfig => ({
            ...prevConfig,
            settings: {
                ...prevConfig.settings,
                bomb: {
                    ...prevConfig.settings.bomb,
                    [attribute]: value
                }
            }
        }))
    }

    const handleDeleteFromCards = (i) => {
        setGameConfig(prevConfig => ({
            ...prevConfig,
            cards: [
                ...prevConfig.cards.slice(0, i), // Elements before the index
                ...prevConfig.cards.slice(i + 1) // Elements after the index
            ]
        }))
    }

    const addNewCard = (newCard) => {
        setGameConfig(prevConfig => ({
            ...prevConfig,
            cards: [...prevConfig.cards, newCard] // Create a new array with the new card appended
        }));
    };

    const updateCard = (index, updatedCard) => {
        setGameConfig(prevConfig => ({
            ...prevConfig,
            cards: prevConfig.cards.map((card, i) =>
                i === index ? updatedCard : card
            )
        }));
    };

    return (
        <div>
            <Heading>Settings</Heading>
            <VStack marginTop="2rem" align='left' gap='1rem'>
                <Switch.Root variant='solid' colorPalette='black' checked={config.settings.guedesSounds} onCheckedChange={(e) => handleSoundChange(e.checked)}>
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Guedes Sounds</Switch.Label>
                </Switch.Root>

                <HStack>
                    <NumberInput.Root value={config.settings.bomb.startRange} onValueChange={(e) => handleBombRangeChange("startRange", e.value)}>
                        <NumberInput.Label>Start Range for Bomb</NumberInput.Label>
                        <NumberInput.Input />
                    </NumberInput.Root>
                    <NumberInput.Root value={config.settings.bomb.endRange} onValueChange={(e) => handleBombRangeChange("endRange", e.value)}>
                        <NumberInput.Label>End Range for Bomb</NumberInput.Label>
                        <NumberInput.Input />
                    </NumberInput.Root>
                </HStack>

                <HStack>
                    <Wrap alignItems='center'>
                        {
                            config.cards.map((card, i) => (
                                <Box key={i} p='2' borderColor="border.disabled"
                                    color="fg.disabled" borderWidth="1px">
                                    <HStack>
                                        <Input onChange={(e) => updateCard(i, e.target.value)} value={card} width="100%" maxWidth="5rem" />
                                        <Icon onClick={() => handleDeleteFromCards(i)} style={{ cursor: "pointer" }} size="md" color="red">
                                            <FaTrash />
                                        </Icon>
                                    </HStack>
                                </Box>
                            ))
                        }
                        <Icon onClick={() => addNewCard('new')} style={{ cursor: "pointer" }} size="xl" color="green">
                            <FaPlusSquare />
                        </Icon>
                    </Wrap>
                </HStack>

                <Button onClick={() => setPage('home')} variant='surface' colorPalette='red'>Back to Menu</Button>
            </VStack>
        </div >
    )
}

export default Settings