import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'ns-decryption',
  templateUrl: './decryption.component.html',
})
export class DecryptionComponent {
  inputText = '';
  decryptedText = '';

  constructor(private cryptoService: CryptoService) {}

  decrypt() {
    this.decryptedText = this.cryptoService.decrypt(this.inputText);
  }
}