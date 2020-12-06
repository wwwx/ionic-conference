import styld from 'styled-components'
import useSWR from 'swr'
import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router'

import AppButton from '../../components/AppButton'
import AppCard from '../../components/AppCard'
import AppInput from '../../components/AppInput'
import useInput from '../../hooks/useInput'
import useSelect from '../../hooks/useSelect'
import fetcher from '../../service/base-service'
import AppMemberSelect from './components/AppMemberSelect'
import AppSelect, { SelectOption } from '../../components/AppSelect'
import { ErrorMessage, Loading } from '../../components/Common'
import { MemberItem } from '../../service/mine.model'
import { ConferenceDetailRouteParams } from '../../service/reservation.model'
import { RemindOptions } from '../options'

const MainWrap = styld.div`
  margin-top: 75px;
  .checkbox {
    color: #A7A7A7;
    font-size: 12px;
    input {
      vertical-align: middle;
    }
  }
`;

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
    <MainWrap>
      <AppCard>
        <AppInput {...title} />
        <AppInput {...content} />
        <AppInput {...files} />
      </AppCard>
      <AppCard>
        <AppMemberSelect {...members} />
        <AppSelect {...recorder} />
        <AppSelect {...remind} />
      </AppCard>
      <div className="mx-3">
        <div className="checkbox">
          <label>
            <input className="mr-2" type="checkbox" checked={agree} onChange={handleAgreeChange} />
            同时发送邮件邀请
          </label>
        </div>
        <AppButton disabled={isDisabledButton()} onClick={submit}>
          完成
        </AppButton>
      </div>
    </MainWrap>
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

const StyledBgWrap = styld.div`
  width: 100%;
  padding-top: 135px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${require('../room/images/room1.jpg')});

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0, rgba(242, 242, 242, 0) 50%, rgba(242, 242, 242, 1) 100%)
  }
`;

const BgWrap: React.FC = () => {
  return (
    <StyledBgWrap>
      <div className="bg"></div>
    </StyledBgWrap>
  );
};

const ConferenceDetail: React.FC = () => {
  // const room = '共赢会议室';
  const { type } = useParams<ConferenceDetailRouteParams>();
  // console.log(type);
  return (
    <>
      <BgWrap />
      {type === 'edit' ? <EditForm /> : <CreateForm />}
    </>
  );
};

export default ConferenceDetail;
