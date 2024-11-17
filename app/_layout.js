import { Stack } from "expo-router"
import { View } from "react-native"
import { Logo } from "../components/Icons"
import '../global.css'

export default function Layout() {
    return (
        <View className='flex-1'>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: 'white',
                    headerTitle: '',
                    headerLeft: () => <Logo color='white' size="50" />,
                    headerRight: () => { }
                }}
            />
        </View>
    )
}