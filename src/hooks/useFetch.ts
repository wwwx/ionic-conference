import { useState, useEffect } from 'react'
import http from '../service/base-service'

const useFetch = <T>(url: string, initialData: T) => {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    useEffect(() => {
        setIsError(false)
        setIsLoading(true)
        
        const fetchData = async () => {

            try {
                const result = await http.get<T>(url)
                // console.log(result.data)
                setData(result.data)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData()


    }, [])


    return [data, isError, isLoading] as [ T, boolean, boolean ]
}

export default useFetch
