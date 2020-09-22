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
            <div className="block-title m-3 mt-4 color-111 font-weight-bold fadeInUp" style={trail[0]}>会议管家</div>
            <div className="Butler d-flex flex-wrap mx-3">
                <div className="card d-flex align-items-center p-3 rounded mb-2 fadeInUp" style={trail[1]}>
                    <div className="icon mr-2 rounded"></div>
                    <Link className="title color-111" to="/reservation">会议预定</Link>
                </div>
                <div className="card d-flex align-items-center p-3 rounded mb-2 ml-2 fadeInUp" style={trail[2]}>
                    <div className="icon mr-2 rounded"></div>
                    <div className="title color-111">我的会议</div>
                </div>
                <div className="card d-flex align-items-center p-3 rounded fadeInUp" style={trail[3]}>
                    <div className="icon mr-2 rounded"></div>
                    <div className="title color-111">会议纪要</div>
                </div>
                <div className="card d-flex align-items-center p-3 rounded ml-2 fadeInUp" style={trail[4]}>
                    <div className="icon mr-2 rounded"></div>
                    <div className="title color-111">我的日程</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile
