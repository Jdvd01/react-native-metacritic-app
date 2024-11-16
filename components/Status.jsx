import React from 'react'
import { Text, View } from 'react-native'

export function Status({ status }) {
    const getColor = () => {
        if (status == 'Alive') return 'text-green-400'
        if (status == 'Dead') return 'text-red-500'
        return 'text-gray-500'
    }

    return (
        <View className='flex-row gap-2'>
            <Text className='text-white'>Status:</Text>
            <Text className={`${getColor()}`}>{status}</Text>
        </View>
    )
}