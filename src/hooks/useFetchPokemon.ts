import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/types";

type UseFetchProps = {
  pokemonName: string;
};

export enum Statuses {
  pending,
  loading,
  error,
  success,
}

export type PendingState = {
  status: Statuses.pending;
};

export type LoadingState = {
  status: Statuses.loading;
};

export type SuccessState<T> = {
  status: Statuses.success;
  data: T;
};

export type ErrorState = {
  status: Statuses.error;
  error: any;
};
export type PokemonInfoState =
  | PendingState
  | LoadingState
  | SuccessState<Pokemon>
  | ErrorState;

/**
 * Custom hook for fetching Pokemon information.
 *
 * @param {Object} props - The hook props.
 * @param {string} props.pokemonName - The name of the Pokemon to fetch.
 * @returns {Object} The hook return object.
 * @returns {Object} return.state - The current state of the fetch operation.
 * @returns {string} return.state.status - The status of the fetch operation ("pending", "loading", "success", "error").
 * @returns {Object} [return.state.data] - The fetched Pokemon data (available when status is "success").
 * @returns {Object} [return.state.error] - The error object (available when status is "error").
 */
const useFetchPokemon = ({ pokemonName }: UseFetchProps) => {
  /**
   * Default pending state.
   *
   * @returns {Object} The default pending state.
   * @returns {string} return.status - The status of the fetch operation ("pending").
   */
  const defaultState = (): PendingState => ({ status: Statuses.pending });

  /**
   * State and setState hooks for managing the fetch operation.
   */
  const [state, setState] = useState<PokemonInfoState>(defaultState);

  useEffect(() => {
    /**
     * Fetches the Pokemon data from the API.
     *
     * @param {string} [url] - The URL to fetch the Pokemon data from.
     */
    const fetchPokemon = async (
      url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    ) => {
      try {
        setState({ status: Statuses.loading });
        const response = await axios.get(url);
        setState({ status: Statuses.success, data: response.data });
      } catch (error) {
        setState({ status: Statuses.error, error });
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return { state };
};

export default useFetchPokemon;
