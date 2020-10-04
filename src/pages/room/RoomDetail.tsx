import { IonContent, IonPage } from '@ionic/react'
import React, { useState } from 'react'
import AppHeader from '../../components/AppHeader'
import { TimeList } from '../../components/TimePicker'



const RoomDetail: React.FC = () => {

    const [time, setTime] = useState<number[]>([1,2,3])

    return (
        <IonPage className="RoomDetail">
            <AppHeader>
                共赢会议室
            </AppHeader>
            <IonContent>
                <div className="app-card">
                <TimeList {...{ time, setTime }} />
                </div>
            </IonContent>
        </IonPage>
    )
}

export default RoomDetail
