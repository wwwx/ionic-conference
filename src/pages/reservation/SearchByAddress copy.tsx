import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import useSWR from 'swr'
// import { fetcher } from '../../utils/commonFunctions'
import Axios from 'axios'

interface Record {
    author: string;
}

const Profile: React.FC = () => {

    useEffect(() => {
        Axios.get('/api/test').then(res => console.log(res))
    }, [])
    
    // return <div className="loading">loading....</div>
    
    const profileEndpoint = '/api/test'

    // const getData = async() => {
    //     return await Axios.get(profileEndpoint)
    // }

    const {data, error} = useSWR(
        profileEndpoint, 
        url => fetch(url).then(res => res.json())
    )

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data}!</div>
}

const SearchByAddress: React.FC = () => {

    const [data, isError, isLoading] = useFetch<Record[]>('/api/test', [])



    return (
        <div className="hero">
            {isError && <div>Oops !! something went wrong</div>}
            <div>
                {
                    isLoading ? 'loading....' :
                    data.map((record, i) => <p key={i}>{record.author}</p>)
                }
            </div>
            <Profile />
        </div>
    )
}

export default SearchByAddress
