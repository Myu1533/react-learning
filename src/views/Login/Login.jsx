import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import loginStyle from 'assets/jss/material-dashboard-react/views/loginStyle.jsx';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      snackOpen: false
    };
  }

  handleLoginSubmit = history => {
    console.log(this.username);
    console.log(this.password);
    const data = {
      username: this.state.username,
      password: this.state.password,
      grant_type: 'password'
    };
    axios({
      url: '/api/auth/oauth/token',
      method: 'post',
      transformRequest: [
        function(data) {
          // Do whatever you want to transform the data
          let ret = '';
          for (const it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
          }
          return ret;
        }
      ],
      headers: {
        Authorization: 'Basic dnVlOnZ1ZQ==',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data
    })
      .then(response => {
        console.log(response);
        this.setState({ snackOpen: true });
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form>
                  <CardHeader color="primary" stats>
                    <h4>登录</h4>
                  </CardHeader>
                  <CardBody>
                    <TextField
                      id="username"
                      label="账号"
                      value={this.state.username}
                      onChange={this.handleInputChange('username')}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                    />
                    <TextField
                      id="password"
                      label="密码"
                      value={this.state.password}
                      onChange={this.handleInputChange('password')}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter>
                    withRouter((
                    {history}
                    )=>
                    {<Button onClick={this.handleLoginSubmit(history)}>登录</Button>})
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={this.state.snackOpen}
            autoHideDuration={5000}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">登录成功</span>}
          />
        </div>
      </Router>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginStyle)(Login);
