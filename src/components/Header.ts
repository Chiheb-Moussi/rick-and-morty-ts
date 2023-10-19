import SearchForm from "./searchForm/SearchForm";
/* TODO: refctor menu */
const Header = (activeMenu: string): string => {

    return /*html*/ `
        <header class="antialiased">
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center">
                    <div class="flex justify-start items-center">
                        <a href="/" class="flex mr-4">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rick & Morty</span>
                        </a>
                        ${SearchForm()}
                        </div>
                    <div class="flex items-center lg:order-2">
                        <a href="/" data-dropdown-toggle="notification-dropdown" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${activeMenu === 'characters' ? 'text-gray-900 bg-gray-100': ''}">
                            Characters
                        </a>
                        <a href="/espisodes" data-dropdown-toggle="notification-dropdown" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${activeMenu === 'episodes' ? 'text-gray-900 bg-gray-100': ''}">
                            Episodes
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

export default Header;