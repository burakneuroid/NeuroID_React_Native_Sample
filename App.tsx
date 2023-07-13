/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  configure,
  setEnvironmentProduction,
  getSessionID,
  configureWithOptions,
  setSiteId,
  setScreenName,
  setUserID,
  excludeViewByTestID,
  start,
  manuallyRegisterRNTarget
} from 'neuroid-reactnative-sdk';

import uuid from 'react-native-uuid';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  
  useEffect(() => {
     
    configure('{key}');
    
    setEnvironmentProduction(true);
    setSiteId('{site}');
    setScreenName('DefaultForm');
    //excludeViewByTestID('sid');
    setUserID(`${uuid.v4()}`);
    start();

  }, []);
  
  manuallyRegisterRNTarget(
    'lastName',
    'TextInput::lastName',
    'lastName',
    'lastName'
  );
 

  return (
    <SafeAreaView>
      <StatusBar
      />
            <View testID="innerMostView">
              <Text>First Name:</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                id="firstName"
                testID="firstName">
              </TextInput>
            </View>
            <View>
              <Text>Last Name:</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                id="lastName"
                testID="lastName"
              />
            <Button
              title="Submit"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            </View>
    </SafeAreaView>
)};

export default App;
