import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  //useState Hook
  const [counter, setCounter] = useState(0);

  //useEffect Hook
  useEffect(()=> {
    console.warn("warning from useEffect", counter)
    if(counter===5){
      alert("Counter updated to 5")
    }
  },[counter])

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text>{counter}</Text>
      <Button title='+' onPress={()=> setCounter(counter+1)}/>
      <Button title='-' onPress={()=> setCounter(counter-1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
