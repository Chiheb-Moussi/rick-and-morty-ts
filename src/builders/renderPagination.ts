import { Info } from "../services/fetchCharacters";

const renderPAgination = (info: Info, name: string= "", page: string = "") => {
    const currentPage: number = page ? Number(page) : 1;
    const pageCount: number = info.pages;
    const nextPage: number|null =  info.next ? currentPage + 1: null;
    const prevPage: number|null = info.prev ? currentPage - 1 : null;

    document.

}

const displayPageNumbers = ( currentPage: number, pageCount: number ) => {

}