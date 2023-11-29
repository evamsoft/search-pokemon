import styled from 'styled-components'

const Container = styled.div`
    role: alert;
    min-height: 360px;
    text-align: center;
    border: 1px solid black;
    background-color: lightGray;
    padding: 15px 0 0 0;
`

type ErrorPokemonViewProps = {
    error: any
}

/**
 * ErrorPokemonView component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {any} props.error - The error object.
 * @returns {JSX.Element} The ErrorPokemonView component.
 */
const ErrorPokemonView = ({ error }: ErrorPokemonViewProps) => {
    return (
        <Container>
            There was an error: {' '}
            <pre style={{ whiteSpace: 'normal' }}>{error.message}. Try again.</pre>
        </Container>
    )
}

export default ErrorPokemonView