import React, {Component} from 'react';
import {Keybord, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Id,
  Name,
  Type,
  Status,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {newUser: '', users: [], loading: false,};
  }

  handleAddUser = async () => {
    const {users, newUser} = this.state;

    this.setState({loading: true});

    const response = await api.get(`/api/v2/projects`, {
      headers: {'x-api-key': newUser},
    });

    console.log(response.data);
    
    const data = {
      id: response.data.pid,
      name: response.data.label,
      type: response.data.project_type,
      status: response.data.project_status,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
      loading: false,
    });
  };

  render() {
    const {users, newUser, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar API KEY"
            value={newUser}
            onChangeText={(text) => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
        <List
          data={users}
          keyExtractor={(user) => user.id}
          renderItem={({item}) => (
            <User>
              <Id>{item.id}</Id>
              <Name>{item.name}</Name>
              <Type>{item.type}</Type>
              <Status>{item.status}</Status>
              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>ver detalhes</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
