import {PATHS} from "./path";
import {Main} from "../ui/pages/main/main";
import {Login} from "../ui/pages/login/login";
export const ROUTER = {
    MAIN: {
        path: PATHS.MAIN,
        element: <Main />,
    },
    LOGIN:{
        path: PATHS.LOGIN,
        element: <Login/>
    },
}