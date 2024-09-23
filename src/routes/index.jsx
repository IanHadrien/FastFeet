import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AuthRoutes } from "./auth.routes";
import Index from "../screens/app";
import { useAuth } from "../contexts/auth";
import { AppRoutes } from "./app.routes";

export function Routes() {
  // const signed = false;
  const {
    signed,
    loading
  } = useAuth()

  // if (loading) return 
  return (
    <NavigationContainer>
      <StatusBar />
      { signed 
        ?
          <AppRoutes />
        :
          <AuthRoutes />
      }
    </NavigationContainer>
  )
}