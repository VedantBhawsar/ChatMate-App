import React, { useTransition } from 'react'
import { StyleSheet, Text, TextInput, View, CheckBox, Button, Alert, TouchableOpacity } from 'react-native'
// import { CheckBox } from '@react-native-community/cli-tools'
const Index = () => {

    const handleSumbit = () => {
        console.log('clicked')

    }
    return (
        <View style={style.container}>
            <Text
                style={{
                    fontSize: 35,
                    alignSelf: 'flex-start',
                    fontFamily: 'Poppins-SemiBold'
                }}
            >Sign In</Text>
            <View style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                gap: 25
            }}>
                <View style={style.input}>
                    <TextInput
                        style={{
                            fontSize: 17
                        }}
                        placeholder={'Email'}
                    />
                </View>
                <View style={style.input}>
                    <TextInput
                        style={{
                            fontSize: 17
                        }}
                        placeholder={'Password'}
                    />
                </View>
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%'
                }}
            >
                <Text>Remember Me</Text>
                <TouchableOpacity>
                    <Text style={{
                        textDecorationLine: 'underline'
                    }}>forgot password</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    gap: 4
                }}
            >
                <TouchableOpacity
                    onPress={handleSumbit}
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'red',
                            width: "60%",
                            height: 45,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'PlusJakartaSans-SemiBold',
                                fontSize: 15,
                            }}
                        >
                            Sign In
                        </Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15
                        }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 15,
                                textDecorationLine: 'underline'
                            }}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Index

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 20,
        marginHorizontal: 50
    },
    input: {
        width: '100%',
        // backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        paddingHorizontal: 20,
        borderColor: 'red',

    }
})