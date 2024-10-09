import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private readonly key = 'MySecretKey123'; // 在实际应用中，应该使用更安全的密钥管理方式

  encrypt(text: string): string {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length);
      result += String.fromCharCode(charCode);
    }
    return btoa(result); // 使用Base64编码
  }

  decrypt(encryptedText: string): string {
    const text = atob(encryptedText); // 解码Base64
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length);
      result += String.fromCharCode(charCode);
    }
    return result;
  }
}