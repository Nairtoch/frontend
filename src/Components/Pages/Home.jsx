import React from "react";
import useFetch from "../Hooks/useFetch";
import Style from '../Pages/Home.module.scss';

function Homepage() {
    const { loading, error, data } = useFetch("http://localhost:1337/api/restaurants?populate=*");

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error ;-;</p>;

    console.log(data);

    return (
        <div className={Style.Home}>
            {data.map((restaurant) => (
                <div key={restaurant.id}>
                    <div>
                        <div className={Style.RestImage}>
                            <img src = {`http://localhost:1337${restaurant.attributes.Image.data[0].attributes.url}`} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className={Style.RestName}>{restaurant.attributes.Name}</div>
                    </div>
                    <div>
                        <div className="RestDesc">{restaurant.attributes.Description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Homepage;