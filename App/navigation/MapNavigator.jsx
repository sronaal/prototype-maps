import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapHomeScreen from "../screens/Map/MapHomeScreen";
import MarkersScreen from "../screens/Map/MarkerScreen";
import GeofencesScreen from "../screens/Map/GeofencesScreen";

const Stack = createNativeStackNavigator();

export default function MapNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,   // ← OCULTA HEADERS INTERNOS DEL STACK
      }}
    >
      <Stack.Screen name="MapHome" component={MapHomeScreen} />
      <Stack.Screen name="Markers" component={MarkersScreen} />
      <Stack.Screen name="Geofences" component={GeofencesScreen} />
    </Stack.Navigator>
  );
}
