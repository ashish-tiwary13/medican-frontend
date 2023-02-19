import React, { useState } from "react";
import HandleContext from "./handleContext";
const fuzz= require('fuzzball');


//
// "https://medican-backend-apollo.vercel.app/api"
// "https://medican-backend-1mg.vercel.app/api"
// "https://medican-backend-pharmeasy.vercel.app/api"
// "https://medican-backend-netmeds.vercel.app/api"
//

const HandleState = (props) => {
    const [data, setData] = useState('');
    const [searched, setSearched] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const apollo = async (search) => {
      setIsLoading(true);
      const response = await fetch("https://medican-backend-apollo.vercel.app/api",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({search})
        });
        const json = await response.json();
        // setData(json);
        return json;
    }
    const onemg = async (search) => {
      setIsLoading(true);
      const response = await fetch("https://medican-backend-1mg.vercel.app/api",{
        mode: 'cors',
    
      method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({search})
        });
        const json = await response.json();
        // setData(json);
        return json;
    }
    const pharmeasy = async (search) => {
      const response = await fetch("https://medican-backend-pharmeasy.vercel.app/api",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({search})
        });
        const json = await response.json();
        // setData(json);
        return json;
    }
    const netmeds = async (search) => {
      const response = await fetch("https://medican-backend-netmeds.vercel.app/api",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({search})
        });
        const json = await response.json();
        // setData(json);
        return json;
    }
    const truemeds = async (search) => {
      const response = await fetch("https://medican-backend-truemeds.vercel.app/api",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({search})
        });
        const json = await response.json();
        // setData(json);
        return json;
    }
//
    const searchAllSites = async (search) => {
        // const json1 = await apollo(search);
        // const json2 = await onemg(search);
        // const json3 = await pharmeasy(search);
        // const json4 = await netmeds(search);
        // const json5 = await truemeds(search);

        const [json1,json2,json3,json4] = await Promise.all([apollo(search),truemeds(search),pharmeasy(search),netmeds(search)]);
// console.log({json5});

        // //

        const medicanApi1=[];
        const medicanApi2=[];
        const medicanApi3=[]; 
        let nameScore=-1;
        let mrpScore=-1;
        let x=0;
        for (let i = 0; i < 30; i++) {
            const data = { index: i, name:"",mrp:"" ,apolloPrice:"",truemedsPrice:"",pharmeasyPrice:"", netmedsPrice: "",image: "" ,apolloLink:"",truemedsLink:"",pharmeasyLink:"", netmedsLink: ""};
            for (let j = 0; j < 30; j++) {
                nameScore = fuzz.token_set_ratio(json1[i].name, json2[j].name);
                mrpScore = fuzz.token_set_ratio(json1[i].mrp, json2[j].mrp);
                if(nameScore>50 && mrpScore==100){
                    // console.log(json1[i].name +"||"+json2[j].name+"||"+nameScore+"||"+mrpScore);
                    data.name = json1[i].name;
                    data.mrp = json1[i].mrp;
                    data.apolloPrice = json1[i].actualPrice;
                    data.truemedsPrice = json2[j].actualPrice;
                    data.image = json1[i].image;
                    data.apolloLink = json1[i].link;
                    data.truemedsLink = json2[j].link;
                }else{
                    x++;
                }
            }
        medicanApi1.push(data);
        }
        
        // between medicanAp1 and pharmeasy
        for (let i = 0; i < 30; i++) {
            const data = { index: i, name:"",mrp:"" ,apolloPrice:"",truemedsPrice:"",pharmeasyPrice:"", netmedsPrice: "",image: ""  ,apolloLink:"",truemedsLink:"",pharmeasyLink:"", netmedsLink: ""};
            for (let j = 0; j < 30; j++) {
                nameScore = fuzz.token_set_ratio(medicanApi1[i].name, json3[j].name);
                mrpScore = fuzz.token_set_ratio(medicanApi1[i].mrp, json3[j].mrp);
                data.name = medicanApi1[i].name;
                data.mrp = medicanApi1[i].mrp;
                data.apolloPrice = medicanApi1[i].apolloPrice;
                data.truemedsPrice = medicanApi1[i].truemedsPrice;
                data.apolloLink = medicanApi1[i].apolloLink;
                data.truemedsLink = medicanApi1[i].truemedsLink;
                data.image = medicanApi1[i].image;
                if(nameScore>50 && mrpScore==100){
                    // console.log(medicanApi1[i].name +"||"+json3[j].name+"||"+nameScore+"||"+mrpScore);
                    data.pharmeasyPrice = json3[j].actualPrice;
                    data.pharmeasyLink = json3[j].link;
                    break;
                }else{
                    data.pharmeasyPrice =0;
                    
                    x++;
                }
            }
            medicanApi2.push(data);
        }
        
        // between medicanApi2 and netmeds
        for (let i = 0; i < 30; i++) {
            const data = { index: i, name:"",mrp:"" ,apolloPrice:"",truemedsPrice:"",pharmeasyPrice:"", netmedsPrice: "",apolloLink:"",truemedsLink:"",pharmeasyLink:"", netmedsLink: "",image: ""  };
            for (let j = 0; j < 30; j++) {
                nameScore = fuzz.token_set_ratio(medicanApi2[i].name, json4[j].name);
                mrpScore = fuzz.token_set_ratio(medicanApi2[i].mrp, json4[j].mrp);
                data.name = medicanApi2[i].name;
                data.mrp = medicanApi2[i].mrp;
                data.apolloPrice = medicanApi2[i].apolloPrice;
                data.truemedsPrice = medicanApi2[i].truemedsPrice;
                data.pharmeasyPrice = medicanApi2[i].pharmeasyPrice;
                data.apolloLink = medicanApi2[i].apolloLink;
                data.truemedsLink = medicanApi2[i].truemedsLink;
                data.pharmeasyLink = medicanApi2[i].pharmeasyLink;
                data.image = medicanApi2[i].image;
                if(nameScore>50 && mrpScore==100){
                    // console.log(medicanApi2[i].name +"||"+json4[j].name+"||"+nameScore+"||"+mrpScore);
                    data.netmedsPrice = json4[j].actualPrice;
                    data.netmedsLink = json4[j].link;
                    break;
                }else{        
            data.netmedsPrice =0;
            x++;
                }
            }
            medicanApi3.push(data);
        }
        const filterData = medicanApi3.filter((item) => item.mrp !== '');
        console.log(filterData);
        if(filterData.length===0){
            alert("No Data Found, Please Try Again");
        }
        setIsLoading(false);
        setData(filterData);





        // console.log(json2);
        // console.log(json1,json2,json3,json4);
      }
    
    return (
        <HandleContext.Provider
        value={{searchAllSites,data,searched,setSearched,isLoading}}
        >
        {props.children}
        </HandleContext.Provider>
    );
};

export default HandleState;