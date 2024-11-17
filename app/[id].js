import { useState, useEffect } from 'react'
import { Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { getCharacterDetail } from '../lib/api';
import Screen from "../components/Screen";
import { Status } from '../components/Status';

export default function Detail() {
    const { id } = useLocalSearchParams()
    const [characterDetail, setCharacterDetail] = useState(null)

    useEffect(() => {
        getCharacterDetail(id).then(data => setCharacterDetail(data))
    }, [id])

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: 'white',
                    headerLeft: () => { },
                    headerTitle: characterDetail?.name ?? `Character #${id}`,
                    headerRight: () => { }
                }}
            />

            <View>
                {characterDetail == null ? (
                    <View className='items-center justify-center h-4/5'>
                        <ActivityIndicator size='large' />
                    </View>
                ) : (
                    <ScrollView>
                        <View className='justify-center items-center'>
                            <Image
                                className='mb-4 rounded'
                                source={{ uri: characterDetail.image }}
                                style={{ width: 250, height: 300 }}
                            />

                            <Text className='text-white text-center font-bold mb-8 text-2xl'>
                                {characterDetail.name}
                            </Text>

                            <View className='w-3/4'>
                                <Status status={characterDetail.status} fontSize='text-xl' />
                                <Text className='text-white text-xl'>
                                    Species: {characterDetail.species}
                                </Text>
                                <Text className='text-white text-xl'>
                                    Gender: {characterDetail.gender}
                                </Text>
                                {characterDetail.type.trim() != "" ? (
                                    <Text className='text-white text-xl'>
                                        Type: {characterDetail.type}
                                    </Text>
                                ) : null}
                                <Text className='text-white text-xl'>
                                    Origin: {characterDetail.origin?.name}
                                </Text>
                                <Text className='text-white text-xl'>
                                    Location: {characterDetail.location?.name}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </View>
        </Screen>
    )
}