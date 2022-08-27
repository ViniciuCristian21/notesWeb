import { GlobalToastService } from './../services/global-toast.service';
import { Notes } from './../entities/Notes';
import { NotesRequestService } from './../services/notes-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.page.html',
  styleUrls: ['./addition.page.scss'],
})
export class AdditionPage implements OnInit {
  public description: string;
  constructor(private notesRequest: NotesRequestService,
              private globalToastService: GlobalToastService) { }

  ngOnInit() {
  }

  async createNote() {
    const data = {
      description: this.description || "",
      date: new Date()
    }
    try {
      const note = new Notes(data)
      await this.notesRequest.createNotes(note);
      this.globalToastService.presentToast("Nota salva com sucesso","success");
    } catch (err) {
      this.globalToastService.presentToast(err.message, "danger")
    }
  }

}
