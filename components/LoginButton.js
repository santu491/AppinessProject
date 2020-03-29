import React from 'react'
import {  Text, TouchableHighlight } from 'react-native'
import commonStyles from './CommonStyles'

const LoginButton = (props) => {
    return (
          <TouchableHighlight
            onPress={props.submitLogin}
            style={commonStyles.login}
          >
            <Text style={commonStyles.loginTextStyle}>Login</Text>
          </TouchableHighlight>
    )
}

export default LoginButton