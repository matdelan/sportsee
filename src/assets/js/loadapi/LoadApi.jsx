import {useState, useEffect} from 'react'

/*
* Return loading data
* @param {sting} url - url of api to load
* @returns { Object }
*/
export default function LoadApi(url) {

    const [apiData, setApiData] = useState(null)

    useEffect(() => {
        async function fetchURL(url) {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setApiData(data.data)
            }
            catch (e){
                console.log(e)
            }
        }
        fetchURL(url) 
    }, [url])
    
    return { apiData }
}