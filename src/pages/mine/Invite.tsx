import React from 'react'
import useSWR from 'swr'
import InviteCard from './Card/InviteCard'
import fetcher from '../../service/base-service'
import { Empty, ErrorMessage, Loading } from '../../components/Common';
import { MineCardParams } from '../../service/mine.model'

const Invite: React.FC = () => {

    const {data, error} = useSWR('/api/invite-list', fetcher.get)
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

    return (
        <>
            {list.map(
                (item: MineCardParams, i: number) => 
                    <InviteCard 
                        data={item} 
                        key={i} 
                        onConfirm={handConfirm}
                        onCancel={handleCancel}
                        
                    />
            )}
        </>
    )
}

export default Invite
