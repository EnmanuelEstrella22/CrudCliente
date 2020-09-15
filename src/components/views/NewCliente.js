import React, {useState} from 'react'; //rafce
import {View, StyleSheet, Platform} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Portal,
  Dialog,
} from 'react-native-paper';

import globalStyles from '../../asset/styles/global';
import axios from 'axios';

const NewCliente = () => {
  const [nombre, saveNombre] = useState('');
  const [telefono, saveTelefono] = useState('');
  const [correo, saveCorreo] = useState('');
  const [empresa, saveEmpresa] = useState('');
  const [visible, setVisible] = useState(false);

  const saveCliente = async () => {
    // Validar
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setVisible(true);
      return;
    }
    // Generar el cliente
    const cliente = {nombre, telefono, empresa, correo};

    // Guardar el cliente en la api
    try {
      // Para android
      if (Platform.OS === 'android') {
        await axios.post('http://192.168.0.1:3000/Cliente', cliente);
        setVisible(true);
      } else {
        await axios.post('http://localhost:3000/Cliente', cliente);
      }
    } catch (e) {
      console.log(e);
    }

    // Renderizar

    // Limpiar el formulario
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Enmanuel"
        onChangeText={text => saveNombre(text)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        placeholder="8096125752"
        onChangeText={text => saveTelefono(text)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label="Correo"
        placeholder="correo@correo.com"
        onChangeText={text => saveCorreo(text)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={text => saveEmpresa(text)}
        value={empresa}
        style={styles.input}
      />
      <Button
        icon="pencil-circle"
        mode="contained"
        color="#1774f2"
        onPress={() => saveCliente()}>
        Guradar Cliente
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NewCliente;
