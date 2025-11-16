import React, { useState } from "react";
import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IconProfile = () => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => navigation.navigate("Profile")}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`w-13 h-13 rounded-full ${pressed ? "border-2 border-[#902FFB]" : ""}`}
    >
      <Image
        source={require("../../assets/ronal.jpg")}
        className="w-12 h-12 rounded-full"
      />
    </Pressable>
  );
};

export default IconProfile;
