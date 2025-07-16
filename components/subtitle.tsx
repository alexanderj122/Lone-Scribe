import { Text, TextProps } from "react-native";

export default function Subtitle({
  children,
  className = "",
}: TextProps & { className?: string }) {
  return (
    <Text
      style={{
        fontSize: 20,
        opacity: 0.8,
        textAlign: "center",
      }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}
