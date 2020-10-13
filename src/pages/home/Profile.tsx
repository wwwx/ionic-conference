import React, { useMemo } from 'react'
import { IonCard, IonCardContent, IonAvatar, IonText, IonButton, IonSelect, IonSelectOption } from '@ionic/react'
import useSWR from 'swr'
import fetcher from '../../service/base-service'
import { Link } from 'react-router-dom';


function ProfileContent() {
    
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

    const {data, error} = useSWR('/api/profile', fetcher.get)
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const profile = data.data

    return (
        <>
        <div className="block1 d-flex align-items-center justify-content-between">
            <IonAvatar className="fadeInUp" style={trail[0]}>
                <img src={profile.avatar} alt="" />
            </IonAvatar>
            <div className="ml-3 flex-grow-1 fadeInUp" style={trail[1]}>
                <h3 className="font-18 font-weight-bold color-111">{profile.staff}</h3>
                <p className="mt-1 mb-0 color-999 font-12">{profile.department}</p>
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
            <Link 
                className="fadeInUp" 
                style={trail[3]}
                to="/mine/invite"
            >
                <IonText 
                    color="primary" 
                    className="font-21"
                >
                    {profile.inviteNum}
                </IonText>
                <p className="color-666 font-12 mt-1">
                会议邀请
                </p>
            </Link>

            <Link 
                className="fadeInUp" 
                style={trail[4]}
                to="/"
            >
                <IonText 
                    color="primary" 
                    className="font-21"
                >
                    {profile.summaryDraftNum}
                </IonText>
                <p className="color-666 font-12 mt-1">
                待发布纪要
                </p>
            </Link>

            <Link 
                className="fadeInUp" 
                style={trail[5]}
                to="/"
            >
                <IonText 
                    color="primary" 
                    className="font-21"
                >
                    {profile.messageNum}
                </IonText>
                <p className="color-666 font-12 mt-1">
                最新消息
                </p>
            </Link>

        </div>
        </>
    )
}

const Profile: React.FC = () => {


    return (
        <IonCard className="Profile mt-5">
            <IonCardContent>
                <ProfileContent />
            </IonCardContent>
        </IonCard>
    )
}

export default Profile
