import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Stack, Link } from 'expo-router';

export default function Home() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.144:3000/api/subjects')
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'List of Subjects' }} />
      <FlatList
        data={subjects}
        renderItem={({ item }) => (
          <Link style={styles.lists} href={{ pathname: '/topics', params: { subjectId: item._id, subjectName: item.name } }}>
              <Text>{item.name}</Text>
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
