import React from 'react'
import { Text, View } from 'react-native'

const HolaMundo = () => {
    return (
        <View className='flex-1'>
            <Text>Hola</Text>
            <View className='items-center flex-1 mt-2 mb-10 ml-10 mr-10'>
                <Text className='text-red-700'>Mapa</Text>
            </View>
        </View>



    )
}

export default HolaMundo