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
    private globalToastService: GlobalToastService)
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
