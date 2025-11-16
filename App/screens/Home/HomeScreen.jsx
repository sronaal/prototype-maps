import { View, Text } from "react-native";
import Layout from '../../../components/Layout'
export default function HomeScreen() {
  return (
   <View>
    <Layout>
      <View className="text-black">
         <Text className="text-green-500">Hola Mundo</Text>
      </View>
     
    </Layout>
   </View>
  );
}
