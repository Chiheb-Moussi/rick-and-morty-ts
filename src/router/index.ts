import Home from "../pages/Home";


const Router = () => {
    const pathname = window.location.pathname;
    const path = pathname.slice(1).split('/');
    switch (path[0]) {
        case 'episodes':
            if(path.length > 1) {
                return `episode detail of ${path[1]}`
            }
            return `all episodes`;
        default:
            return Home();
    }
}

export default Router;