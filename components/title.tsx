import { Text, TextProps } from "react-native";

export default function Title({
  children,
  className = "",
}: TextProps & { className?: string }) {
  return (
    <Text
      style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}
