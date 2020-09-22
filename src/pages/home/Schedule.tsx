import { IonButton , IonAvatar } from '@ionic/react'
import React from 'react'

interface MyItemProps {
    data: {
        status: number;
        color: string;
    };
    style: { [key: string]: string };
}

const Item: React.FC<MyItemProps> = (props) => {
    return (
        <div className="item mb-3 border-bottom pb-3 fadeInUp" style={props.style}>
            <div className="top d-flex align-items-center mb-1">
                <IonButton color={props.data.color} size="small" className="m-0">
                    <IonAvatar>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVQ4T+2TUQ6AMAhD25u5kxlP5m5Wg6kfJptuzi8jv9AXKEAMBmt6SROA2fmFZC7V3gFWi9JHAJKOkUAyxXhdHhgQ5gZg174HkCQ7nqM9r/G0hcsOfgAw7MHTp6zeQStwA8/igxEfLWE4AAAAAElFTkSuQmCC" alt="avatar" />
                    </IonAvatar>
                    <span className="font-12">
                        {props.data.status === 1 && '进行种'}
                        {props.data.status === 2 && '未开始'}
                        {props.data.status === 3 && '已结束'}
                    </span>
                </IonButton >
                <span className="font-12 color-666">14:30~15:00</span>
            </div>
            <div className="bottom d-flex justify-content-between">
                <span className="meetingType font-14">【会议】</span>
                <span className="meetingContent flex-grow-1 font-14">管理沟通 Quick talk</span>
                <span className="meetingViewButton color-666 font-12">查看详情</span>
            </div>
        </div>
    )
}

const Schedule: React.FC = () => {
    const list = [
        { color: 'primary', status: 1 },
        { color: 'warning', status: 2 },
        { color: 'medium', status: 3 },
        { color: 'medium', status: 3 },
        { color: 'medium', status: 3 },
    ]
    return (
        <React.Fragment>
            <div className="block-title m-3 mt-4 d-flex justify-content-between fadeInUp">
                <span className="color-111 font-weight-bold">会议日程</span>
                <span className="color-666 font-14">09-06 星期一</span>
            </div>
            <div className="Schedule card d-flex flex-wrap mx-3 p-3 bg-white rounded">
                {list.map(
                    (_, i) => <Item data={_} style={{
                        animationDelay: `${(i+1) * 200}ms`
                    }} key={i} />
                )}
            </div>
        </React.Fragment>
    )
}

export default Schedule
