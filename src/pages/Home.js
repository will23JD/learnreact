import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
    const {username} = useContext(AppContext)
    return <h1>Welcome to the home page, {username} </h1>
};