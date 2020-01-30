import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonStyle from '../../../common/CommonStyle'

export class Screen1 extends Component {
    
    render() {
        return (
            <View style={CommonStyle.container_center}>
                <Text> Screen1 </Text>
            </View>
        )
    }
}

export default Screen1
