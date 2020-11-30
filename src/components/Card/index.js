import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {getImg} from '../Images';

const Card = (props) => {

  const {balance, investment, performance} = props;

  return (
    <>
      <View style={styles.greeting}>
        <Text style={styles.text}>Hola, Camila</Text>
        <TouchableOpacity>
          <Image style={styles.bell} source={getImg('bell')} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image style={styles.woman} source={getImg('woman')} />
        <View style={styles.strategist}>
          <Text style={styles.textStrategist}>Eres</Text>
          <Text style={styles.textStrategist}>Estratega</Text>
        </View>
        <View style={styles.balance}>
          <Text style={styles.textBalance}>Tu saldo</Text>
          <Text style={styles.textValue}>{`$${balance}`}</Text>
        </View>
      </View>
      <View style={styles.investment}>
        <View style={styles.performance}>
          <Text style={styles.textInvestment}>Inversión</Text>
          <Text style={styles.textPerformance}>{`$${investment}`}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.performance}>
          <Text style={styles.textInvestment}>Rendimiento</Text>
          <Text style={styles.textPerformance}>{`$${performance}`}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  greeting: {
    flexDirection: 'row', 
    width: 327,
    justifyContent: 'space-between',
  },
  bell: {
    width: 18,
    height: 22,
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    color: '#58506B',
  },
  card: {
    width: 327,
    height: 230,
    marginTop: 40,
    backgroundColor: '#54D1ED',
    borderRadius: 20,
  },
  woman: {
    position: 'absolute',
    width: 170,
    height: 180,
    right: 10,
    top: -30,
  },
  strategist: {
    position: 'absolute',
    width: 112,
    height: 50,
    left: 25,
    top: 30,
  },
  textStrategist: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    color: '#FFFFFF',
  },
  balance: {
    position: 'absolute',
    width: 185,
    left: 25,
    bottom: 20,
  },
  textBalance: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
  },
  textValue: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 36,
    lineHeight: 49.03,
    color: '#FFFFFF',
  },
  investment: {
    width: 327,
    height: 102,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  performance: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textInvestment: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#58506B',
  },
  textPerformance: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#58506B',
  },
  line: {
    borderBottomColor: '#FAF9FD',
    borderBottomWidth: 1,
    marginTop: 10,
  },
});

export default Card;
