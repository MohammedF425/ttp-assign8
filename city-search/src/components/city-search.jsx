import React, {useEffect, useState} from "react";
import axios from "axios";

{ /*Primary Tasks

Using the same zip-api we used in project 1:

    Implement a City Search field that takes city names
        it should allow city names to be entered in upper, lower, or mixed case letters
Display all zip codes received from the API */ }


    const CitySearch = ((props) => {
        const[zipCode, setZipCode] = useState(11210);
        const [city, setCity] = useState("");
        const [inputValue, setInputValue] = useState("");
        const [lat, setLat] = useState("");
        const [lng, setLng] = useState("");
        const [secondZipCode, setSecondZipCode] = useState(11210);
        const [secondCity, setSecondCity] = useState("");
        const [secondInputValue, setSecondInputValue] = useState("");
        const [secondLat, setSecondLat] = useState("");
        const [secondLng, setSecondLng] = useState("");



        useEffect(()=> {
            async function fetchZipCode(){
            try {
                const area = await axios.get(`https://zip-api.eu/api/v1/info/US-${zipCode}`);
                const area2 = await axios.get(`https://zip-api.eu/api/v1/info/US-${secondZipCode}`); 
                setCity(area.data.place_name)
                setLat(area.data.lat)
                setLng(area.data.lng)
                setSecondCity(area2.data.place_name)
                setSecondLat(area2.data.lat)
                setSecondLng(area2.data.lng)
                return area
            } catch (error) {
                console.error(error);
                
            }
        }
            fetchZipCode(); 
        })
        const handleSubmit = () => {
            setZipCode(inputValue);
            console.log(inputValue)
            console.log(city)
        }
        const handleSubmit2 = () => {
            setSecondZipCode(secondInputValue);
            console.log(secondInputValue)
            console.log(city)
        }

        const calculateDistance = () => {
            try {
                // acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371
                
            } catch (error) {
                
            }
        }


    return (
        <div>
        <label>
        Zip Code: <input type='number' value={inputValue}  name="zipcode" onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleSubmit}>submit
        </button>
        </label>

        <label>
            Second Zip Code: <input type='number' value={secondInputValue} name="secondzipcode" />
        </label>
      <p>The city of the zipcode: {secondZipCode} is {secondCity} </p>
        </div>

    );
});


export default CitySearch;