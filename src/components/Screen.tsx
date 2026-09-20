import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

    interface ScreenProps {
        children:React.ReactNode;
        className?:string;
    }

export default function Screen({children, className}:ScreenProps){
    return (
        <SafeAreaView className={`flex-1 bg-primary_0 px-4 items-center justify-center ${className || ''}`}>
            {children}
        </SafeAreaView>
    )
}