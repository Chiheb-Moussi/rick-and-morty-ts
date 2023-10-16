import CharacterCard from "../components/character/CharacterCard";
import { Character } from "../models/Character";

const renderCharacters = (characters: Character[]) => {
    const charactersHtml = characters.map((character) => CharacterCard(character)).join('');
    const charactersWrapper = document.querySelector('#charactersWrapper');
    charactersWrapper!.innerHTML = `${charactersHtml}`
}

export default renderCharacters;