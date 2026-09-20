import Button from "@/components/Button";
import Screen from "@/components/Screen";
import { router } from "expo-router";
import { Text, View, Image } from "react-native";

export default function Splash() {
  return (
    <Screen>
      <View className="flex-1 justify-end">
        <Image
          source={require("../../../assets/images/splash-icon.png")}
        />
      </View>

      <View className="flex-1 w-full items-center justify-end mb-2">
        <Button variant="primary" onPress={() => router.push("/screens/SignUp")}>
          Get Started
        </Button>
        <Text className="text-gray_500 mt-4 text-body1 font-bold">Already a member? <Text className="text-gray_800 underline">Login</Text></Text>
      </View>
    </Screen>
  );
}