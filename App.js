import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, TextInput, Text, View } from 'react-native';
import axios from 'axios';
import API_URL from './utils/endpoint';
import CoinItem from './components/CoinItem';

export default function App() {
  const [coins, setCoins] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${API_URL}`);

      setCoins(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={style.container}>
      <StatusBar style="auto" />
      <View style={style.header}>
        <Text style={style.title}>CryptoMarket</Text>
        <TextInput style={style.searchInput} />
      </View>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  title: {
    fontSize: 20,
    marginLeft: 20,
    color: '#fff',
  },

  searchInput: {
    color: '#fff',
    borderBottomWidth: '20',
    borderBottomColor: '#fff',
  },
});
