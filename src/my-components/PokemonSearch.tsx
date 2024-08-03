import React, { FormEvent, useState } from 'react'
import { Input } from "../shad-components/ui/input"
import { Button } from "../shad-components/ui/button"

interface PokemonSearchProps {
  onSearch: (pokemonName: string) => void
}

export const PokemonSearch: React.FC<PokemonSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={event => handleSearch(event)} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type='submit'>Search</Button>
    </form>
  )
}