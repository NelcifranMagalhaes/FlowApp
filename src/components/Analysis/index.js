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

function handleNavigate(analisys) {
  const navigation = useNavigation();
  navigation.navigate('Details', analisys);
}

export default function Analysis({data}) {
  return (
    <Container colorStatus={data.project_status}>
      <Id>{data.pid}</Id>
      <Info>
        <Name>{data.label}</Name>
        <Type>{data.project_type}</Type>
        <Status>{data.project_status}</Status>
        <ProfileButton onPress={() => handleNavigate(data)}>
          <ProfileButtonText>ver detalhes</ProfileButtonText>
        </ProfileButton>
      </Info>
    </Container>
  );
}

Analysis.propTypes = {
  data: PropTypes.string.isRequired,
};
