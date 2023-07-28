import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, config) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const handleFetch = useCallback(
        async () => {
            try {
                const response = await fetch(url, config)
                if(!response.ok) throw new Error(response.statusText)
                const responseData = await response.json()
                setData(responseData)
            } catch (error) {
                setError(error.message)
            }
        }, []
    )

    useEffect(() => {
        if(data.length === 0) handleFetch()
    }, [config, data.length, handleFetch, url])

    return {
        data, error
    }
}