import React, { useMemo } from 'react'
import { IonCard, IonCardContent, IonAvatar, IonText, IonButton, IonSelect, IonSelectOption } from '@ionic/react'

const Profile: React.FC = () => {

    const trail = useMemo(() => {
        const styles: { [key: string]: string }[] = [];
        [0, 0, 0, 0, 0, 0].map((_: number, i: number) => {
            styles.push({
                animationDelay: `${i * 100}ms`
            })
            return null;
        })

        return styles;
    }, []);

    return (
        <IonCard className="profile mt-5">
            <IonCardContent>
                <div className="block1 d-flex align-items-center justify-content-between">
                    <IonAvatar className="fadeInUp" style={trail[0]}>
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="avatar" />
                    </IonAvatar>
                    <div className="ml-3 flex-grow-1 fadeInUp" style={trail[1]}>
                        <h3 className="font-18 font-weight-bold color-111">黄小明</h3>
                        <p className="mt-1 mb-0 color-999 font-12">品牌与市场发展中心</p>
                    </div>
                    
                    <IonButton className="status-select-button fadeInUp" style={trail[2]} shape="round" fill="outline" size="small">
                        <IonSelect
                        // interfaceOptions={customActionSheetOptions}
                        interface="popover"
                        placeholder="Select One"
                        // onIonChange={e => setColor(e.detail.value)}
                        // value={color}
                        >
                            <IonSelectOption value="red">Red</IonSelectOption>
                            <IonSelectOption value="purple">Purple</IonSelectOption>
                            <IonSelectOption value="yellow">Yellow</IonSelectOption>
                            <IonSelectOption value="orange">Orange</IonSelectOption>
                            <IonSelectOption value="green">Green</IonSelectOption>
                        </IonSelect>
                    </IonButton>
                    
                </div>
                <div className="block2 d-flex justify-content-between text-center px-2 mt-4">
                    <div className="fadeInUp" style={trail[3]}>
                        <IonText color="primary" className="font-21">23</IonText>
                        <p className="color-666 font-12 mt-1">会议邀请</p>
                    </div>
                    <div className="fadeInUp" style={trail[4]}>
                        <IonText color="primary" className="font-20">23</IonText>
                        <p className="color-666 font-12 mt-1">会议邀请</p>
                    </div>
                    <div className="fadeInUp" style={trail[5]}>
                        <IonText color="primary" className="font-20">23</IonText>
                        <p className="color-666 font-12 mt-1">会议邀请</p>
                    </div>
                </div>
            </IonCardContent>
        </IonCard>
    )
}

export default Profile
