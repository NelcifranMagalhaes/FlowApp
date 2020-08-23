import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Background from '../../components/Background';
import {Container, Analysis, TextAnalysis, Label} from './styles';

export default function Project({route}) {
  const data = route.params;
  return (
    <Background>
      <ScrollView>
        <Container>
          <Analysis>
            <TextAnalysis>
              <Label>ID:</Label> {data.pid}
            </TextAnalysis>
          </Analysis>
          <Analysis>
            <TextAnalysis>
              <Label>Nome:</Label> {data.label}
            </TextAnalysis>
          </Analysis>
          <Analysis>
            <TextAnalysis>
              <Label>Tipo:</Label> {data.project_type}
            </TextAnalysis>
          </Analysis>
          <Analysis>
            <TextAnalysis>
              <Label>Status:</Label> {data.project_status}
            </TextAnalysis>
          </Analysis>
          <Analysis>
            <TextAnalysis>
              <Label>Vulnerabilidades:</Label> {data.vulnerabilities_count}
            </TextAnalysis>
          </Analysis>
          <Analysis>
            <TextAnalysis>{data.description}</TextAnalysis>
          </Analysis>
        </Container>
      </ScrollView>
    </Background>
  );
}

Project.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};
