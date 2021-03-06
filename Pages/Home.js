import React from 'react'
import { View, Text , Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scan from './scan';
import Input from './input';
import Upload from './upload';


export default function Home({ navigation }) {
    return (
        <View>
            <Text>home</Text>
            <Button title="scan" onPress={() => navigation.navigate('Scan')} />
            <Button title="Input" onPress={() => navigation.navigate('Input')} />
            <Button title="Upload" onPress={() => navigation.navigate('Upload')} />
        </View>
    )
}
