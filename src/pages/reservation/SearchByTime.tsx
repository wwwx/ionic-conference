import React, { useState } from 'react'
import { IonButton, IonSelect, IonSelectOption } from '@ionic/react'
import { pickerController } from '@ionic/core'
import TimePicker from '../../components/TimePicker'
import { useHistory } from 'react-router'



const SearchByTime: React.FC = () => {

    const [address, setAddress] = useState<string>('1')
    const [floor, setFloor] = useState<string>('1')
    const [time, setTime] = useState<number[]>([])
    const history = useHistory()

    const defaultColumnOptions = [
        [
          'Dog',
          'Cat',
          'Bird',
          'Lizard',
          'Chinchilla'
        ]
      ]

    async function openPicker(numColumns = 1, numOptions = 5, columnOptions = defaultColumnOptions) {
        const picker = await pickerController.create({
            columns: getColumns(numColumns, numOptions, columnOptions),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: (value) => {
                    console.log(`Got Value ${value}`);
                    }
                }
            ]
        })

        await picker.present()
    }

    function getColumns(numColumns: any, numOptions: any, columnOptions: any) {
        let columns = [];
        for (let i = 0; i < numColumns; i++) {
          columns.push({
            name: `col-${i}`,
            options: getColumnOptions(i, numOptions, columnOptions)
          });
        }
  
        return columns;
      }

      function getColumnOptions(columnIndex: any, numOptions: any, columnOptions: any) {
        let options = [];
        for (let i = 0; i < numOptions; i++) {
          options.push({
            text: columnOptions[columnIndex][i % numOptions],
            value: i
          })
        }
  
        return options;
      }

    function handleNextClick() {
        history.push('/available-room')
    }

    return (
        <div className="mx-3">
            <div className="app-list">
                <div className="app-item border-bottom">
                    <label className="required">会议日期</label>
                    <span onClick={() => openPicker()}>2020-09-11</span>
                </div>
                <div className="app-item border-bottom">
                    <label className="required">会议时间</label>
                    <TimePicker { ...{time, setTime} } />
                </div>
            </div>

            <div className="app-list">
                <div className="app-item border-bottom">
                    <label>会议地点</label>
                    <IonSelect  
                        interface="action-sheet" 
                        value={address} 
                        onIonChange={(e) => setAddress(e.detail.value)}
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
    )
}

export default SearchByTime