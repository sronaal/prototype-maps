import React, { useState } from "react";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? (
    <MainNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default RootNavigator;
