import axios from "axios"

const checkDidAvailability = async (name) => {
    try {
        const baseUrl = 'https://staging.tria.so'
        const { data } = await axios.post(`${baseUrl}/api/v1/did/check`, {
            did: name?.toLowerCase() + "@tria"
        })
        console.log("did --->", data?.response?.availabilityStatus)
        return data?.response?.availabilityStatus
    } catch (err) {
        console.log(err)
    }

}

const getDidRecommendations = async (name) => {
    try {
        const baseUrl = 'https://staging.tria.so'
        const { data } = await axios.get(`${baseUrl}/api/v2/get-name-recommendation?name=${name?.toLowerCase()}`)
        return data?.data[0]
    } catch (err) {
        console.log(err)
    }
}

const getDataFromLocalStorage=async()=>{
    try{
        const dappData=localStorage.getItem("dappDetails")|| "";
        const searchParams = new URLSearchParams(dappData);
        const logo = searchParams.get('dappLogo');
        const domain = searchParams.get('dappDomain');
        const triaName=JSON.parse(localStorage.getItem("tria.wallet.store") || "{}")?.triaName;
        const data={dappLogo:logo,dappDomain:domain,triaName};
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export { checkDidAvailability, getDidRecommendations,getDataFromLocalStorage }