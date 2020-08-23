import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Analysis = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  flex: 1;
  align-items: center;
  margin: 0 20px 40px;
  margin-top: 10px;
`;

export const TextAnalysis = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: palevioletred;
`;
