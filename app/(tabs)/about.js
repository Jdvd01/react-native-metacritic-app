import { Pressable, Text, View } from "react-native";
import Screen from "../../components/Screen";
import { Link } from "expo-router";
import { LinkedinIcon } from "../../components/Icons";

export default function About() {
    return (
        <Screen>
            <View className='items-center justify-around flex-1 px-5'>
                <Text className='text-white text-xl'>
                    ¿Fan de <Text className='text-green-300'>Rick y Morty</Text>? ¡Esta app es para ti! Explora un universo de información sobre tus personajes favoritos. Con nuestra app, podrás conocer a fondo a Rick, Morty y compañía, desde sus características más peculiares hasta sus aventuras más descabelladas. ¡Todo al alcance de tu mano!
                </Text>

                <View className='items-center'>
                    <Text className='text-red-300 mb-2 text-2xl'>
                        The app is still under development.
                    </Text>

                    <Link asChild href='https://www.linkedin.com/in/jdvd01/'>
                        <Pressable className='active:opacity-70 p-1 flex-row items-end gap-x-2'>
                            <LinkedinIcon color='cyan' />
                            <Text className='text-cyan-300 text-2xl'>
                                Contact with me
                            </Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </Screen>
    )
}