import { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native"
import { Status } from "./Status";

export function CharacterCard({ character }) {
    return (
        <View className='flex-row gap-4 mb-5'>
            <Image
                className='w-[100] h-[100] rounded-xl'
                source={{ uri: character.image }}
            />
            <View className='flex items-start'>
                <Text className='text-2xl font-bold text-white'>{character.name}</Text>
                <Text className='text-base text-white'>Specie: {character.species}</Text>

                <Status status={character.status} />
            </View>
        </View>
    )
}

export function AnimatedCharacterCard({ character, index }) {
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 100,
            useNativeDriver: true
        }).start()
    }, [opacity, index])

    return (
        <Animated.View style={{ opacity }}>
            <CharacterCard character={character} />
        </Animated.View>
    )
}