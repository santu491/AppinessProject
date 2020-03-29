import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import  commonStyles  from '../Styles/CommonStyles'

// UserName Component is being created.
const UserName = (props) => {
    return (
        <View>
            <TextInput
                style={commonStyles.inputStyle}
                value={props.userName}
                onChangeText={props.enterUserName}
                placeholder="Enter User Name"
            />
        </View>
    )
}

export default UserName