import {useState, useEffect} from 'react'

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