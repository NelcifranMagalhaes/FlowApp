import React from 'react';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import Background from '../Background';

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
    <Background>
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
    </Background>
  );
}

Analysis.defaultProps = {
  data: {},
};

Analysis.propTypes = {
  data: PropTypes.shape({
    pid: PropTypes.string.isRequired,
    label: PropTypes.string,
    project_type: PropTypes.string,
    project_status: PropTypes.string,
  }),
};
