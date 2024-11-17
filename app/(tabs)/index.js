import { StatusBar } from "react-native";
import { Main } from "../../components/Main";
import Screen from "../../components/Screen";

export default function Index() {
    return (
        <Screen>
            <StatusBar style="light" />
            <Main />
        </Screen>
    )
}