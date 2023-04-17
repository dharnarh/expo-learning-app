import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, Link, useSearchParams } from 'expo-router';
import { Video } from 'expo-av';

export default function Single() {
  const { title, video, description } = useSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Details on ${title ?? '-'}` }} />
      <View style={styles.topic}>
        <Text style={styles.topicTitle}>{title ?? ''}</Text>
        <Video
          source={{ uri: decodeURIComponent(video) }}
          style={styles.video}
          useNativeControls
          resizeMode='cover'
        />
        <Text style={styles.topicDescription}>{description ?? ''}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingVertical: 16
  },
  topic: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    borderColor: '#E3E8FF',
    borderWidth: 1,
    textAlign: 'center'
  },
  topicTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#181818',
    marginBottom: 16
  },
  video: {
    width: '100%',
    height: 300,
    marginBottom: 16
  },
  topicDescription: {
    fontSize: 18,
    lineHeight: 28
  }
});
