import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {getImg} from '../Images';

const Goals = (props) => {

  const {img, description, saving, value, percentage} = props;

  return (
    <>
      <View style={styles.framework}>
        <Image style={styles.add} source={getImg(img)} />
        <View style={styles.text}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.values}>
          <Image style={styles.percentage} source={getImg(percentage)}/>
          <View style={styles.data}>
            <Text style={styles.saving}>{saving}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  framework: {
    width: 158,
    height: 202,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
  }, 
  add: {
    width: 40,
    height: 40,
  },
  description: {
    marginTop: 10,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    display: 'flex',
    alignItems: 'center',
    color: '#817699',
  },
  line: {
    borderBottomColor: '#FAF9FD',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    width: 118,
    height: 42,
    justifyContent: 'center',
  },
  percentage: {
    width: 50,
    height: 50,
  },
  values: {
    flexDirection: 'row',
    width: 118,
  },
  data: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  saving: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: '#54D1ED',
  },
  value: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    color: '#817699',
  }
});

export default Goals;