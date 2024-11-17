import { View } from "react-native";

export default function Screen({ children }) {
    return (
        <View className='bg-black pt-4 px-2'>
            {children}
        </View>
    )
}


