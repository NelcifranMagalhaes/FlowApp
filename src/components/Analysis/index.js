import React from 'react';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

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
  const navigation = useNavigation();
  return (
    <Container colorStatus={data.project_status}>
      <Info>
        <Id>{data.pid}</Id>
        <Name>{data.label}</Name>
        <Type>{data.project_type}</Type>
        <Status>{data.project_status}</Status>
        <ProfileButton onPress={() => navigation.navigate('Details', data)}>
          <ProfileButtonText>ver detalhes</ProfileButtonText>
        </ProfileButton>
      </Info>
    </Container>
  );
}

Analysis.propTypes = {
  data: PropTypes.string.isRequired,
};
