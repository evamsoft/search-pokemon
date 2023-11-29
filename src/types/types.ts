export type Pokemon = {
  abilities: string[];
  base_experience: number;
  forms: string[];
  game_indices: string[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  [key: string]: number | string | string[] | {};
};
