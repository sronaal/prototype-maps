import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";

export default function AppMain() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
