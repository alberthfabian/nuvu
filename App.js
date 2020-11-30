/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, {useState} from 'react';
import React from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Card from './src/components/Card';
import {Data} from './src/components/Data';
import Goals from './src/components/Goals';
import {getImg} from './src/components/Images';
import Portfolio from './src/components/Portfolio';
import Saving from './src/components/Saving';
import Expenses from './src/components/Expenses';
import Shortcut from './src/components/Shortcut';

const App = () => {

  // console.log(Data[1].goals);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card balance={Data[0].balance} investment={Data[0].investment} performance={Data[0].performance} />
          <View style={styles.goals}>
            <Text style={styles.text}>Tus metas</Text>
            <TouchableOpacity>
              <Image style={styles.add} source={getImg('add')} />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            {
              Data[1].goals.map(goal => (
                <Goals key={goal.id} img={goal.img} description={goal.description} saving={goal.saving} value={goal.value} percentage={goal.percentage} />
              ))
            }
          </View>
          <View style={styles.portfolio}>
            <Text style={styles.text}>Conoce tu portafolio</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.strategist}>Estratega</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Portfolio />
          </View>
          <Saving />
          <View style={styles.CardExpreses}>
            {
              Data[2].expenses.map(expense => (
              <Expenses key={expense.id} id={expense.id} title={expense.title} description={expense.description} img={expense.img}/>
              ))
            }
          </View>
        </View>
      </ScrollView>
      <ImageBackground source={getImg('background')} style={styles.footer}>
        <View style={styles.shortcut}>
          {
            Data[3].shortcut.map(data => (
            <Shortcut key={data.id} img={data.img} name={data.name} id={data.id}/>
            ))
          }
        </View>
      </ImageBackground>
      <View style={styles.line}>
        <Image source={getImg('line')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FC',
    paddingTop: 54,
    alignItems: 'center',
  },
  goals: {
    flexDirection: 'row', 
    width: 327,
    height: 25,
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    display: 'flex',
    alignItems: 'center',
    color: '#58506B',
  },
  add: {
    width: 20,
    height: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 327,
  },
  portfolio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 327,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E4FFEE',
    width: 64,
    height: 21,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
    borderColor: '#41CF69',
    borderWidth: 1,
    borderRadius: 10,
  },
  strategist: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#41CF69',
  },
  CardExpreses: {
    width: 327,
    height: 304,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 155,
    borderRadius: 20,
  },
  shortcut: {
    width: 327,
    height: 60,
    borderRadius: 20,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 13,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 54,
    margin: 'auto',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 9,
    margin: 'auto',
    alignItems: 'center',
  },
});

export default App;
