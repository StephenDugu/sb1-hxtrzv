import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { EncryptionComponent } from './encryption/encryption.component'
import { DecryptionComponent } from './decryption/decryption.component'

const routes: Routes = [
  { path: '', redirectTo: '/encryption', pathMatch: 'full' },
  { path: 'encryption', component: EncryptionComponent },
  { path: 'decryption', component: DecryptionComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}