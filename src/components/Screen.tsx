import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

    interface ScreenProps {
        children:React.ReactNode;
    }

export default function Screen({children}:ScreenProps){
    return (
        <SafeAreaView className="flex-1 bg-secondary_0 p-4  items-center justify-center">
            {children}
        </SafeAreaView>
    )
}