import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";
import { useGlobalContext } from "../../../context/GlobalProvider";

const AuthLayout = () => {
  const loading = false;

  return (
    <>
      <Stack screenOptions={{ contentStyle: { backgroundColor: "#ffff" } }}>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
