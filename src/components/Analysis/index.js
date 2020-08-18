import React from 'react';

import {
  Container,
  Info,
  Id,
  Name,
  Type,
  Status,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default function Analysis({data}) {
  return (
    <Container colorStatus={data.project_status}>
      <Id>{data.pid}</Id>
      <Info>
        <Name>{data.label}</Name>
        <Type>{data.project_type}</Type>
        <Status>{data.project_status}</Status>
        <ProfileButton onPress={() => {}}>
          <ProfileButtonText>ver detalhes</ProfileButtonText>
        </ProfileButton>
      </Info>
    </Container>
  );
}
