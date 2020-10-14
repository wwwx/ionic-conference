import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const trail = useMemo(() => {
    const styles: { [key: string]: string }[] = [];
    [0, 0, 0, 0, 0].map((_: number, i: number) => {
      styles.push({
        animationDelay: `${i * 200}ms`,
      });
      return null;
    });
    return styles;
  }, []);

  return (
    <React.Fragment>
      <div className="app-block-title fadeInUp" style={trail[0]}>
        <span className="color-111 font-weight-bold">会议管家</span>
      </div>
      <div className="Butler">
        <div className=" d-flex flex-nowrap mx-3">
          <Link
            to="/reservation"
            className="app-card mb-2 fadeInUp"
            style={trail[1]}
          >
            <div className="icon mr-2 rounded"></div>
            <div className="title color-111">会议预定</div>
          </Link>
          <Link
            to="/mine/conference"
            className="app-card mb-2 ml-2 fadeInUp"
            style={trail[2]}
          >
            <div className="icon mr-2 rounded"></div>
            <div className="title color-111">我的会议</div>
          </Link>
        </div>
        <div className=" d-flex flex-nowrap mx-3">
          <Link to="/" className="app-card fadeInUp" style={trail[3]}>
            <div className="icon mr-2 rounded"></div>
            <div className="title color-111">会议纪要</div>
          </Link>
          <Link
            to="/my-schedule"
            className="app-card ml-2 fadeInUp"
            style={trail[4]}
          >
            <div className="icon mr-2 rounded"></div>
            <div className="title color-111">我的日程</div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
