import React from 'react'
import { ICardProps } from './type'
import Card from './Card'

const ConferenceHasNotStartCard: React.FC<ICardProps> = ({
    data,
    typeName,
    onConfirm,
    onCancel,
}) => {


    return (
        <Card
            typeName={typeName}
            isHost={data.isHost}
            renderHead={<span className="_title">{data.title}</span>}
            renderBody={
            <ul className="ul">
                <li>
                    <label>地点</label>
                    <span>{data.address}</span>
                </li>
                <li>
                    <label>时间</label>
                    <span className="datetime">{data.datetime}</span>
                </li>
                <li>
                    <label>主持人</label>
                    <span>{data.host}</span>
                </li>
            </ul>
            }
            renderButtons={
                <>

                {onCancel && <button 
                    className="app-card__button cancel"
                    onClick={() => onCancel()}
                >
                    <span className=" border-left">取消预订</span>
                </button>}
                
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

export default ConferenceHasNotStartCard
