import React from 'react'
import useSWR from 'swr'
import { ConferenceFinishCard, ConferenceBeforeCard } from './Card'
import fetcher from '../../service/base-service'
import { Empty, ErrorMessage, Loading } from '../../components/Common';

const Conference: React.FC = () => {

    const {data, error} = useSWR('/api/conference-list', fetcher.get)
    // console.log(data)
    if (error) return <ErrorMessage />
    if (!data) return <Loading />

    const list = data.data

    if (!list) return (
        <div className="app-card">
            <Empty />
        </div>
    )

    function handConfirm() {
        console.log('confirm')
    }

    
    function handleCancel() {
        console.log('cancel')
    }

    return list.map(
        (item: MineCardParams, i: number) => {

            switch(item.type) {
                case 1: 
                return <ConferenceFinishCard 
                    data={item} 
                    key={i} 
                    onConfirm={handConfirm}
                />
                case 2: 
                return <ConferenceBeforeCard 
                    data={item}
                    key={i} 
                    onConfirm={handConfirm}
                />
                case 3: 
                return <ConferenceBeforeCard 
                    data={item}
                    key={i} 
                    onConfirm={handConfirm}
                    onCancel={handleCancel}
                />
                
            }
            return null;
        }
    )
}

export default Conference
