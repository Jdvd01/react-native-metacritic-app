import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Screen({ children }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView className='bg-black pt-1 px-2 flex-1'>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}