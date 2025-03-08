import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { CustomButton, FormField } from "../../components";

const { height } = Dimensions.get("window");

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Register form state
  const [registerForm, setRegisterForm] = useState({
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  // Login handler
  const handleLogin = async () => {
    if (loginForm.email === "" || loginForm.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);
    try {
      Alert.alert("Success", "User signed in successfully");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Register handler
  const handleRegister = async () => {
    if (
      registerForm.company === "" ||
      registerForm.email === "" ||
      registerForm.password === "" ||
      registerForm.confirmPassword === ""
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
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

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6" style={{ minHeight: height - 100 }}>
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">Welcome to Aora</Text>

          {/* Tabs for switching between Login & Register */}
          <View className="flex flex-row justify-center mt-6 border-b border-gray-500">
            {[
              { key: "login", label: "Login" },
              { key: "register", label: "Register" },
            ].map((tab) => (
              <TouchableOpacity
                key={tab.key}
                className={`px-4 py-2 ${activeTab === tab.key ? "border-b-2 border-secondary" : ""}`}
                onPress={() => setActiveTab(tab.key as "login" | "register")}
              >
                <Text className="text-white text-lg font-semibold">{tab.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tab Content */}
          {activeTab === "login" ? (
            <>
              <FormField
                title="Email"
                value={loginForm.email}
                handleChangeText={(e:any) => setLoginForm({ ...loginForm, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
              />

              <FormField
                title="Password"
                value={loginForm.password}
                handleChangeText={(e:any) => setLoginForm({ ...loginForm, password: e })}
                otherStyles="mt-7"
              />

              <CustomButton title="Sign In" handlePress={handleLogin} containerStyles="mt-7" isLoading={isSubmitting} />

              <View className="flex justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">Don't have an account?</Text>
                <Text className="text-lg font-psemibold text-secondary" onPress={() => setActiveTab("register")}>
                  Sign up
                </Text>
              </View>
            </>
          ) : (
            <>
              <FormField
                title="Company"
                value={registerForm.company}
                handleChangeText={(e:any) => setRegisterForm({ ...registerForm, company: e })}
                otherStyles="mt-7"
              />

              <FormField
                title="Email"
                value={registerForm.email}
                handleChangeText={(e:any) => setRegisterForm({ ...registerForm, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
              />

              <FormField
                title="Password"
                value={registerForm.password}
                handleChangeText={(e:any) => setRegisterForm({ ...registerForm, password: e })}
                otherStyles="mt-7"
              />

              <FormField
                title="Confirm Password"
                value={registerForm.confirmPassword}
                handleChangeText={(e:any) => setRegisterForm({ ...registerForm, confirmPassword: e })}
                otherStyles="mt-7"
              />

              <CustomButton title="Register" handlePress={handleRegister} containerStyles="mt-7" isLoading={isSubmitting} />

              <View className="flex justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">Already have an account?</Text>
                <Text className="text-lg font-psemibold text-secondary" onPress={() => setActiveTab("login")}>
                  Sign in
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
