import { useState } from 'react'
import styled from 'styled-components'
import PokemonSearchBox from './PokemonSearchBox'
import useFetchPokemon from '../hooks/useFetchPokemon'
import PokemonViewSelector from './PokemonViewSelector'

const Container = styled.div`
    width: fit-content;
    overflow: hidden;
    margin: 50px auto;
    border: 1px solid black;
    padding: 5px;
`
/** 
 * PokemonSearcher component.
 *
 * @component
 * @returns {JSX.Element} The PokemonSearcher component.
 */
const PokemonSearcher = () => {
    const [pokemonName, setPokemonName] = useState<string>(() => 'mew')
    const { state } = useFetchPokemon({ pokemonName })

    return (
        <Container>
            <PokemonSearchBox pokemonName={pokemonName} setPokemonName={setPokemonName} />
            <PokemonViewSelector state={state} />
        </Container>)
}

export default PokemonSearcher