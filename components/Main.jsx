import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { getCharacters } from '../lib/api';
import { AnimatedCharacterCard } from './CharacterCard';
import Screen from './Screen';

export function Main() {
    const [characters, setCharacters] = useState({})

    useEffect(() => {
        getCharacters().then((characters) => {
            setCharacters(characters)
        })
    }, [])

    return (
        <Screen>
            {characters.results?.length == 0 ? (
                <View className='items-center justify-center h-4/5'>
                    <ActivityIndicator size='large' />
                </View>
            ) : (
                <FlatList
                    data={characters.results}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => <AnimatedCharacterCard character={item} index={index} />}
                />
            )}
        </Screen>
    );
}