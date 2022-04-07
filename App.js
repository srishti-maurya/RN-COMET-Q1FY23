import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeProvider, useTheme } from "./src/context/theme-context";

export default function App() {
  //context
  const { theme, setTheme } = useTheme();

  //useState Hook
  const [counter, setCounter] = useState(0);

  //useEffect Hook
  useEffect(() => {
    console.warn("warning from useEffect", counter);
    if (counter === 5) {
      alert("Counter updated to 5");
    }
  }, [counter]);

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <View
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        >
          <Text>Counter</Text>
          <Text>{counter}</Text>
          <Button title="+" onPress={() => setCounter(counter + 1)} />
          <Button title="-" onPress={() => setCounter(counter - 1)} />
          <Button
            title="Change Theme"
            onPress={() =>
              setTheme((theme) => {
                theme === "dark" ? "light" : "dark";
              })
            }
          />
        </View>
      </View>
     </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
