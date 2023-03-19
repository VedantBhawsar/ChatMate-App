import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'

const Index = () => {
    return (
        <View
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: 'red',
                justifyContent: 'space-between',
                // height: '25%',
                paddingHorizontal: '4%',
                paddingVertical: '2.5%',
            }}
        >
            <View
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        fontFamily: 'Poppins-SemiBold',
                    }}
                >
                    ChatMate
                </Text>
            </View>
            <TouchableNativeFeedback>
                <View style={{
                    padding: 8,
                    width: 80,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 5,
                    backgroundColor: 'black',
                }}>
                    <Text
                        style={{
                            fontFamily: 'Poppins-SemiBold'
                        }}
                    >Sign Out</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Index