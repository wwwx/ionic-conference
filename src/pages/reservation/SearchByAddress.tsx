import { IonSelect, IonSelectOption } from '@ionic/react';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import AppButton from '../../components/AppButton';
import AppList from '../../components/AppList';
import AppListItem from '../../components/AppListItem';
import { DatePicker } from '../../components/Calendar';
import TimePicker from '../../components/TimePicker';

const SearchByAddress: React.FC = () => {
  const history = useHistory();
  const [address, setAddress] = useState<string>('');
  const [floor, setFloor] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [time, setTime] = useState<number[]>([]);
  const [date, setDate] = useState<number>(Date.now());

  const handDateClick = useCallback((value: number) => {
    setDate(value);
  }, []);

  function nextStep() {
    history.push('/conference-detail/create');
  }

  return (
    <div className="mx-3">
      <AppList>
        <AppListItem label="会议地点" required>
          <IonSelect interface="action-sheet" value={address} onIonChange={(e) => setAddress(e.detail.value)} placeholder="请选择">
            <IonSelectOption value="1">由由世纪广场1号楼</IonSelectOption>
            <IonSelectOption value="2">由由世纪广场2号楼</IonSelectOption>
          </IonSelect>
        </AppListItem>
        <AppListItem label="会议楼层" required>
          <IonSelect interface="action-sheet" value={floor} onIonChange={(e) => setFloor(e.detail.value)} placeholder="请选择">
            <IonSelectOption value="1">26楼</IonSelectOption>
            <IonSelectOption value="2">22楼</IonSelectOption>
            <IonSelectOption value="3">21楼</IonSelectOption>
            <IonSelectOption value="4">19楼</IonSelectOption>
          </IonSelect>
        </AppListItem>
        <AppListItem label="会议室名称" required>
          <IonSelect interface="action-sheet" value={room} onIonChange={(e) => setRoom(e.detail.value)} placeholder="请选择">
            <IonSelectOption value="1">同心</IonSelectOption>
            <IonSelectOption value="2">共赢</IonSelectOption>
            <IonSelectOption value="3">华尔街</IonSelectOption>
          </IonSelect>
        </AppListItem>
      </AppList>
      <AppList>
        <AppListItem label="会议日期">
          <DatePicker value={date} onChange={handDateClick} />
        </AppListItem>
        <AppListItem label="会议时间">
          <TimePicker {...{ time, setTime }} />
        </AppListItem>
      </AppList>

      <AppButton onClick={nextStep}>下一步</AppButton>
    </div>
  );
};

export default SearchByAddress;
