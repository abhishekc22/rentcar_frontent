import { Await } from "react-router-dom";
import axios from "./Axiosinstance";


export const partnerSignupapi=async(partnersignupdata)=>{
    const data=await axios.post('/api/partner-signup/',partnersignupdata);
    console.log(data,"return backedn")
    return data 
}



export const partnerloginapi=async(parnerlogindata)=>{
    console.log('klooo');
    const data=await axios.post('/api/Partnerlogin-api/',parnerlogindata)
    console.log(data,'data');
    return data
}

export const Addcarapi = async (formData, partner_id) => {
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1],'--------------');
        }

    const data = await axios.post(`partnerside/addcar/${partner_id}/`, formData);
    console.log(data,'*******7474*****')
    return data;


}
