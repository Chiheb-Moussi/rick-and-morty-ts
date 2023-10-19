import Header from "../components/Header";
import CharactersWrapper from "../components/character/CharactersWrapper";
import Pagination from "../components/pagination/Pagination";

const Home = () => {
    return /* html */ `
        ${Header('characters')}
        ${CharactersWrapper()}
        ${Pagination()}
    `;
}

export default Home;