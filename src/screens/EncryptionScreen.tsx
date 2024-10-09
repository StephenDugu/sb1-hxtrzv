import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { encrypt } from '../utils/crypto';

const EncryptionScreen = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleEncrypt = () => {
    const encrypted = encrypt(inputText);
    setEncryptedText(encrypted);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
        placeholder="输入要加密的文本"
      />
      <Button title="加密" onPress={handleEncrypt} />
      <Text style={styles.result}>加密结果: {encryptedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default EncryptionScreen;