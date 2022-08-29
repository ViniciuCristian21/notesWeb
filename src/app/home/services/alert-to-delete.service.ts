import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertToDeleteService {

  constructor(private alertController: AlertController) { }
  handlerMessage = '';
  roleMessage = '';
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Excluir Permanente?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancelado");
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log("OK");
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    return role;
  }
}
