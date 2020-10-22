import classnames from 'classnames'
import useSWR from 'swr'
import React, { useCallback, useState } from 'react'
import { IonButton, IonContent, IonPage } from '@ionic/react'
import { useParams } from 'react-router'

import AppHeader from '../../components/AppHeader'
import AppInput from '../../components/AppInput'
import useInput from '../../hooks/useInput'
import useSelect from '../../hooks/useSelect'
import fetcher from '../../service/base-service'
import AppMemberSelect from './components/AppMemberSelect'
import AppSelect, { SelectOption } from '../../components/AppSelect'
import { RemindOptions } from '../options'
import { ConferenceDetailRouteParams } from '../../service/reservation.model'
import { MemberItem } from '../../service/mine.model'
import { ErrorMessage, Loading } from '../../components/Common'

type MainFormProps = {
  title: string;
  content: string;
  files: string;
  recorder: string;
  members: MemberItem[];
  remind: string;
};
const MainForm: React.FC<MainFormProps> = ({ ...formData }) => {
  // console.log(formData);
  const [agree, setAgree] = useState(false);

  let participantsOptions: SelectOption[] = [];

  if (formData) {
    participantsOptions = formData.members.map((item: any) => ({ label: `${item.name} ${item.dept}`, value: item.id.toString() }));
  }

  const title = useInput({
    label: '会议主题',
    required: true,
    initValue: formData.title,
    characterSize: 20,
  });

  const content = useInput({
    label: '会议内容',
    initValue: formData.content,
    type: 'textarea',
    characterSize: 500,
  });

  const files = useInput({
    label: '会议文件',
    type: 'file',
    initValue: formData.files,
  });

  const members = useInput({
    label: '参会人员',
    initValue: formData.members as any,
    required: true,
  });

  const recorder = useSelect({
    label: '记录员',
    initValue: formData.recorder,
    required: true,
    data: participantsOptions,
  });

  const remind = useSelect({
    label: '会议提醒',
    initValue: formData.remind,
    data: RemindOptions,
  });

  function handleAgreeChange(e: any) {
    console.log(e.currentTarget.checked);
    setAgree(e.currentTarget.checked);
  }

  function isDisabledButton() {
    return !title.value || !recorder.value || !agree;
  }

  const submit = useCallback(() => {
    console.table([
      {
        title: title.value,
        content: content.value,
        recorder: recorder.value,
        remind: remind.value,
      },
    ]);
  }, [title, content, recorder, remind]);
  return (
    <div className="main">
      <div className="app-card">
        <AppInput {...title} />
        <AppInput {...content} />
        <AppInput {...files} />
      </div>
      <div className="app-card">
        <AppMemberSelect {...members} />
        <AppSelect {...recorder} />
        <AppSelect {...remind} />
      </div>
      <div className="checkbox mx-3">
        <label>
          <input className="mr-2" type="checkbox" checked={agree} onChange={handleAgreeChange} />
          同时发送邮件邀请
        </label>
      </div>

      <IonButton className="app-button mt-5 mb-5 mx-3" expand="block" disabled={isDisabledButton()} onClick={submit}>
        完成
      </IonButton>
    </div>
  );
};

const CreateForm: React.FC = () => {
  const formData = {
    title: '',
    content: '',
    files: '',
    members: [],
    recorder: '',
    remind: RemindOptions[0].value,
  };
  return <MainForm {...formData} />;
};

const EditForm: React.FC = () => {
  const { error, data } = useSWR('/api/conference-detail', fetcher.get);
  if (error) return <ErrorMessage />;
  if (!data) return <Loading />;

  const formData = data.data;

  return <MainForm {...formData} />;
};

const ConferenceDetail: React.FC = () => {
  const room = '共赢会议室';
  const { type } = useParams<ConferenceDetailRouteParams>();
  // console.log(type);
  return (
    <IonPage className={classnames('Reservation')}>
      <AppHeader>{room}</AppHeader>
      <IonContent className="ConferenceDetail">
        <div
          className="bgwrap"
          style={{
            backgroundImage: `url(${require('../room/images/room1.jpg')})`,
          }}
        >
          <div className="bg"></div>
        </div>
        {type === 'edit' ? <EditForm /> : <CreateForm />}
      </IonContent>
    </IonPage>
  );
};

export default ConferenceDetail;
