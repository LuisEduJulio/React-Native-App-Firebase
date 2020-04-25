import React, {Component} from 'react';
import { View } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';

export default class Drawer extends Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Provider>
        <View>
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <Button onPress={this._openMenu} icon='xmpp' />
            }
          >
            <Menu.Item onPress={() => {}} title="Usuários" />
            <Menu.Item onPress={() => {}} title="Configurações" />
            <Menu.Item onPress={() => {}} title="Sair" />
          </Menu>
        </View>
      </Provider>
    );
  }
}