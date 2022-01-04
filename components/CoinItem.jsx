import { View, Text, StyleSheet, Image } from 'react-native';

export default function CoinItem({ coin }) {
  return (
    <View style={style.mainContainer}>
      <View style={style.coinInfoContainer}>
        <Image style={style.image} source={{ uri: coin.image }} />
        <View style={style.coinNamesContainer}>
          <Text style={style.coinName}>{coin.name}</Text>
          <Text style={style.coinSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={style.coinPrice}>$ {coin.current_price} ARS</Text>
        <Text
          style={[
            style.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? style.priceUp
              : style.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
  },

  coinInfoContainer: {
    flexDirection: 'row',
  },

  image: {
    width: 30,
    height: 30,
  },

  coinNamesContainer: {
    marginTop: 5,
    marginLeft: 10,
  },

  coinName: {
    color: '#fff',
  },

  coinSymbol: {
    color: '#434343',
    marginTop: 5,
    textTransform: 'uppercase',
  },

  coinPrice: {
    color: '#fff',
  },

  pricePercentage: {
    marginTop: 5,
    textAlign: 'right',
  },

  priceUp: {
    color: 'green',
  },

  priceDown: {
    color: 'red',
  },
});
