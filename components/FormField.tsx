import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const FormField = ({ title, value, handleChangeText, iconName, secureTextEntry = false, keyboardType = "default" }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="space-y-2 mt-7">
      <Text className="text-base text-gray-700 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-gray-300 focus:border-secondary flex flex-row items-center space-x-3">
        {iconName && <Icon name={iconName} size={20} color="#7B7B8B" />}
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={title}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "eye" : "eye-off"} size={20} color="#7B7B8B" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
