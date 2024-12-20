import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import "../global.css";
import { images } from '../constants'
import CustomButton from '../components/CustomButton'

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className='w-full min-h-[85vh] justify-center items-center px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-5xl text-white font-bold text-center'>Discover Endless{"\n"} possiblities with {' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image 
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey{"\n"} of limitless exploration with Aora 
          </Text>

          <CustomButton 
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>


      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  ) 
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor:'#fff',
//         alignItems:'center',
//         justifyContent:'center',
//     }
// })