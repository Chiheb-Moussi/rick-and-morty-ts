type PaginatorButtonType = {
    name: string;
    page: string;
    isActive?: boolean;
    isDisabled?: boolean;
    label: string;
}


const PaginatorButton = ({name, page, label, isActive, isDisabled}:PaginatorButtonType): string => {


    return /* html */ `
        <a href="?name=${name}&page=${page}" class="border border-solid border-neutral-200 shadow-md py-2 px-4 rounded-md hover:bg-neutral-200 ${isActive ? 'bg-neutral-400 text-white' : 'bg-white'} ${isDisabled ? 'pointer-events-none bg-neutral-200': 'cursor-pointer '}" id="pageButton_${label}">${label}</a>
    `
}

export default PaginatorButton;