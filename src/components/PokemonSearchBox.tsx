import { MouseEventHandler, memo, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0px auto;
    border: 1px solid black;
    padding: 5px;
    text-align:center;
`
const Header = styled.div`
    margin: 0;  
    padding: 0;
    font-weight: bold;
    font-size: 20px 
`
const HeaderSubText = styled.span`
    font-size: 13px;
    display: block;
`

const Link = styled.button`
    margin: 0;
    padding: 0 0 0 5px;
    text-decoration: underline;
    border: 0px solid black;
    background-color: transparent; 

    &:hover {
        cursor: pointer;
    }
`
const SearchTextBox = styled.input`
    line-height: 2;
    width: 220px;
    background-color: light-blue 
`

const SearchButton = styled.input`
    height: 32px; 
    margin: 5px 0px 0px 5px; 
    background-color: maroon; 
    color: white;
`

type PokemonSearchBoxProps = {
    pokemonName: string,
    setPokemonName: (name: string) => void,
}

/**
 * PokemonSearchBox component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.pokemonName - The current Pokemon name.
 * @param {Function} props.setPokemonName - The function to set the Pokemon name.
 * @returns {JSX.Element} The PokemonSearchBox component.
 */
const PokemonSearchBox = ({ pokemonName, setPokemonName }: PokemonSearchBoxProps): JSX.Element => {
    const searchTextInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (searchTextInputRef.current) {
            searchTextInputRef.current.value = pokemonName;
        }
    }, [pokemonName])

    const handleLinkClick = (linkName: string): void => {
        setPokemonName(linkName);
    }

    const handleSearchButtonClick = () => {
        setPokemonName(searchTextInputRef?.current?.value ?? '');
    }

    return (
        <Container>
            <Header>Search Pokemon</Header>
            <HeaderSubText>Try
                <Link onClick={() => handleLinkClick("pikachu")}>pikachu,</Link>
                <Link onClick={() => handleLinkClick("charizard")}>charizard,</Link>
                <Link onClick={() => handleLinkClick("mew")}>mew</Link>
            </HeaderSubText>
            <SearchTextBox type="text" ref={searchTextInputRef} />
            <SearchButton type="button" value="Search" onClick={handleSearchButtonClick} />
        </Container>)
}

export default memo(PokemonSearchBox)