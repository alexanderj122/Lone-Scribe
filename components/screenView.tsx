import { SafeAreaView } from "react-native-safe-area-context";
import { ViewProps } from "react-native";

export default function ScreenView({
  children,
}: ViewProps & { className?: string }) {
  return (
    <SafeAreaView>
      {children}
    </SafeAreaView>
  );
}
