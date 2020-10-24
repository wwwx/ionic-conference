import { IonSelect, IonSelectOption } from '@ionic/react';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import AppButton from '../../components/AppButton';
import AppList from '../../components/AppList';
import AppListItem from '../../components/AppListItem';
import { DatePicker } from '../../components/Calendar';
import TimePicker from '../../components/TimePicker';

const SearchByTime: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [floor, setFloor] = useState<string>('');
  const [time, setTime] = useState<number[]>([]);
  const [date, setDate] = useState(Date.now());
  const history = useHistory();

  function handleNextClick() {
    history.push('/available-room');
  }

  const handleDateClick = useCallback((value: number) => {
    // console.log(value)
    setDate(value);
  }, []);

  return (
    <div className="mx-3">
      <AppList>
        <AppListItem label="会议日期" required>
          <DatePicker value={date} onChange={handleDateClick} />
        </AppListItem>
        <AppListItem label="会议时间" required>
          <TimePicker {...{ time, setTime }} />
        </AppListItem>
      </AppList>
      <AppList>
        <AppListItem label="会议地点">
          <IonSelect interface="action-sheet" value={address} onIonChange={(e) => setAddress(e.detail.value)} placeholder="请选择">
            <IonSelectOption value="1">由由世纪广场1号楼</IonSelectOption>
            <IonSelectOption value="2">由由世纪广场2号楼</IonSelectOption>
          </IonSelect>
        </AppListItem>
        <AppListItem label="会议楼层">
          <IonSelect interface="action-sheet" value={floor} onIonChange={(e) => setFloor(e.detail.value)} placeholder="请选择">
            <IonSelectOption value="1">26楼</IonSelectOption>
            <IonSelectOption value="2">22楼</IonSelectOption>
            <IonSelectOption value="3">21楼</IonSelectOption>
            <IonSelectOption value="4">19楼</IonSelectOption>
          </IonSelect>
        </AppListItem>
      </AppList>
      <AppList>
        <AppListItem label="会议设备">
          <div style={{ flex: '0 0 112px' }}>
            <input type="text" readOnly value="查看详情" />
          </div>
        </AppListItem>
      </AppList>
      <AppButton onClick={handleNextClick}>查看可用会议室</AppButton>
    </div>
  );
};

export default SearchByTime;
