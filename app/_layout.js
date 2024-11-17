import { Stack } from "expo-router"
import { View } from "react-native"
import { Logo } from "../components/Icons"
import '../global.css'
import { StatusBar } from "expo-status-bar"

export default function Layout() {
    return (
        <View className='flex-1'>
            <StatusBar style='light' />
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