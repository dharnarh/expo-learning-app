import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <>
      <StatusBar style='light' />
      <Stack
        initialRouteName='home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#112378'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </>
  );
}
