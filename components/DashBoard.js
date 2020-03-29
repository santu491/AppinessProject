
import React, { Component } from 'react';
import { FlatList, View, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux'
import { getEmployeeData } from '../Redux/ActionCreator'

import commonStyles from './CommonStyles'

class DashBoard extends Component {
    constructor(props) {
        super(props);

    }
    renderDashBoard = ({ item }) => {
        return (
            <View style={commonStyles.employeeView}>
                <Text style={commonStyles.employeeName}>{item.name.toUpperCase()}</Text>
                <Text>{item.age}</Text>
                <Text>{item.gender}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phoneNo}</Text>
            </View>
        )

    }
    componentDidMount() {
        this.props.getEmployeeData()

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }


    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
         return true;
    }

    render() {

        return (
            <View >
                <View style={commonStyles.dashBoardView}>
                    <Text style={commonStyles.dashBoardtextStyle}>Dash Board</Text>
                </View>

                <FlatList
                    data={this.props.employeeData.user}
                    renderItem={this.renderDashBoard}
                    keyExtractor={(item, index) => item.id}
                />

            </View>
        )
    }
}



const mapStateToProps = (state) => ({
    employeeData: state.dashBoard.employeeData
})

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeData: () => dispatch(getEmployeeData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)