import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AuthRoutes } from "./auth.routes";
import Index from "../screens/app";
import { useAuth } from "../contexts/auth";

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
          <Index />
        :
          <AuthRoutes />
      }
    </NavigationContainer>
  )
}