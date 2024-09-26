import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/app";
import IndexCompleted from "../screens/app/index-completed";
import { CustomHeader } from "./custom-header";
import Details from "../screens/app/details";
import Confirm from "../screens/app/confirm";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4C33CC",
        tabBarInactiveBackgroundColor: '#F7F5FA',
        tabBarActiveBackgroundColor: "#FFFFFF",
        tabBarInactiveTintColor: "#6F6C80",
        tabBarItemStyle: {
          paddingBottom: 10,
          fontSize: 30,
        },
        tabBarLabel: {
          fontSize: 30,
        },
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tab.Screen 
        name="index"
        component={IndexStackNavigator}
        options={{
          tabBarLabelStyle: { 
            fontSize: 15 ,
            paddingBottom: 20
          },
          tabBarItemStyle: ({ focused }) => ({
            borderTopWidth: focused ? 4 : 0, // Adiciona borda superior quando focado
            borderTopColor: focused ? "#4C33CC" : "transparent", // Cor da borda superior
          }),
          tabBarLabel: "Pendentes",
          tabBarIcon: () => null, // Removendo o ícone
        }}
      />
      <Tab.Screen 
        name="index-completed"
        component={IndexCompletedStackNavigator}
        options={{
          tabBarLabelStyle: { 
            fontSize: 15 ,
            paddingBottom: 20
          },
          tabBarLabel: "Feitas",
          tabBarIcon: () => null, // Removendo o ícone
          tabBarItemStyle: ({ focused }) => ({
            paddingBottom: 10,
            borderTopWidth: focused ? 4 : 0,  // Borda no topo quando ativo
            borderTopColor: focused ? "#4C33CC" : "transparent", // Cor da borda da aba ativa
          }),
        }}

      />
    </Tab.Navigator>
  )
}

function IndexStackNavigator() {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
      screenOptions={({ route }) => ({
        header: () => <CustomHeader title={route.name} />,
      })}
    >
      <Stack.Screen name="Pendentes" component={Index} />
      <Stack.Screen name="Detalhes" component={Details} />
      <Stack.Screen name="Confirmar" component={Confirm} />
    </Stack.Navigator>
  )
}

function IndexCompletedStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <CustomHeader title={route.name} />,
      })}
    >
      <Stack.Screen name="Feitas" component={IndexCompleted} />
    </Stack.Navigator>
  )
}