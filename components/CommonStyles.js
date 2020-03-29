
import { StyleSheet, Platform, StatusBar } from 'react-native'

const commonStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerBody: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#4e71ba',

    },
    inputStyle: {
        height: 40,
        backgroundColor: "#fff",
        opacity: 0.8,
        width: 300,
        borderRadius: 20,
        marginTop: 15,
        paddingLeft: 20

    },
    login: {
        marginTop: 15,
        height: 40,
        width: 300,
        backgroundColor: "#39569c",
        borderRadius: 20,
        justifyContent: "center",

    },
    loginTextStyle: {
        fontSize: 17,
        color: "#fff",
        textAlign: "center",
    },
    dashBoardView: {
        height: 50,
        backgroundColor: "#f4511e",
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "center"
    },
    dashBoardtextStyle: {
        color: "#fff",
        fontSize: 21
    },
    employeeView: {
        backgroundColor: "white",
        margin: 8,
        borderRadius: 5,
        padding: 10
    },
    employeeName:{ 
        fontSize: 15, 
        fontWeight: "700"
     }
})

export default commonStyles