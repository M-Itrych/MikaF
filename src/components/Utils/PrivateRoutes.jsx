import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config.json"
import React from "react";

const PrivateRoutes = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        

        if (token) {
            axios.post(`${config.apiUrl}/api/authenticate`, null,{
                headers: {
                    Authorization: `${token}`
                }
            })
            .then(_ => {
                setIsLoggedIn(true);
            })
            .catch(_ => {
                console.error('Token is invalid or expired');
                setIsLoggedIn(false);
            });
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    return(
        isLoggedIn ? <Outlet/> : <h2>Unauthorized!</h2>
    )
}

export default PrivateRoutes;