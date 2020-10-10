import { IonContent, IonPage } from '@ionic/react'
import React, { useState } from 'react'
import AppHeader from '../../components/AppHeader'
import { toDateLocaleString } from '../../components/Calendar'
import { TimeList } from '../../components/TimePicker'
import dayjs from 'dayjs'

type RoomDetailItemProps={
    content: string;
}

function RoomDetailItem(props: RoomDetailItemProps) {
    return (
        <div className="RoomDetailItem color-333 font-14 mb-3">
            <i className="icon"></i>
            <span>{props.content}</span>
        </div>
    )
}

const RoomDetail: React.FC = () => {

    const [time, setTime] = useState<number[]>([1,2,3])
    const DATE_FORMAT = 'YYYY/MM/DD'
    const date = new Date(dayjs().format(DATE_FORMAT)).getTime();

    return (
        <IonPage className="RoomDetail">
            <AppHeader>
                共赢会议室
            </AppHeader>
            <IonContent>

                
                <div className="app-block-title">
                    <span className="color-111 font-weight-bold">共赢会议室</span>
                </div>
                <div className="app-card">
                    <RoomDetailItem content="由由职场1号楼18F" />
                    <RoomDetailItem content="电视机、白板、视频、话筒" />
                    <RoomDetailItem content="最多可容纳20人" />
                    <RoomDetailItem content="访客请链接“niwodai_guest”按提示完成注册" />
                </div>
                
                <div className="app-block-title">
                    <span className="color-111 font-weight-bold">会议室预定详情</span>
                    <span className="color-666 font-14">
                        {toDateLocaleString(date)}
                    </span>
                </div>
                <div className="app-card">
                    <TimeList {...{ time, setTime }} />
                </div>
            </IonContent>
        </IonPage>
    )
}

export default RoomDetail
