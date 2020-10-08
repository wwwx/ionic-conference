import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

type AppHeaderProps = {
    title?: string;
    showBackButton?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title = '', showBackButton = true, children }) => {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                {showBackButton && <IonButtons slot="start">
                    <IonBackButton mode="md" defaultHref="/"></IonBackButton>
                </IonButtons>}
                <IonTitle className="text-center">{title || children}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default AppHeader
