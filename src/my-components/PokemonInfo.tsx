import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../shad-components/ui/card"

interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  types: string
}

interface PokemonInfoProps {
  pokemon: Pokemon | null
}

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  if (!pokemon) return null

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>ID: {pokemon.id}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types}</p>
      </CardContent>
    </Card>
  )
}