import React, { useState } from 'react'
import { PokemonSearch } from './my-components/PokemonSearch'
import { PokemonInfo } from './my-components/PokemonInfo'

interface Pokemon {
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pokémon Viewer</h1>
      <PokemonSearch onSearch={handleSearch} />
      {pokemon && <PokemonInfo pokemon={pokemon} />}
    </div>
  )
}

export default App