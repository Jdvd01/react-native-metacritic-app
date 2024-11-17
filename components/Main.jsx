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
            <View className='mb-60'>

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
        </Screen>
    );
}