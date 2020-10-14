import { IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useCallback, useState } from 'react';
import { DatePicker } from '../../components/Calendar';
import TimePicker from '../../components/TimePicker';

const SearchByAddress: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [floor, setFloor] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [time, setTime] = useState<number[]>([]);
  const [date, setDate] = useState<number>(Date.now());

  const handDateClick = useCallback((value: number) => {
    setDate(value);
  }, []);

  return (
    <div className="mx-3">
      <div className="app-list">
        <div className="app-item border-bottom">
          <label className="required">会议地点</label>
          <IonSelect
            interface="action-sheet"
            value={address}
            onIonChange={(e) => setAddress(e.detail.value)}
            placeholder="请选择"
          >
            <IonSelectOption value="1">由由世纪广场1号楼</IonSelectOption>
            <IonSelectOption value="2">由由世纪广场2号楼</IonSelectOption>
          </IonSelect>
        </div>
        <div className="app-item border-bottom">
          <label className="required">会议楼层</label>
          <IonSelect
            interface="action-sheet"
            value={floor}
            onIonChange={(e) => setFloor(e.detail.value)}
            placeholder="请选择"
          >
            <IonSelectOption value="1">26楼</IonSelectOption>
            <IonSelectOption value="2">22楼</IonSelectOption>
            <IonSelectOption value="3">21楼</IonSelectOption>
            <IonSelectOption value="4">19楼</IonSelectOption>
          </IonSelect>
        </div>
        <div className="app-item border-bottom">
          <label className="required">会议室名称</label>
          <IonSelect
            interface="action-sheet"
            value={room}
            onIonChange={(e) => setRoom(e.detail.value)}
            placeholder="请选择"
          >
            <IonSelectOption value="1">同心</IonSelectOption>
            <IonSelectOption value="2">共赢</IonSelectOption>
            <IonSelectOption value="3">华尔街</IonSelectOption>
          </IonSelect>
        </div>
      </div>

      <div className="app-list">
        <div className="app-item border-bottom">
          <label>会议日期</label>
          <DatePicker value={date} onChange={handDateClick} />
        </div>
        <div className="app-item border-bottom">
          <label>会议时间</label>
          <TimePicker {...{ time, setTime }} />
        </div>
      </div>

      <IonButton className="app-button mt-5 mb-4" expand="block">
        下一步
      </IonButton>
    </div>
  );
};

export default SearchByAddress;
