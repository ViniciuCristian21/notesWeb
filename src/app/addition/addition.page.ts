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
  constructor(private notesRequest: NotesRequestService) { }

  ngOnInit() {
  }

  createNote() {
    const data = {
      description: this.description || "",
      date: new Date()
    }
    try {
      const note = new Notes(data)
      this.notesRequest.createNotes(note)
    } catch (err) {
      console.log({
        error: err.message
      })
    }
  }

}
