import React from 'react'
import { ICardProps } from './type'
import Card from './Card'

const ConferenceFinishedCard: React.FC<ICardProps> = ({
    data,
    typeName,
    onConfirm,
}) => {


    return (
        <Card
            typeName={typeName}
            isHost={data.isHost}
            renderBody={
            <ul className="ul">
                <li>
                    <label>主题</label>
                    <span className="_title">{data.title}</span>
                </li>
                <li>
                    <label>时间</label>
                    <span className="datetime">{data.datetime}</span>
                </li>
                <li>
                    <label>地点</label>
                    <span>{data.address}</span>
                </li>
            </ul>
            }
            renderButtons={
                <>
                {onConfirm && <button 
                    className="app-card__button confirm"
                    onClick={() => onConfirm()}
                >
                    <span>查看详情</span>
                </button>}
                </>
            }
        />
    )
}

export default ConferenceFinishedCard
