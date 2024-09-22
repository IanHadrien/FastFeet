import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/auth/login"
import ForgotPassword from "../screens/auth/forgot-password"

const { Screen, Navigator } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen 
        name="login"
        component={Login}
      />

      <Screen 
        name="forgot-password"
        component={ForgotPassword}
      />
    </Navigator>
  )
}