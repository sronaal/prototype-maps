import { View, Text, Button } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl font-bold">Login</Text>
      <Button title="Ir a Registro" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}
