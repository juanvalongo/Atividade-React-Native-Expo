
import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';

export default function App() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=programming&limit=20')
      .then(resposta => resposta.json())
      .then(dados => setLivros(dados.docs));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Livros</Text>

      <FlatList
        data={livros}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.cardLivro}>
            {item.cover_i ? (
              <Image
                source={{
                  uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
                }}
                style={styles.capa}
              />
            ) : null}

            <View style={styles.infoLivro}>
              <Text style={styles.tituloLivro}>{item.title}</Text>
              <Text>Autor: {item.author_name?.join(', ') || 'Não informado'}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  cardLivro: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  capa: {
    width: 70,
    height: 100,
  },
  infoLivro: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  tituloLivro: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
