import React from 'react';
import PropTypes from 'prop-types';
import {Container, Analysis, TextAnalysis, Label} from './styles';

export default function Project({route}) {
  const data = route.params;
  return (
    <Container>
      <Analysis>
        <TextAnalysis>
          <Label>ID:</Label> {data.pid}
        </TextAnalysis>
        <TextAnalysis>
          <Label>Nome:</Label> {data.label}
        </TextAnalysis>
        <TextAnalysis>
          <Label>Tipo:</Label> {data.project_type}
        </TextAnalysis>
        <TextAnalysis>
          <Label>Status:</Label> {data.project_status}
        </TextAnalysis>
        <TextAnalysis>
          <Label>Vulnerabilidades:</Label> {data.vulnerabilities_count}
        </TextAnalysis>
      </Analysis>
      <Analysis>
        <TextAnalysis>{data.description}</TextAnalysis>
      </Analysis>
    </Container>
  );
}

Project.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};
