import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { getCharacters } from './lib/api';

export default function App() {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		getCharacters().then((characters) => {
			setCharacters(characters)
		})
	}, [])

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			
			{characters.results?.map((character) => (
				<View key={character.id} style={styles.card}>
					<Image 
						source={{ uri: character.image }}
						style={styles.image}
					/>
					<Text style={styles.title}>{character.name}</Text>
					<Text style={styles.description}>{character.species}</Text>
					<Text style={styles.status}>{character.status}</Text>
				</View>
			)) }

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		color: '#fff',
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		marginBottom:10
	},
	image:{
		width: 100,
		height: 100,
		borderRadius: 10
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#fff'
	},
	description: {
		fontSize: 16,
		color: '#fff'
	},
	status:{
		fontSize: 16,
		color: '#ccc',
		marginTop:10

	}
});
