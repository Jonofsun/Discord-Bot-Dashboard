import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // wrapper
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // function
import BotComponentsScreen from "./screens/BotComponentsScreen";
import MainDashboardScreen from "./screens/MainDashboardScreen";
import BotPageScreen from "./screens/BotPageScreen";
import FindMemberScreen from "./screens/FindMemberScreen";
import ChangeNicknameScreen from "./screens/ChangeNicknameScreen";
import RoleChangeComponent from "./components/RoleChangeComponent";
import RoleChangeScreen from "./screens/RoleChangeScreen";

const Stack = createNativeStackNavigator(); // Imported from @react-navigation/native-stack, used to create a stack navigator.
// Creates a new stack navigator object.
export default function App() {
  return (
    <>
      <NavigationContainer>
        {/*Navigation container manages the navigation tree and contains the navigation state*/}
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#98002e",
            },
            contentStyle: {
              backgroundColor: "#717073",
            },
          }}
        >
          {/* Defines the stack navigation. It contains multiple Stack.Screen components, each representing a screen in the app.*/}
          {/*Navigator wrapper */}
          {/* <Stack.Screen
            options={{
              title: "Discord Bot DashBoard",
            }}
            name: "Components"
            component={BotComponentScreen}
          /> */}
          {/* <Stack.Screen name="Functions" component={MainDashboardScreen}/> */}
          <Stack.Screen name="MainDBS" component={MainDashboardScreen} />
          <Stack.Screen name="BotPage" component={BotPageScreen} />
          <Stack.Screen name="FindMember" component={FindMemberScreen} />
          <Stack.Screen
            name="ChangeNickname"
            component={ChangeNicknameScreen}
          />
          <Stack.Screen name="RoleChange" component={RoleChangeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
