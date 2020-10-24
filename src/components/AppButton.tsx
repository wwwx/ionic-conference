import { IonButton } from '@ionic/react';
import styled from 'styled-components';

const AppButton = styled(IonButton).attrs(() => ({
  expand: 'block',
}))`
  --border-radius: 24px;
  height: 3rem;
  font-size: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export default AppButton;
