import React,{useState,useEffect} from 'react';
import axios from 'axios';

const DistanceSearch = () => {
    const [zipCode, setZipCode] = useState('');
    const [secondZipCode, setSecondZipCode] = useState('');
    const [distance, setDistance] = useState('');
    
    const getDistance = async (e) => {
        e.preventDefault();
       
        try{
            const res = await axios.get(`https://zip-api.eu/api/v1/distance/US-${zipCode}/US-${secondZipCode}/mi`);
            setDistance(res.data.distance);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <h1>Distance Finder</h1>
            <form onSubmit={getDistance}>
                <input type="text" placeholder="First Zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                <input type="text" placeholder="Second Zipcode" value={secondZipCode} onChange={(e) => setSecondZipCode(e.target.value)} />
                <button type="submit">Find Distance</button>
            </form>
            {distance && <h1>{distance} miles</h1>}

        </div>
    )

}
export default DistanceSearch;




