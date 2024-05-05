import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  // Uncomment this line and the app will error without a redbox:
  // hello

  // Notice that in this case it redboxes
  // hello there!

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        contentFit="contain"
        source="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"
      />

      <Text style={{ fontSize: 22, marginTop: 15 }}>
        New Architecture: <Text style={{ fontWeight: 'bold' }}>Enabled</Text>
      </Text>

      < StatusBar style="auto" />
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
