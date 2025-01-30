import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { Button, StyleSheet, ScrollView, Text, View } from 'react-native';

export default function App() {
  const updatesInfo = {
    createdAt: Updates.createdAt,
    updateId: Updates.updateId,
    isEmbeddedLaunch: Updates.isEmbeddedLaunch,
    manifest: Updates.manifest,
  };
  const overrideUrl =
    process.env.EXPO_OS === 'android'
      ? 'https://u.expo.dev/76d499c7-0aaa-4cc8-beed-05c519caca87/group/0136eb85-e4e7-4474-98aa-81c3084114d8'
      : 'https://u.expo.dev/60b87e93-ab55-4034-aefb-c67d4f206e4d/group/0136eb85-e4e7-4474-98aa-81c3084114d8';

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{JSON.stringify(updatesInfo, null, 2)}</Text>
        <Button
          title="Set update overrides"
          onPress={() => {
            Updates.setUpdateURLAndRequestHeadersOverride({
              updateUrl: overrideUrl,
              requestHeaders: {
                // 'expo-channel-name': 'preview',
              },
            });
          }}
        />
        {/* <Button
          title="Reset update overrides"
          onPress={() => {
            Updates.setUpdateURLAndRequestHeadersOverride(null);
          }}
        /> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    marginBottom: 16,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
