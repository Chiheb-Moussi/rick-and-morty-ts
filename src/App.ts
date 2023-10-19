import Header from "./components/Header";
import Pagination from "./components/pagination/Pagination";
import CharactersWrapper from "./components/character/CharactersWrapper";
import fetchCharacters from "./services/fetchCharacters";
import Router from "./router";

const App = (): string => {
    const searchParams = new URLSearchParams(window.location.search);// ?name=rick&page=1
    const name = searchParams.get('name') ?? '';
    const page = searchParams.get('page')?? '';
    fetchCharacters(name, page);
    
    return /*html*/`
        <div class="container">
            ${Router()}
        </div>
    `
}

export default App;