import { Text, View } from "react-native";

export default function Layout({ children }) {
  return (
    <View className="items-center justify-center flex-1 px-10 mt-10 bg-white py-96">
      {children}
    </View>
  );
}
