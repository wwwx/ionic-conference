import React, { useState } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import Calendar, {toDateLocaleString} from '../../components/Calendar'
import AppHeader from '../../components/AppHeader'
import ScheduleItem from './ScheduleItem'

const MySchedule: React.FC = () => {

    const list = [
        { color: 'primary', status: 1 },
        { color: 'warning', status: 2 },
        { color: 'medium', status: 3 },
        { color: 'medium', status: 3 },
        { color: 'medium', status: 3 },
    ]

    const [date, setDate] = useState(Date.now())

    function handleClick(value: number) {
        // console.log(value)
        setDate(value)
    }
    
    return (
        <IonPage className="MySchedule">
            <AppHeader>
                 我的日程
            </AppHeader>
            <IonContent>
                <div className="app-card">
                    <Calendar
                        value={date}
                        onChange={handleClick}
                    />
                </div>
                <div className="block-title m-3 mt-4 d-flex justify-content-between fadeInUp">
                    <span className="color-666 font-14">{toDateLocaleString(date)}</span>
                </div>
                <div className="app-card Schedule">
                    {list.map(
                        (_, i) => <ScheduleItem data={_} style={{
                            animationDelay: `${(i+1) * 200}ms`
                        }} key={i} />
                    )}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default MySchedule