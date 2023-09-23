import { View, ActivityIndicator } from "react-native";

function LoadingOverlay() {
  return (
    <View>
      <ActivityIndicator size="Large" color="white" />
    </View>
  );
}

export default LoadingOverlay;
