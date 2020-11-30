import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {getImg} from '../Images';

const Saving = () => {

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.points}>Los P*t@s del ahorro</Text>
      </View>
      <View style={styles.cardGeneral}>
        <Image style={styles.media} source={getImg('media')} />
        <View style={styles.card}>
          <Image style={styles.vector} source={getImg('vector')} />
          <View style={styles.textCard}>
            <Text style={styles.titleCard}>Esto es ahorro</Text>
            <Text style={styles.paragraph}>Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.circle}>
          <TouchableOpacity>
            <Image style={styles.elipse} source={getImg('elipse1')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.elipse} source={getImg('elipse2')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.elipse} source={getImg('elipse3')} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    justifyContent: 'flex-start',
    width: 327,
    marginBottom: 20,
  },
  points: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    color: '#58506B',
    textAlign: 'left',
  },
  greeting: {
    flexDirection: 'row', 
    width: 327,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    color: '#58506B',
  },
  media: {
    width: 327,
    height: 221,
    borderRadius: 20,
  },
  card: {
    width: 327,
    position: 'absolute',
    bottom: -65,
  },
  textCard: {
    width: 287,
    marginLeft: 30,
    position: 'absolute',
    bottom: 20,
  },
  titleCard: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 33,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  vector: {
    borderRadius: 20,
  },
  paragraph: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  content: {
    width: 327,
    marginTop: 84,
    marginBottom: 25,
    marginLeft: 18,
  },
  circle: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  elipse: {
    width: 10,
    height: 10,
  }
});

export default Saving;