import DefaultPokemonView from './views/DefaultPokemonView';
import { PokemonInfoState, Statuses } from '../hooks/useFetchPokemon';
import styled from 'styled-components';
import SuccessPokemonView from './views/SuccessPokemonView';
import ErrorPokemonView from './views/ErrorPokemonView';

const Container = styled.div`
    border: 1px solid black;
    height: 100%;
    min-height: 360px;
    margin: 5px 0 0 0;
`

type PokemonViewSelectorProps = {
    state: PokemonInfoState
}

/**
 * PokemonViewSelector component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {PokemonInfoState} props.state - The state of the Pokemon information.
 * @returns {JSX.Element} The PokemonViewSelector component.
 */
const PokemonViewSelector = ({ state }: PokemonViewSelectorProps): JSX.Element => {
    let statusComponent: JSX.Element | null = null;

    switch (state.status) {
        case Statuses.pending:
            statusComponent = <DefaultPokemonView message="Submit a pokemon" />;
            break;
        case Statuses.loading:
            statusComponent = <DefaultPokemonView message="loading..." />;
            break;
        case Statuses.error:
            statusComponent = <ErrorPokemonView error={state.error} />;
            break;
        case Statuses.success:
            statusComponent = <SuccessPokemonView pokemon={state.data} />;
            break;
    }
    return <Container>{statusComponent}</Container>
}

export default PokemonViewSelector