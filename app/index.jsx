import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className=''>OPen up</Text>
      <StatusBar style='auto' />
      <Link href="/profile">Go to profie</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
})