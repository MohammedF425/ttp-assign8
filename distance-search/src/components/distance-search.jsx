import React,{useState,useEffect} from 'react';
import axios from 'axios';


const DistanceSearch = () => {
    const [zipCode, setZipCode] = useState('');
    const [secondZipCode, setSecondZipCode] = useState('');
    const [distance, setDistance] = useState('');
    const [metric, setMetric] = useState('mi');
    const [measurement, setMeasurement] = useState('miles')
    
    const getDistance = async (e) => {
        e.preventDefault();
       
        try{
            const res = await axios.get(`https://zip-api.eu/api/v1/distance/US-${zipCode}/US-${secondZipCode}/${metric}`);
            setDistance(res.data.distance);
            console.log(res)
            setMeasurement('miles')
            if(metric==='km'){
                setMeasurement('kilometers')
            }
        }catch(err){
            console.log(err);
            alert("Invalid Zip Code");
        }
    }

    return(
        <div class="form-control form-control-lg">
            <h1 className="main-heading">Distance Finder</h1>
            <form onSubmit={getDistance}>
                <input type="text" placeholder="First Zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                <br></br>
                <input type="text" placeholder="Second Zipcode" value={secondZipCode} onChange={(e) => setSecondZipCode(e.target.value)} />
                <br></br>

                <select class="" size = '2' name="metrics" multiple>
                    <option value='mi' onClick={(e) => setMetric(e.target.value)}>miles</option>
                    <option value='km' onClick={(e) => setMetric(e.target.value)}>kilometers</option>
                </select> 
                <br></br>
     
                <button type="submit" class="btn btn-primary">Find Distance</button>


            </form>
            
            {<h1>{distance} {measurement}</h1>}

        </div>
    )

}
export default DistanceSearch;




