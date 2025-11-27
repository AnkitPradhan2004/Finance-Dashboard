import React, { use, useState } from 'react'

const useFetch = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("")

    async function FetchData(){
        try {
            setLoading(true);
            setError("");
            const raw = await fetch();
            const allData = await raw.json();
            setData(allData)
            setLoading(false)
            
        } catch (error) {
            setError(`Error :${error}`)
            setLoading(false);
            
        }

    }

  return {data,loading,error,reFetch}
}

export default useFetch
