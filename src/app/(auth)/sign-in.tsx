import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/Feather"; // Feather Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Google Icon
import { CustomButton, FormField } from "../../components";
import GoogleButton from "@/src/components/GoogleButton";

const { height } = Dimensions.get("window");

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("register");

  // Form states
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);

  // Login handler
  const handleLogin = async () => {
    if (!loginForm.email || !loginForm.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);
    try {
      Alert.alert("Success", "User signed in successfully");
      router.replace("/energy");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Register handler
  const handleRegister = async () => {
    const { company, email, password, confirmPassword } = registerForm;
    if (!company || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setSubmitting(true);
    try {
      Alert.alert("Success", "User registered successfully");
      setActiveTab("login"); // Switch to login after successful registration
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = () => {
    Alert.alert("Info", "Google Sign-In not implemented yet.");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{ minHeight: height - 100 }}
        >
          {/* Tabs for switching between Register & Login */}
          <View className="flex flex-row justify-center mt-6 border-b border-gray-500">
            {[
              { key: "register", label: "Register" },
              { key: "login", label: "Login" },
            ].map((tab) => (
              <TouchableOpacity
                key={tab.key}
                className={`px-4 py-2 ${
                  activeTab === tab.key ? "border-b-2 border-secondary" : ""
                }`}
                onPress={() => setActiveTab(tab.key as "login" | "register")}
              >
                <Text
                  style={{ color: "#A5A328" }}
                  className=" text-lg font-semibold"
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tab Content */}
          {activeTab === "register" ? (
            <>
              <FormField
                title="Company"
                value={registerForm.company}
                handleChangeText={(e: any) =>
                  setRegisterForm({ ...registerForm, company: e })
                }
                iconName="briefcase"
              />
              <FormField
                title="Email"
                value={registerForm.email}
                handleChangeText={(e: any) =>
                  setRegisterForm({ ...registerForm, email: e })
                }
                iconName="mail"
                keyboardType="email-address"
              />
              <FormField
                title="Password"
                value={registerForm.password}
                handleChangeText={(e: any) =>
                  setRegisterForm({ ...registerForm, password: e })
                }
                iconName="lock"
                secureTextEntry
              />
              <FormField
                title="Confirm Password"
                value={registerForm.confirmPassword}
                handleChangeText={(e: any) =>
                  setRegisterForm({ ...registerForm, confirmPassword: e })
                }
                iconName="lock"
                secureTextEntry
              />

              <CustomButton
                textStyles="text-white"
                title="Create Account"
                handlePress={handleRegister}
                containerStyles="mt-7"
                isLoading={isSubmitting}
              />
            </>
          ) : (
            <>
              <FormField
                title="Email"
                value={loginForm.email}
                handleChangeText={(e: any) =>
                  setLoginForm({ ...loginForm, email: e })
                }
                iconName="mail"
                keyboardType="email-address"
              />
              <FormField
                title="Password"
                value={loginForm.password}
                handleChangeText={(e: any) =>
                  setLoginForm({ ...loginForm, password: e })
                }
                iconName="lock"
                secureTextEntry
              />

              <TouchableOpacity
                className="mt-2 self-end"
                onPress={() =>
                  Alert.alert("Forgot Password", "Reset link sent!")
                }
              >
                <Text className="text-secondary text-sm">Forgot Password?</Text>
              </TouchableOpacity>

              <CustomButton
                textStyles="text-white"
                title="Sign In"
                handlePress={handleLogin}
                containerStyles="mt-7"
                isLoading={isSubmitting}
              />

              <View className="mt-5">
                <GoogleButton />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
