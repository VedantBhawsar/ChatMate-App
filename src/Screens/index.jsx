import React, { useState } from 'react'
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import Signin from '../Screens/Log In'
import SignUp from '../Screens/Sign Up'
import Home from '../Screens/Home'

const Index = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View
            style={{
                height: '100%'
            }}
        >
            {/* <Signin /> */}
            {/* <SignUp /> */}
            <Home />
        </View>
    )
}

export default Index