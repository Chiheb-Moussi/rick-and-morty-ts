import PaginatorButton from "../components/pagination/PaginatorButton";
import { Info } from "../services/fetchCharacters";

const renderPAgination = (info: Info, name: string= "", page: string = "") => {
    const currentPage: number = page ? Number(page) : 1;
    const pageCount: number = info.pages;
    const nextPage: number|null =  info.next ? currentPage + 1: null;
    const prevPage: number|null = info.prev ? currentPage - 1 : null;

    document.querySelector('#paginationWrapper')!.innerHTML = `
        ${PaginatorButton({
            name,
            page: prevPage ? prevPage?.toString(): '',
            label: 'Prev',
            isActive: false,
            isDisabled: prevPage === null
        })}
        ${displayPageNumbers(currentPage,pageCount,name)}
        ${PaginatorButton({
            name,
            page: nextPage ? nextPage?.toString(): '',
            label: 'Next',
            isActive: false,
            isDisabled: nextPage === null
        })}
        
    `;

}

export default renderPAgination;

const displayPageNumbers = ( currentPage: number, pageCount: number, name:string="" ): string => {
    let pageNumbers = [];
    if(pageCount < 5) {
        return Array(pageCount).fill('').map((_, index)=>{
            return PaginatorButton({
                name,
                page: (index+1).toString(),
                isActive: index+1 === currentPage,
                label: (index+1).toString()
            });
        }).join('');
    }

    if(currentPage <3) {
        pageNumbers = [...Array(3).fill('').map((_, index) => PaginatorButton({
            name,
            page: (index+1).toString(),
            isActive: index+1 === currentPage,
            label: (index+1).toString()
        }))]
        pageNumbers.push('<div>...</div>')
        pageNumbers.push(PaginatorButton({
            name,
            page: pageCount.toString(),
            label:pageCount.toString(),
        }))
        return pageNumbers.join('');
    }


    if(currentPage > pageCount - 2) {
        pageNumbers.push(PaginatorButton({
            name,
            page: '1',
            label:'1',
        }))
        pageNumbers.push('<div>...</div>')
        pageNumbers = [...pageNumbers, ...Array(3).fill('').map((_, index) => PaginatorButton({
            name,
            page: (pageCount + index-2).toString(),
            isActive: pageCount + index-2 === currentPage,
            label: (pageCount + index-2).toString()
        }))]

        return pageNumbers.join('');
    }

    pageNumbers.push(PaginatorButton({
        name,
        page: '1',
        label:'1',
    }));
    if(currentPage !== 3) {
        pageNumbers.push('<div>...</div>')
    }
    pageNumbers.push(PaginatorButton({
        name,
        page: (currentPage - 1).toString(),
        label: (currentPage - 1).toString(),
    }))
    pageNumbers.push(PaginatorButton({
        name,
        page: currentPage.toString(),
        label: currentPage.toString(),
        isActive: true,
    }))
    pageNumbers.push(PaginatorButton({
        name,
        page: (currentPage + 1).toString(),
        label: (currentPage + 1).toString(),
    }))
    if(currentPage !== pageCount - 2) {
        pageNumbers.push('<div>...</div>')
    }
    pageNumbers.push(PaginatorButton({
        name,
        page: pageCount.toString(),
        label:pageCount.toString(),
    }))

    return pageNumbers.join('');


}