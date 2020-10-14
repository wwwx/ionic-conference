import React from 'react';
import { useHistory } from 'react-router';
import './BackHome.scss';

const BackHome: React.FC = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <div className="back-home" onClick={handleClick}>
      返回首页
    </div>
  );
};

export default BackHome;
