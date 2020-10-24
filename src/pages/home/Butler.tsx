import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppBlockTitle from '../../components/AppBlockTitle';

const ButlerLink = styled(Link)`
  position: relative;
  border-radius: 8px;
  background-color: white;
  padding: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: white;
  flex: 0 0 calc(50% - 0.25rem);
  display: flex;
  align-items: center;

  &:nth-child(even) {
    margin-right: 0;
  }

  .title {
    color: #111111;
    line-height: 1;
    font-size: 14px;
    margin-left: 0.5rem;
  }

  .icon {
    display: inline-block;
    width: 28px;
    height: 28px;
    background-image: url('/images/icon_scheduled@2x.png');
    background-size: cover;
  }
`;

const Butler: React.FC = () => {
  const ButlerList = [
    { title: '会议预定', link: '/reservation' },
    { title: '我的会议', link: '/mine/conference' },
    { title: '会议纪要', link: '/record/list' },
    { title: '我的日程', link: '/my-schedule' },
  ];

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
      <AppBlockTitle className="fadeInUp" style={trail[0]}>
        会议管家
      </AppBlockTitle>
      <div className="d-flex flex-wrap mx-3">
        {ButlerList.map((item, i) => {
          return (
            <ButlerLink key={i} to={item.link} className="fadeInUp" style={trail[i + 1]}>
              <div className="icon"></div>
              <div className="title">{item.title}</div>
            </ButlerLink>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Butler;
