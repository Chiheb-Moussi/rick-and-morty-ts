import { Character } from "../../models/Character";


const CharacterCard = (character: Character) => {
    const {id, name, image, status} = character;
    return /* html */`
        <div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 py-8 shadow-md">
            <div class="flex flex-col items-center ">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${image}" alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">${status}</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a href="/characters/${id}" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Character</a>
                    
                </div>
            </div>
        </div>
    `
}

export default CharacterCard;