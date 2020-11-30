import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {getImg} from '../Images';

const Portfolio = () => {

  return (
    <>
      <View style={styles.info}>
        <View style={styles.portfolio}>
          <Image style={styles.robot} source={getImg('robot')} />
          <View style={styles.data}>
            <View style={styles.skandia}>
              <Image style={styles.logo} source={getImg('skandia')} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.percentage}>15%</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cash}>FIC Old Mutual Efectivo</Text>
            <Text style={styles.value}>$240.000</Text>
            <Text style={styles.active}>Tipo de activo</Text>
            <Text style={styles.fixed}>Renta fija</Text>
            <Text style={styles.fixed}>Depósito a la fija</Text>
            <View style={styles.nextButton}>
              <TouchableOpacity style={styles.circle}>
                <Image style={styles.next} source={getImg('left')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.circle}>
                <Image style={styles.next} source={getImg('right')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.description}>
          Tu dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  info: {
    width: 327,
    height: 229,
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 40,
    borderRadius: 20,
  },
  portfolio: {
    flexDirection: 'row', 
  },
  robot: {
    width: 120,
    height: 120,
  },
  data: {
    width: 147,
    height: 103,
    marginLeft: 20,
  },
  skandia: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: 147,
  },
  button: {
    width: 36,
    height: 15,
    backgroundColor: '#41CF69',
    borderRadius: 6,
  },
  percentage: {
    fontFamily: 'Open San',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  cash: {
    marginTop: 4,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    color: '#58506B',
  },
  value: {
    marginTop: 5,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    display: 'flex',
    color: '#58506B',
  },
  active: {
    marginTop: 5,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 14,
    display: 'flex',
    color: '#41CF69',
  },
  fixed: {
    marginTop: 5,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    color: '#58506B',
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 147,
  },
  circle: {
    marginTop: 8,
    marginBottom: 20,
    width: 30,
    height: 30,
    borderColor: '#FAF9FD',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    color: '#58506B',
    marginTop: 41,
  }
});

export default Portfolio;
