import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { decrypt } from '../utils/crypto';

const DecryptionScreen = () => {
  const [inputText, setInputText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleDecrypt = () => {
    const decrypted = decrypt(inputText);
    setDecryptedText(decrypted);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
        placeholder="输入要解密的文本"
      />
      <Button title="解密" onPress={handleDecrypt} />
      <Text style={styles.result}>解密结果: {decryptedText}</Text>
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

export default DecryptionScreen;