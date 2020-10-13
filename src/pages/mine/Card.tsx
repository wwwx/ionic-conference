import React from 'react'

enum CardType {
    CONFERENCE_BEFORE,
    CONFERENCE_PROCESSING,
    CONFERENCE_FINISH,
}

interface CardProps {
    onConfirm?: Function;
    onCancel?: Function;
    confirmButtonText?: string;
    cancelButtonText?: string;
    renderHead?: JSX.Element;
    renderBody?: JSX.Element;
    renderButtons?: JSX.Element;
    type?: number;
}

const Card: React.FC<CardProps> = ({ 
    renderHead,
    renderBody,
    renderButtons,
    type,
}) => {
    // console.log(data)
    return (
        <div className="Card app-card">
            {type && <span className="app-card__tag">{type}</span>}

            {renderHead && <div className="app-card__head border-bottom">
                {renderHead}
            </div>}

            <div className="app-card__body">
                {renderBody}
            </div>
            <div className="app-card__foot border-top">
                {renderButtons}
            </div>
        </div>
    )
}


interface ICardProps {
    
    data: MineCardParams;
    onConfirm?: Function;
    onCancel?: Function;
}

const InviteCard: React.FC<ICardProps> = ({
    data,
    onConfirm,
    onCancel,
}) => {


    return (
        <Card
            renderHead={<span className="title">{data.title}</span>}
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
                {onConfirm && <button 
                    className="app-card__button confirm"
                    onClick={() => onConfirm()}
                >
                    <span>接受邀请</span>
                </button>}

                {onCancel && <button 
                    className="app-card__button cancel"
                    onClick={() => onCancel()}
                >
                    <span className=" border-left">残忍拒绝</span>
                </button>}
                </>
            }
        />
    )
}


const ConferenceBeforeCard: React.FC<ICardProps> = ({
    data,
    onConfirm,
    onCancel,
}) => {


    return (
        <Card
            type={data.type}
            onConfirm={onConfirm}
            onCancel={onCancel}
            renderHead={<span className="title">{data.title}</span>}
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

const ConferenceFinishCard: React.FC<ICardProps> = ({
    data,
    onConfirm,
}) => {


    return (
        <Card
            type={data.type}
            renderBody={
            <ul className="ul">
                <li>
                    <label>主题</label>
                    <span className="title">{data.title}</span>
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

export {
    Card,
    InviteCard,
    ConferenceBeforeCard,
    ConferenceFinishCard
}
