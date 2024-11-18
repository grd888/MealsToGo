import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ backgroundColor: 'green', padding: 16 }}>
        <Text>search</Text>
      </View>
      <View style={{ backgroundColor: 'blue', flex: 1, padding: 16 }}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({});
