import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const FormField = ({
  title,
  value,
  handleChangeText,
  iconName,
  secureTextEntry = false,
  keyboardType = "default",
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="space-y-2 mt-7">
      <Text className="text-base text-gray-700 font-medium mb-2 ml-2">
        {title}
      </Text>
      <View
        className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 ${
          isFocused ? "border-gray-300" : "border-gray-300"
        } flex flex-row items-center space-x-3`}
      >
        {iconName && <Icon name={iconName} size={20} color="#7B7B8B" />}
        <TextInput
          className={`flex-1 text-slate-800 font-psemibold text-base p-3 border-none `}
          value={value}
          placeholder={title}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            borderWidth: 1,
            borderColor: "transparent", // No border on focus
            // Removes default web outline
          }}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#7B7B8B"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
