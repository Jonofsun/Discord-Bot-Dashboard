import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // wrapper
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // function
import MainDashboardScreen from "./screens/MainDashboardScreen";
import BotPage from "./components/BotPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/*Navigation container */}
        <Stack.Navigator>
          {/*Navigator wrapper */}
          <Stack.Screen name="MainDBS" component={MainDashboardScreen} />
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
