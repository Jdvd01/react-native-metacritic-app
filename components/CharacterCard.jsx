import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native"

export function CharacterCard({ character }) {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: character.image }}
                style={styles.image}
            />
            <Text style={styles.title}>{character.name}</Text>
            <Text style={styles.description}>Specie: {character.species}</Text>
            <Text style={styles.status}>Status: {character.status}</Text>
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

const styles = StyleSheet.create({
    card: {
        marginBottom: 48
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff'
    },
    description: {
        fontSize: 16,
        color: '#fff'
    },
    status: {
        fontSize: 16,
        color: '#ccc',
    }
});
