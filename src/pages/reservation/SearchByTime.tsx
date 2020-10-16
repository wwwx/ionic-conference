import React, { useCallback, useState } from 'react'
import { IonButton, IonSelect, IonSelectOption } from '@ionic/react'
import { useHistory } from 'react-router'

import TimePicker from '../../components/TimePicker'
import { DatePicker } from '../../components/Calendar'

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
      <div className="app-list">
        <div className="app-item border-bottom">
          <label className="required">会议日期</label>
          <DatePicker value={date} onChange={handleDateClick} />
        </div>
        <div className="app-item border-bottom">
          <label className="required">会议时间</label>
          <TimePicker {...{ time, setTime }} />
        </div>
      </div>

      <div className="app-list">
        <div className="app-item border-bottom">
          <label>会议地点</label>
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
          <label>会议楼层</label>
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
      </div>

      <div className="app-list">
        <div className="app-item border-bottom">
          <label>会议设备</label>
          <span>查看详情</span>
        </div>
      </div>

      <IonButton
        className="app-button mt-5 mb-4"
        expand="block"
        onClick={handleNextClick}
      >
        查看可用会议室
      </IonButton>
    </div>
  );
};

export default SearchByTime;
