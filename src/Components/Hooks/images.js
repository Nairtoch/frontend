import { useEffect, useState } from "react";
import Axios from 'axios';

export default function Images(){
    const [images, setImages] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:1337/api/restaurants?populate=*").then(res => {
            console.log(res);
        })
    }, [])
}