import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';


const Profile: React.FC = () => {

    
    const trail = useMemo(() => {
        const styles: { [key: string]: string }[] = [];
        [0,0,0,0,0].map((_: number, i: number) => {
            styles.push({
                animationDelay: `${i*200}ms`
            })
            return null;
        })
        return styles
    }, []);

    return (
        <React.Fragment>
            <div className="app-block-title fadeInUp" style={trail[0]}>会议管家</div>
            <div className="Butler d-flex flex-wrap mx-3">
                <div className="app-card mb-2 fadeInUp" style={trail[1]}>
                    <div className="icon mr-2 rounded"></div>
                    <Link className="title color-111" to="/reservation">会议预定</Link>
                </div>
                <div className="app-card mb-2 ml-2 fadeInUp" style={trail[2]}>
                    <div className="icon mr-2 rounded"></div>
                    <Link className="title color-111" to="/mine/conference">我的会议</Link>
                </div>
                <div className="app-card fadeInUp" style={trail[3]}>
                    <div className="icon mr-2 rounded"></div>
                    <div className="title color-111">会议纪要</div>
                </div>
                <div className="app-card ml-2 fadeInUp" style={trail[4]}>
                    <div className="icon mr-2 rounded"></div>
                    <Link className="title color-111" to="/my-schedule">我的日程</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile
