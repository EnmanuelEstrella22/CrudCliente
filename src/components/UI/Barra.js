import React from 'react';
import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('NewCliente');
  };

  return (
    <Button icon="plus-circle" color="#fff" onPress={() => handlePress()}>
      CLIENTE
    </Button>
  );
};

export default BarraSuperior;
