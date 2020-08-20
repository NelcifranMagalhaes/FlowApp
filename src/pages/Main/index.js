import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, Form, Input, SubmitButton, List} from './styles';
import api from '../../services/api';
import Analysis from '../../components/Analysis';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {apiKey: '', apiData: [], loading: false};
  }

  async componentDidMount() {
    // Get in smarthphone database item
    const apiData = await AsyncStorage.getItem('apiData');
    if (apiData) {
      this.setState({apiData: JSON.parse(apiData)});
    }
  }

  // Set value in smarthphone database
  async componentDidUpdate(_, prevState) {
    const {apiData} = this.state;
    if (prevState.apiData !== apiData) {
      AsyncStorage.setItem('apiData', JSON.stringify(apiData));
    }
  }

  handleAddUser = async () => {
    const {apiKey} = this.state;

    this.setState({loading: true});

    const response = await api.get(`/api/v2/projects`, {
      headers: {'x-api-key': apiKey},
    });

    const {data} = response;

    this.setState({
      apiData: data,
      apiKey: '',
      loading: false,
    });

    // hide keyboar after send request
    Keyboard.dismiss();
  };

  render() {
    const {apiData, apiKey, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar API KEY"
            value={apiKey}
            onChangeText={(text) => this.setState({apiKey: text})}
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
          data={apiData}
          keyExtractor={(item) => String(item.pid)}
          renderItem={({item}) => <Analysis data={item} />}
        />
      </Container>
    );
  }
}
