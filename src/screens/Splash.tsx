import { Text, View, Image } from "react-native";

export default function Splash() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require("../../assets/images/splash-icon.png")}
        className="w-[71%] mb-4"
      />
      <Text className="text-lg font-bold">Welcome to MyApp</Text>
    </View>
  );
}