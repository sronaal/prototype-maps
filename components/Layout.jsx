import { Text, View } from "react-native";

export default function Layout({ children }) {
    return (
        <View style={{ flex: 1 }}>
            {children}
        </View>
    );
}
