import React, { Component } from 'react';
import {  SafeAreaView, Alert,Keyboard } from 'react-native';
import { connect } from 'react-redux'
import { loginValidation } from '../Redux/ActionCreator'
import UserName from './UserName'
import Password from './Password'
import LoginButton from './LoginButton'
import commonStyles from '../Styles/CommonStyles'

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    enterUserName = (text) => {
        this.setState({
            userName: text
        })
    }
    enterPassword = (text) => {
        this.setState({
            password: text
        })
    }

    submitLogin = () => {
        Keyboard.dismiss()
        this.validation()
    }

    validation = async () => {
        if (this.state.userName === "") {
            Alert.alert("Enter User Name")
        }
        else if (this.state.password === "") {
            Alert.alert("Enter Password")
        }
        else {
            let loginData = {
                userName: this.state.userName,
                password: this.state.password
            }
            await this.props.loginValidation(loginData)
            if (this.props.isLoginSuccess) {
                Alert.alert(
                    'Successfully Loggedin..!!',
                    null,
                    [
                        {text:'OK',onPress:()=>this.props.navigation.navigate("DashBoard")}
                    ],
                )
                
            }
            else {
                Alert.alert("Please enter valid credientials.")
            }
        }

    }

    render() {
        return (
            <SafeAreaView style={commonStyles.containerBody} >
                    <UserName
                        userName={this.state.userName}
                        enterUserName={this.enterUserName}
                    />
                    <Password
                        password={this.state.password}
                        enterPassword={this.enterPassword}
                    />
                    <LoginButton
                        submitLogin={this.submitLogin}
                    />
            </SafeAreaView>
        );
    }

}



const mapStateToProps = (state) => {
    return {
        isLoginSuccess: state.login.isLoginSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginValidation: (logindata) => dispatch(loginValidation(logindata))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)