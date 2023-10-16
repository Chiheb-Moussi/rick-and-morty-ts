import { Character } from "./Character";

export type Episode = {
    id: number;
    name: string;
    air_date: string;
    characters: Character[];
    url: string;
    created: string;
}