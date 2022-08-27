import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(msg: string, colors: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: colors
    });
    toast.present();
  }
}
