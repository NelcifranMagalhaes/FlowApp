import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

function selectColor(status) {
  switch (status) {
    case 'discontinued':
      return '#F0AAAA';
    case 'done':
      return '#D4ECBD';
    default:
      return '#fff';
  }
}

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: ${(props) => selectColor(props.colorStatus)}
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Id = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;
export const Status = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
export const Type = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: center;
  border-radius: 4px;
  background: #DFB42B;
  justify-content: center;
  align-items: center;
  height: 36px;
`;
export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  align-items: center;
`;
export const Info = styled.View`
  align-items: center;
`;
