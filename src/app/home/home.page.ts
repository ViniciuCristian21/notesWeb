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
  constructor( private notesRequest: NotesRequestService) {
    this.hasChange = false;

    // this.getAllNotes()
  }

  async getAllNotes() {
    this.allNotes = await this.notesRequest.getAllNotes();
    console.log("[GET-NOTES]",this.allNotes)
  }

  deleteNote(id: string) {
    this.notesRequest.deleteNotes(id)

    this.getAllNotes()
  }

  ionViewWillEnter() {
    this.getAllNotes()
  }

}
