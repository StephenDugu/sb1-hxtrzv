import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'ns-encryption',
  templateUrl: './encryption.component.html',
})
export class EncryptionComponent {
  inputText = '';
  encryptedText = '';

  constructor(private cryptoService: CryptoService) {}

  encrypt() {
    this.encryptedText = this.cryptoService.encrypt(this.inputText);
  }
}