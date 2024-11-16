import { StatusBar, View } from "react-native";
import { Main } from "../components/Main";

export default function Index() {
    return (
        <View className='items-center justify-center bg-black'>
            <StatusBar style="light" />
            <Main />
        </View>
    )
}