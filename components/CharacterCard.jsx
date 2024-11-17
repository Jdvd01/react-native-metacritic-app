import { useEffect, useRef } from "react";
import { Animated, Image, Pressable, Text, View } from "react-native"
import { Status } from "./Status";
import { Link } from "expo-router";

export function CharacterCard({ character }) {
    return (
        <Link href={`/${character.id}`} asChild>
            <Pressable className='active:opacity-70 border border-black active:border-white/50 mb-2 rounded-xl p-1'>

                <View className='flex-row gap-4'>
                    <Image
                        className='w-[100] h-[100] rounded-xl'
                        source={{ uri: character.image }}
                    />
                    <View className='flex items-start flex-shrink'>
                        <Text className='text-2xl font-bold text-white'>{character.name}</Text>
                        <Text className='text-base text-white'>Specie: {character.species}</Text>

                        <Status status={character.status} />
                    </View>
                </View>
            </Pressable>
        </Link>
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