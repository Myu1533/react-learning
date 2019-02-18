import { observable, action } from 'mobx';
import axios from 'axios';
export default class LoginModel {
  @observable
  username = '';
  @observable
  password = '';

  @action
  loginStyle() {
    const data = {
      username: this.username,
      password: this.password
    };

    axios({
      url
    });
  }
}
