import { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { getCharacters } from '../lib/api';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedCharacterCard } from './CharacterCard';
import { Link } from 'expo-router';
import { CircleInfoIcon } from './Icons';

export function Main() {
    const [characters, setCharacters] = useState({})
    const insets = useSafeAreaInsets()

    useEffect(() => {
        getCharacters().then((characters) => {
            setCharacters(characters)
        })
    }, [])

    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>

            <Link asChild href='/about'>
                <Pressable>
                    {({ pressed }) => <CircleInfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
                </Pressable>
            </Link>

            {characters.results?.length == 0 ? (
                <ActivityIndicator size='large' />
            ) : (
                <FlatList
                    data={characters.results}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => <AnimatedCharacterCard character={item} index={index} />}
                />
            )}

        </View>
    );
}