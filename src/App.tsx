import React, { useState } from 'react'
import { PokemonSearch } from './my-components/PokemonSearch'
import { PokemonInfo } from './my-components/PokemonInfo'

type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  types: string
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  const handleSearch = async (pokemonName: string) => {
    try {
      const response = await fetch(`http://localhost:5183/pokemon/${pokemonName}`)
      if (!response.ok) {
        console.log('Pokemon not found')
        throw new Error('Pokemon not found')
      }
      const data = await response.json()
      console.info('Pokemon data:', data)
      setPokemon(data)
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
      setPokemon(null)
    }
  }

  return (
    <div className="container flex flex-col items-center mx-auto mt-12 p-4 gap-6">
      <h1 className="text-2xl font-bold mb-4">Pokémon Viewer</h1>
      <PokemonSearch onSearch={handleSearch} />
      {pokemon && <PokemonInfo pokemon={pokemon} />}
    </div>
  )
}

export default App