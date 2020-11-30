import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {getImg} from '../Images';

const Expenses = (props) => {

  const {title, description, img, id} = props;

  return (
    <>
      <View style={styles.expenses}>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Image style={styles.img} source={getImg(img)} />
      </View>
      {
        id < 3 && <View style={styles.line} />
      }
    </>
  );
};

const styles = StyleSheet.create({
  expenses: {
    flexDirection: 'row', 
    width: 287,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#817699',
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    color: '#58506B',
  },
  info: {
    width: 202,
    height: 42,
  },
  img: {
    width: 68,
    height: 68,
  },
  line: {
    borderBottomColor: '#FAF9FD',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Expenses;