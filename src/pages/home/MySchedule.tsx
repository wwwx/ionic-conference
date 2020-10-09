import React, { useState } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import Calendar, {toDateLocaleString} from '../../components/Calendar'
import AppHeader from '../../components/AppHeader'
import ScheduleItem from './ScheduleItem'
import dayjs from 'dayjs'
import useFetch from '../../hooks/useFetch'

const MySchedule: React.FC = () => {

    const defaultList = [
        { color: 'primary', status: 1 },
        { color: 'warning', status: 2 },
        { color: 'medium', status: 3 },
        { color: 'medium', status: 3 },
        { color: 'medium', status: 3 },
    ]

    const [date, setDate] = useState(Date.now())
    const [list, setList] = useState<any[]>(defaultList)

    function handleClick(value: number) {
        setDate(value)
        const DATE_FORM = 'YYYY/MM/DD'
        const today = dayjs().format(DATE_FORM)
        const selected = dayjs(value).format(DATE_FORM)
        // console.log(today, selected)
        if (today === selected) {
            setList(defaultList)
        } else {
            setList([])
        }
    }

    
    const [data, isError, isLoading] = useFetch('/api/test', [])
    
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
                    {isError && <div>Oops !! something went wrong</div>}
                    {isLoading ? 'loading....' : '12312'}
                    {/* {list.map(
                        (_, i) => <ScheduleItem data={_} style={{
                            animationDelay: `${(i+1) * 200}ms`
                        }} key={i} />
                    )} */}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default MySchedule
