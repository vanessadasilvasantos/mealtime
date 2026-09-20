import { CircleAlert, CircleCheck } from "lucide-react-native";
import { TextInput, View, Text, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  success?: boolean;
}

export default function Input({
  label,
  error,
  success,
  ...props
}: InputProps) {
  const hasError = !!error;
  const isSuccess = success && !hasError;

  return (
    <View className="w-full">
      {label && (
        <Text className="text-body1 font-bold pb-2">
          {label}
        </Text>
      )}

      <View
        className={`flex flex-row items-center w-full bg-secondary_0 rounded-2xl border h-14 pr-8 ${
          hasError
            ? "border-[#E55B48]"
            : isSuccess
              ? "border-[#4CAF50]"
              : "border-gray_200"
        }`}
      >
        <TextInput
          {...props}
          className="flex-1 h-12 bg-secondary-100"
        />

        {hasError && (
          <View className="bg-[#FADEDA] rounded-full">
            <CircleAlert size={16} color="#E55B48" />
          </View>
        )}

        {isSuccess && (
          <View className="bg-[#DDF5E3] rounded-full">
            <CircleCheck size={16} color="#4CAF50" />
          </View>
        )}
      </View>
    </View>
  );
}