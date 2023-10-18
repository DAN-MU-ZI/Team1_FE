import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from 'apis/userInfo';
import PageContainer from 'components/@commons/PageContainer';
import AdminNoGroupSection from './NoGroupSection';
import AdminNoMemberSection from './NoMemberSection';
import AdminScheduleSection from './ScheduleSection';

const AdminMainPage = (): JSX.Element => {
  const { data: membersData } = useQuery(['getMyInfo'], getMyInfo, { suspense: true });
  const hasGroup = membersData?.data.groupName !== null;
  const hasMember = membersData?.data.members.length > 1;

  return (
    <PageContainer withoutBottonBar={!hasGroup || !hasMember}>
      {!hasGroup && <AdminNoGroupSection />}
      {hasGroup && !hasMember && <AdminNoMemberSection />}
      {hasGroup && hasMember && <AdminScheduleSection members={membersData?.data.members} />}
    </PageContainer>
  );
};

export default AdminMainPage;
