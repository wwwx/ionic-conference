import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import http from '../../service/base-service'

interface Record {
    author: string;
}

const SearchByAddress: React.FC = () => {

    const [data, isError, isLoading] = useFetch<Record[]>('/api/test', [])

    return (
        <div className="hero">
            {isError && <div>Oops !! something went wrong</div>}
            <div>
                {
                    isLoading ? 'loading....' :
                    // data.map((record, i) => <p key={i}>{record.author}</p>)
                }
            </div>
        </div>
    )
}

export default SearchByAddress
