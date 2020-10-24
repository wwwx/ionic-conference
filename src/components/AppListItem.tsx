import classnames from 'classnames';
import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  padding: 2px 0px;
  padding-right: 10px;
  margin-right: -4px;
  height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url('/images/eglass-arrow-right.png');
  background-position: right center;
  background-size: 14px;
  background-repeat: no-repeat;
  line-height: 1;
  > label {
    color: #666666;
  }
  input {
    color: #333;
    border: 0;
    text-align: right;
    outline: none;
    padding: 10px 10px 10px 20px;
    line-height: 1;
    width: 100%;
    max-width: 100%;
  }
  input::placeholder {
    color: var(--ion-color-placeholder);
  }
`;

type AppListItemProps = {
  children?: JSX.Element;
  label?: string;
  required?: boolean | string;
};

const AppListItem: React.FC<AppListItemProps> = ({ children, label, required }) => {
  return (
    <StyledWrap className="border-bottom">
      <label className={classnames(required && 'required')}>{label}</label>
      {children}
    </StyledWrap>
  );
};

export default AppListItem;
