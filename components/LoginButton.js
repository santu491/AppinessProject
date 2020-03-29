import React from 'react'
import {  Text, TouchableHighlight } from 'react-native'
import commonStyles from '../Styles/CommonStyles'

// Login button Component is being created
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