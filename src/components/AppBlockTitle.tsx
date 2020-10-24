import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  margin: 1.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;

  .title {
    color: #111111;
    font-weight: bold;
  }

  .subtitle {
    color: #666666;
  }
`;

type AppBlockTitleProps = {
  subtitle?: string;
  children?: JSX.Element | string;
  className?: string;
  style?: React.CSSProperties;
};

const AppBlockTitle: React.FC<AppBlockTitleProps> = ({ children, subtitle = '', ...otherprops }) => {
  return (
    <StyledWrap {...otherprops}>
      {children && <span className="title">{children}</span>}
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </StyledWrap>
  );
};

export default AppBlockTitle;
