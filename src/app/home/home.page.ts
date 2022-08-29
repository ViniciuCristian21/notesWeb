import { AlertToDeleteService } from './services/alert-to-delete.service';
import { GlobalToastService } from './../services/global-toast.service';
import { NotesRequestService } from './../services/notes-request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hasChange: boolean;
  search: string;
  allNotes: any[];

  constructor(
    private notesRequest: NotesRequestService,
    private globalToastService: GlobalToastService,
    private alertToDeleteService: AlertToDeleteService)
  {
    this.hasChange = false;

    // this.getAllNotes()
  }

  async getAllNotes() {
    try {
      this.allNotes = await this.notesRequest.getAllNotes();
      console.log("[GET-NOTES]",this.allNotes)
    } catch (err) {
      console.log(err.message)
    }
  }

  async callToDeleteNote(id: string) {
    let data = await this.alertToDeleteService.presentAlert();
    if(data === "confirm"){
      this.deleteNote(id)
    }
  }

  async deleteNote(id: string) {
    try {
      await this.notesRequest.deleteNotes(id)
      this.globalToastService.presentToast("Nota deletada com sucesso.", "success")
      // this.getAllNotes()
      this.ionViewWillEnter()
    } catch (err) {
      this.globalToastService.presentToast(err.message, "danger")
    }
  }

  ionViewWillEnter() {
    this.getAllNotes()
  }

}
