import renderCharacters from "../builders/renderCharacters";
import { Character } from "../models/Character";

export type Info = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}
type DataResponse = {
    info: Info;
    results: Character[];
}

const fetchCharacters = async(name: string="", page: string=""): Promise<void> => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`;
    const response = await fetch(url);
    const data: DataResponse = await response.json();
    renderCharacters(data.results);
    renderPagination(data.info, name, page);

}

export default fetchCharacters;