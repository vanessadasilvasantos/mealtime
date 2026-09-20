import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import Screen from "@/components/Screen";
import { ArrowLeft } from "lucide-react-native";
import Input from "@/components/Input";
import { Check } from "lucide-react-native";
import { useState } from "react";
import Button from "@/components/Button";
import Header from "@/components/Header";


export default function SignUp() {
    const [checked, setChecked] = useState(false);

    return(
        <Screen className="scroll">
            <Header title="Sign up"/>
            <View className="mt-6 gap-3 mb-3">
                <Input label="Full Name"/>
                <Input label="Email Address"/>
                <Input label="Password"/>
            </View>
            <Pressable
            onPress={() => setChecked(!checked)}
            className="flex-row items-center gap-2 mb-5"
            >
                <View
                    className={`h-5 w-5 items-center justify-center rounded-md border ${
                    checked
                        ? "border-primary_500 bg-primary_500"
                        : "border-gray_100 bg-secondary_0"
                    }`}
                >
                    {checked && <Check size={14} color="white" />}
                </View>

                <Text className="text-gray_500 text-body1 font-medium">I agree to Mealtime’s <Text className="text-primary_900 underline">Terms & Conditions</Text></Text>
            </Pressable>
            <Button disabled>Create an Account</Button>
            <Text className="my-3 text-body3">Or</Text>
            <Button variant="google">Create an Account</Button>
            <Button variant="facebook">Create an Account</Button>
            <Text>Already a member? Login</Text>
        </Screen>
    )
}