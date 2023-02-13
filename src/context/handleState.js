import React, { useState } from "react";
import HandleContext from "./handleContext";

const HandleState = (props) => {
    const [data, setData] = useState('');
    const host=process.env.REACT_APP_BASE_URL||"http://localhost:5000";

    const searchAllSites = async (search) => {
        // const response = await fetch(`${host}/api/v1/medicanApi`,{
        const response = await fetch(`${host}/scrape`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({search})
        });
        const json = await response.json();
        setData(json);
        console.log(json);
      }
    
    return (
        <HandleContext.Provider
        value={{searchAllSites,data}}
        >
        {props.children}
        </HandleContext.Provider>
    );
};

export default HandleState;