import React from "react"
import './Common.scss'

function Loading() {
    return <div>Loading...</div>
}

function ErrorMessage() {
    return <div>Oops !! something went wrong</div>
}

function Empty() {
    return (
        <div className="Empty">
            <div className="empty-bg"></div>
            <p className="empty-message">暂无数据</p>
        </div>
    )
}

export {
    Loading,
    ErrorMessage,
    Empty
}
