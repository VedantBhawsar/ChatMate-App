import React from 'react'
import { Image, Text, TouchableHighlightComponent, TouchableNativeFeedback, View } from 'react-native'


const Index = () => {
  return (
    <TouchableNativeFeedback>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddindHorizontal: 30,
          paddingHorizontal: 20,
          paddingVertical: 10,
          gap: 20
        }}
      >
        <Image source={require('./profile.jpg')} alt={"profile-img"}
          style={{
            width: 55,
            height: 55,
            borderRadius: 50
          }}
        />
        <View>
          <Text style={{
            fontSize: 20,
            color: 'white',
            fontFamily: 'Poppins-SemiBold'
          }}>
            Vedant Bhavsar
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
              display: 'flex',

            }}
          >
            Hi
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default Index