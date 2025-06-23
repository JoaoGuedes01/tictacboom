import React from 'react'
import { Heading, Button, VStack, Text, Grid, GridItem } from "@chakra-ui/react"

const Main = (props) => {
  const setPage = props.setPage
  return (
    <Grid
      minH="95vh"
      templateRows="auto 1fr auto"
      p={8}
      gap={4}
      style={{ width: '100%' }}
    >
      {/* Top Row */}
      <GridItem as="header" textAlign="center">
        <Heading size={"4xl"}>GuedesTacBoom</Heading>
      </GridItem>

      {/* Middle Row (this is the one that grows) */}
      <GridItem style={{ marginTop: '10rem' }} display="flex" alignItems="flex-start" justifyContent="center">
        <VStack style={{ width: '80%' }} gap={8}>
          <Button onClick={() => setPage('game')} colorPalette='green' variant='surface' style={{ width: '100%', maxWidth: "25rem" }}>Play GuedesTacBoom</Button>
          <Button onClick={() => setPage('settings')} colorPalette='orange' variant='surface' style={{ width: '100%', maxWidth: "25rem" }}>Settings</Button>
          <Button onClick={() => setPage('howto')} colorPalette='blue' variant='surface' style={{ width: '100%', maxWidth: "25rem" }}>How to Play</Button>
        </VStack>
      </GridItem>

      {/* Bottom Row */}
      <GridItem as="footer" textAlign="center">
        <Text fontSize="lg">Developed by João Guedes 2025</Text>
      </GridItem>
    </Grid>
  )
}

export default Main