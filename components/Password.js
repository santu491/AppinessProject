import React from 'react'
import { View, TextInput } from 'react-native'
import commonStyles from '../Styles/CommonStyles'

const Password = (props) => {
    return (
        <View>
            <TextInput style={commonStyles.inputStyle}
                onChangeText={props.enterPassword}
                value={props.password}
                placeholder="Enter Password"
                secureTextEntry />
        </View>
    )
}

export default Password