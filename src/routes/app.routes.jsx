import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/app";
import IndexCompleted from "../screens/app/index-completed";
import { CustomHeader } from "./custom-header";
import Details from "../screens/app/details";
import Confirm from "../screens/app/confirm";
import { CustomHeaderCreate } from "./custom-header-create";
import IndexCreate from "../screens/app/index-create";
import Users from "../screens/app/users/users";
import CreateUser from "../screens/app/users/create";
import EditUser from "../screens/app/users/edit";
import Recipients from "../screens/app/recipient/recipient";
import CreateRecipient from "../screens/app/recipient/create";
import EditRecipient from "../screens/app/recipient/edit";
import Orders from "../screens/app/order/orders";

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
            borderTopWidth: focused ? 4 : 0,
            borderTopColor: focused ? "#4C33CC" : "transparent",
          }),
          tabBarLabel: "Pendentes",
          tabBarIcon: () => null,
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
          tabBarIcon: () => null,
          tabBarItemStyle: ({ focused }) => ({
            paddingBottom: 10,
            borderTopWidth: focused ? 4 : 0, 
            borderTopColor: focused ? "#4C33CC" : "transparent",
          }),
        }}

      />
      <Tab.Screen 
        name="index-create"
        component={IndexCreateStackNavigator}
        options={{
          tabBarLabelStyle: { 
            fontSize: 15 ,
            paddingBottom: 20
          },
          tabBarLabel: "Cadastros",
          tabBarIcon: () => null,
          tabBarItemStyle: ({ focused }) => ({
            paddingBottom: 10,
            borderTopWidth: focused ? 4 : 0,
            borderTopColor: focused ? "#4C33CC" : "transparent",
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

function IndexCreateStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <CustomHeaderCreate title={route.name} />,
      })}
    >
      <Stack.Screen name="Create" component={IndexCreate} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Recipients" component={Recipients} />
      <Stack.Screen name="CreateRecipient" component={CreateRecipient} />
      <Stack.Screen name="EditRecipient" component={EditRecipient} />
    </Stack.Navigator>
  )
}