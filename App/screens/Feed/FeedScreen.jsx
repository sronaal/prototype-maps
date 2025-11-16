import { View, Text, Image } from "react-native";
import Layout from '../../../components/Layout';
import IconProfile from "components/Feed/IconProfile";

export default function FeedScreen() {
  return (
    <Layout>
      <View className="flex flex-row items-center justify-between mt-12 ml-5 mr-5">
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../assets/location.png")}
            className="w-10 h-10 mr-2"
          />
          <Text className="text-xl font-bold text-black">Near.</Text>
        </View>
        <IconProfile/>
      </View>
    </Layout>
  );
}
