import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {getImg} from '../Images';

const Shortcut = (props) => {

  const {img, name, id} = props;

  return (
    <>
      <View style={styles.cardShortcut}>
        {
          id < 3 || id === 4 ? 
          <TouchableOpacity>
            <Image style={styles.img} source={getImg(img)} />
          </TouchableOpacity>
          :
          id === 3 ? 
          <TouchableOpacity style={styles.imgSavingComplete}>
            <Image style={styles.imgSaving} source={getImg(img)} /> 
          </TouchableOpacity>
          :
          <TouchableOpacity>          
            <Image style={styles.imgMore} source={getImg(img)} />
          </TouchableOpacity>
        }
        {
          id === 3 ? 
          <TouchableOpacity>          
            <Text style={styles.textName}>{name}</Text> 
          </TouchableOpacity>
          :
          <TouchableOpacity>          
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardShortcut: {
    width: 40,
    height: 38,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 20,
    height: 20,
  },
  imgMore: {
    width: 20,
    marginTop: 10,
  },
  imgSavingComplete: {
    position: 'absolute',
  },
  imgSaving: {
    width: 50,
    height: 50,
    top: -48,
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#A99DC6',
  },
  textName: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#A99DC6',
    marginTop: 24,
  }
});

export default Shortcut;