import { View, Text, Pressable, Image } from "react-native"

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" |"google" | "facebook";
  onPress?: () => void;
}

export default function Button({
  children,
  disabled = false,
  variant = "primary",
  onPress,
}: ButtonProps) {
  const variants = {
    primary: "bg-primary_500 hover:bg-primary_600 active:bg-primary_600",

    secondary: "bg-secondary_0 border border-gray_100 border-[1px]",

    google: "bg-secondary_0 border border-gray_100 border-[1px] flex flex-row items-center gap-3",

    facebook: "bg-[#1877F2] text-secondary_0 flex flex-row items-center gap-3",
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`rounded-2xl h-14 justify-center w-full disabled:opacity-50 disabled:bg-gray_100 ${variants[variant]}`}
    >{ (variant === "google" || variant === "facebook" ) && (
      <View>
        <Image source={ variant === "google" ?require("@/assets/images/icons/logos_google-icon.png") : require("@/assets/images/icons/logos_facebook.png")} className="w-6 h-6" />
      </View>
    )

    }
      <Text className={`text-center font-bold text-gray_800 text-body1 ${variant === 'facebook' && 'text-secondary_0'}`}>
        {children}
      </Text>
    </Pressable>
  );
}