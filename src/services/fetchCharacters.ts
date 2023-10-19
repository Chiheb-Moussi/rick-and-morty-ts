import renderCharacters from "../builders/renderCharacters";
import renderPAgination from "../builders/renderPagination";
import { Character } from "../models/Character";

export type Info = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}
type DataResponse = {
    info?: Info;
    results?: Character[];
    error?: string;
}

const fetchCharacters = async(name: string="", page: string=""): Promise<void> => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`;
    const response = await fetch(url);
    const data: DataResponse = await response.json();
    if(data.info && data.results) {
        renderCharacters(data.results);
        renderPAgination(data.info, name, page);
    } else {
        const charactersWrapper = document.querySelector('#charactersWrapper');
        charactersWrapper!.innerHTML = /*html*/ `<h3 class="uppercase text-red-500 text-lg font-semibold">${data.error}</h3>`
    }

}

export default fetchCharacters;