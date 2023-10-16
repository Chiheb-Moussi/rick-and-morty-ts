import Header from "./components/Header";
import CharactersWrapper from "./components/character/CharactersWrapper";
import fetchCharacters from "./services/fetchCharacters";

const App = (): string => {
    fetchCharacters();
    return /*html*/`
        <div class="container">
            ${Header()}
            ${CharactersWrapper()}
        
        </div>
    `
}

export default App;