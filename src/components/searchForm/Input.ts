
const Input = ():string => {
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get('name') ?? "";
    return /*html*/ `
        <input type="text" name="name" id="topbar-search" value="${name}" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search">
    `
}

export default Input;