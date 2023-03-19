import React from 'react'
import { ScrollView, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'
import Chat from '../../Componends/Chat'
import NavBar from '../../Componends/NavBar'

const Add = () => {
    return (
        <TouchableNativeFeedback
        >

            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: 50,
                height: 50,
                borderRadius: 50,
                right: 25,
                bottom: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
            </View>
        </TouchableNativeFeedback>
    )
}

const Index = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16]
    return (
        <View
            style={{
                height: '100%'
            }}
        >
            <NavBar />
            <ScrollView
                style={{
                }}
            >
                {
                    array.map((e) => {
                        return <Chat key={e} />
                    })
                }
            </ScrollView>
            <Add />
        </View>
    )
}

export default Index