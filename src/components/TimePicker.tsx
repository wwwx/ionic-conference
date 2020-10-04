import Modal from './Modal'
import './TimePicker.scss'
import React, { useCallback, useEffect, useState } from 'react'
import classnams from 'classnames'

export const picklist = [
    '09:00~10:30', '09:30~10:00', '10:00~10:30', '10:30~11:00',
    '11:00~11:30', '11:30~12:00', '12:00~12:30', '12:30~13:00',
    '13:00~13:30', '13:30~14:00', '14:00~14:30', '14:30~15:00',
    '15:00~15:30', '15:30~16:00', '16:00~16:30', '16:30~17:00',
    '17:00~17:30', '17:30~18:00', '18:00~18:30', '18:30~19:00',
]

type ItemProps = {
    title: string;
    isActive?: boolean;
    time: number[];
    i: number;
    setTime: (time: number[]) => void
}

const Item: React.FC<ItemProps> = ({ title, isActive, i, time, setTime }) => {
    
    const handleClick = useCallback(() => {

        const index = time.indexOf(i)
        if (index > -1) {

            setTime(time.splice(index, 1))
        } else {
            setTime([...time, i])
        }
        
    }, [ i, time, setTime])

    return (
        <div 
            className={classnams('item', isActive ? 'active' : '')}  
            onClick={handleClick}
        >
            <span className="border">{title}</span>
        </div>
    )
}


type TimeProps = {
    time: number[];
    setTime: (value: number[]) => void
}

export const TimeList: React.FC<TimeProps> = ({ time, setTime }) => {
    
    return (
        <div className="conference-picklist">
            {picklist.map(
                (item,i) => 
                    <Item 
                        title={item} 
                        isActive={i>= Math.min(...time) && i <= Math.max(...time)}
                        key={i}
                        {...{ i, time, setTime }}
                    />
            )}
        </div>
    )
}



const TimePicker: React.FC<TimeProps> = ({ time, setTime }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [title, setTitle] = useState('')
    useEffect(() => {
        const activelist = picklist.filter((_, i) => time.indexOf(i) > -1)
        if (activelist.length === 1)  {
            setTitle(activelist[0])
        }

        if (activelist.length > 1) {

            const starttime = activelist.shift()
            const endtime = activelist.pop()
            setTitle([starttime?.split('~')[0], endtime?.split('~')[1]].join('~'))
        }
        
    }, [time])

    return <>
        <span onClick={() => setModalVisible(true)}>{title || '请选择'}</span>
        <Modal
            visible={modalVisible} 
            hide={() => setModalVisible(false)}
            title="选择时间"
            content={
                <>
                    <TimeList { ...{ time, setTime } } />
                    <div className="btn-conference-confirm my-3">
                        <div>
                            <span className="label">会议时间:</span>
                            <span className="title ml-3">{title}</span>
                        </div>
                        <button onClick={() => setModalVisible(false)}>确定</button>
                    </div>
                </>
            }
        />
    </>
}


export default TimePicker