import styled from 'styled-components'
import { Pokemon } from '../../types/types'

export const Container = styled.div`
    text-align: center;
    border: 0px solid black;
    //background-color: lightGray;
    padding: 10px 0 10px 0;
    height: 100%px;
`

export const Header = styled.div`
    font-size: 20px;
    font-weight: bold; 
`

export const ImagePanel = styled.div`
    margin: 10px auto;
    height: 220px;
    width: 220px; 
    border: 1px solid green;
`
export const Image = styled.img`
    height: 220px; 
    width: 220px;
`

export const Score = styled.span`
    fontSize: 20px; 
    fontWeight: bold; 
`

export const AttackList = styled.ul`
    font-size: 12px; 
    font-weight: bold; 
    width: 200px;
`
export const AttackListItem = styled.li`
`

type PokemonCardProps = {
    pokemon: Pokemon
}

/**
 * PokemonCard component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Pokemon} props.pokemon - The Pokemon object to display.
 * @returns {JSX.Element} The PokemonCard component.
 */
const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
    const { name } = pokemon;
    const spriteUrl = pokemon.sprites.other["official-artwork"]['front_default']

    return (
        <Container>
            <Header><strong>{name.toUpperCase()}</strong></Header>
            <ImagePanel>
                <Image src={spriteUrl} alt={`${name} Pokemon`} />
            </ImagePanel>
            <Score>blah<sup>XXX</sup></Score>
            <AttackList>
                <AttackListItem>Loading Attack 1: XX(Type)</AttackListItem>
                <AttackListItem>Loading Attack 2: XX(Type)</AttackListItem>
            </AttackList>
        </Container >
    )
}

export default PokemonCard