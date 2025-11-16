import { View, Text, Button } from "react-native";

export default function MapHomeScreen({ navigation }) {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-xl">Mapa principal</Text>

      <Button 
        title="Ver marcadores" 
        onPress={() => navigation.navigate("Markers")} 
      />
      
      <Button 
        title="Ver geocercas" 
        onPress={() => navigation.navigate("Geofences")} 
      />
    </View>
  );
}
