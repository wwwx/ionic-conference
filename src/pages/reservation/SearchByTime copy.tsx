import React, { useState } from 'react'
import { IonSelect, IonSelectOption } from '@ionic/react'
import { pickerController } from '@ionic/core'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const SearchByTime: React.FC = () => {

    const [gender, setGender] = useState<string>('female')

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



      const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            container: {
            display: 'flex',
            flexWrap: 'wrap',
            },
            textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 100,
            },
        }),
        );

        const classes = useStyles();

    return (
        <div className="mx-3">
            <div className="rounded bg-white p-3 mt-2">
                <div className="item w-100 pb-3 font-14 border-bottom d-flex justify-content-between">
                    <label className="color-666">会议地点</label>
                    {/* <span className="color-333">2020-09-11</span> */}
                    <IonSelect interface="action-sheet" value={gender} onIonChange={(e) => setGender(e.detail.value)}>
                        <IonSelectOption value="female">Female</IonSelectOption>
                        <IonSelectOption value="male">Male</IonSelectOption>
                    </IonSelect>
                </div>
                <div className="item w-100 py-3 font-14 border-bottom d-flex justify-content-between">
                    <label className="color-666">会议时间</label>
                    <span className="color-333" onClick={() => openPicker()}>2020-09-11</span>
                </div>
                <div className="item w-100 py-3 font-14 border-bottom d-flex justify-content-between">
                    <label className="color-666">会议时间</label>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default SearchByTime