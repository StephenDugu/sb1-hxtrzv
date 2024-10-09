const key = 'MySecretKey123'; // 在实际应用中，应该使用更安全的密钥管理方式

export const encrypt = (text: string): string => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return Buffer.from(result).toString('base64');
};

export const decrypt = (encryptedText: string): string => {
  const text = Buffer.from(encryptedText, 'base64').toString('utf-8');
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
};