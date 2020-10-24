import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledWrap = styled.div`
  text-align: center;
  color: var(--ion-color-primary);
  font-size: 14px;
`;

const BackHome: React.FC = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return <StyledWrap onClick={handleClick}>返回首页</StyledWrap>;
};

export default BackHome;
