import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import SearchByTime from './SearchByTime'
import SearchByAddress from './SearchByAddress'
import AppHeader from '../../components/AppHeader'
// import http from '../../utils/http'

const Reservation: React.FC = () => {
    const tabsConfig = [
        {
            label: '按时间查询',
            value: 'time',
        },
        {
            label: '按会议地址查询',
            value: 'address',
        },
    ]
    // eslint-disable-next-line 
    const [active, setActive] = useState(tabsConfig[1].value)

    const handleTabsChange = (tabName: string) => {
        setActive(tabName)
    }

    useEffect(() => {
        // http.get('/api/test').then(res => {
        //     console.log(res)
        // })
    }, [])
    

    return (
        <IonPage className="Reservation">
            <AppHeader>
                会议预定
            </AppHeader>
            <IonContent>
                <IonToolbar>
                    <IonSegment mode="md" value={active} onIonChange={(e: any) => handleTabsChange(e.detail.value)}>
                        {tabsConfig.map(tab => (
                            <IonSegmentButton key={tab.value} value={tab.value}>
                                <IonLabel>{tab.label}</IonLabel>
                            </IonSegmentButton>
                        ))}
                    </IonSegment>
                </IonToolbar>
                {active === 'time' && <SearchByTime />}
                {active === 'address' && <SearchByAddress />}
            </IonContent>
        </IonPage>
    )
}

export default Reservation
