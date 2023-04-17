import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Stack, Link, useSearchParams } from 'expo-router';

export default function Index() {
  const { subjectId, subjectName } = useSearchParams();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (subjectId) {
      fetch(`http://192.168.0.144:3000/api/subject/${subjectId}`)
        .then((response) => response.json())
        .then((data) => setTopics(data.topics))
        .catch((error) => console.error(error));
    }
  }, [subjectId]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Topics on ${subjectName ?? '-'}` }} />
      <FlatList
        data={topics}
        renderItem={({ item }) => (
          <Link
            style={styles.lists}
            href={{
              pathname: '/topics/single',
              params: {
                title: String(item.title),
                video: encodeURIComponent(item.video),
                description: String(item.description)
              }
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Link>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB'
  },
  lists: {
    paddingVertical: 16,
    width: '95%',
    backgroundColor: '#FFFFFF',
    marginVertical: 16,
    alignSelf: 'center',
    textAlignVertical: 'center',
    height: 100,
    borderRadius: 10,
    borderColor: '#E3E8FF',
    borderWidth: 1,
    fontSize: 24,
    fontWeight: '700',
    color: '#181818',
    textAlign: 'center'
  }
});