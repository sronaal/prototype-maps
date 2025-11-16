import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapHomeScreen from "../screens/Map/MapHomeScreen";
import MarkersScreen from "../screens/Map/MarkerScreen";
import GeofencesScreen from "../screens/Map/GeofencesScreen";

const Stack = createNativeStackNavigator();

export default function MapNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MapHome" 
        component={MapHomeScreen}
        options={{ title: "Mapa" }}
      />
      <Stack.Screen 
        name="Markers" 
        component={MarkersScreen} 
        options={{ title: "Marcadores" }}
      />
      <Stack.Screen 
        name="Geofences" 
        component={GeofencesScreen}
        options={{ title: "Geocercas" }}
      />
    </Stack.Navigator>
  );
}
