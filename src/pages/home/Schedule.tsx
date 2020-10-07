import React from 'react'
import ScheduleItem from './ScheduleItem'

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
            <div className="app-block-title fadeInUp">
                <span className="color-111 font-weight-bold">会议日程</span>
                <span className="color-666 font-14">09-06 星期一</span>
            </div>
            <div className="app-card Schedule">
                {list.map(
                    (_, i) => <ScheduleItem data={_} style={{
                        animationDelay: `${(i+1) * 200}ms`
                    }} key={i} />
                )}
            </div>
        </React.Fragment>
    )
}

export default Schedule
