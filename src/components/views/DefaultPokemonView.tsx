import { Container, ImagePanel, Image, AttackList, AttackListItem, Score, Header } from './SuccessPokemonView'

/**
 * DefaultPokemonView component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to display.
 * @param {string} [props.spriteUrl='./assets/images/unknown-pokemon.jfif'] - The URL of the sprite image.
 * @returns {JSX.Element} The DefaultPokemonView component.
 */
const DefaultPokemonView = ({ message, spriteUrl = './assets/images/unknown-pokemon.jfif' }: { message: string, spriteUrl?: string }): JSX.Element => {
    return (
        <Container>
            <Header><strong>{message}</strong></Header>
            <ImagePanel>
                <Image src={spriteUrl} alt="placeholder pokemon" />
            </ImagePanel>
            <Score>blah<sup>XXX</sup></Score>
            <AttackList>
                <AttackListItem>Loading Attack 1: XX(Type)</AttackListItem>
                <AttackListItem>Loading Attack 2: XX(Type)</AttackListItem>
            </AttackList>
        </Container>
    )
}

export default DefaultPokemonView