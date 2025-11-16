import { View, Text, Button } from "react-native";
import MapView from 'react-native-maps'
export default function MapHomeScreen({ navigation }) {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-xl">Mapa principal</Text>
        <MapView/>
      
    </View>
  );
}
