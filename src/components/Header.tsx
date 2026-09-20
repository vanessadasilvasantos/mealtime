import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

    interface ScreenProps {
        title:string;
    }

export default function Header({ title }:ScreenProps) {
    return (
        <View className="w-full gap-2">
            <Pressable onPress={() => router.back()}>
                <ArrowLeft size={24} color="#1C1C1C" />
            </Pressable>
            <Text className="text-h3 font-bold">{title}</Text>
        </View>
    )
}
