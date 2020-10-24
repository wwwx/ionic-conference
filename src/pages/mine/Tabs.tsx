import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

const TabsStyled = styled(Tabs)`
  .react-tabs__tab-list {
    margin: 0.625rem 1rem 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  .react-tabs__tab {
    flex: 1 1 0%;
    display: inline-block;
    background: #fff;
    color: #666666;
    border-radius: 4px;
    position: relative;
    list-style: none;
    padding: 8px 14px;
    cursor: pointer;
    text-align: center;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 200%;
      height: 200%;

      border-radius: 8px;
      border-width: 1px;
      border-style: solid;
      border-color: white;

      transform: scale(0.5);
      transform-origin: right top;
    }
  }

  .react-tabs__tab--selected {
    color: var(--ion-color-primary);

    &::before {
      border-color: var(--ion-color-primary);
    }
  }
`;

export { Tab, TabList, TabPanel, TabsStyled as Tabs };
