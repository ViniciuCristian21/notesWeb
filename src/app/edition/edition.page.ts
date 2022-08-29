import { GlobalToastService } from './../services/global-toast.service';
import { NotesRequestService } from './../services/notes-request.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.page.html',
  styleUrls: ['./edition.page.scss'],
})
export class EditionPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private notesRequest: NotesRequestService,
    private globalToastService: GlobalToastService,
  ) { }
  public note: string;
  private nId: string;


  ngOnInit() {
    this.nId = this.activatedRoute.snapshot.params['id'];

    console.log(this.nId);
    this.getOneNoteForId(this.nId)
  }


  async getOneNoteForId(id: string) {
    try {
      const note = await this.notesRequest.getOneNote(id);
      this.note = note.data.description;
      console.log(note.data)
    } catch (err) {
      this.globalToastService.presentToast(err.message, "danger")
    }
  }

  async updateNote() {
    try {
      await this.notesRequest.updateNotes(this.nId, this.note);
      this.globalToastService.presentToast("Atualizado com sucesso.", "success")
    } catch (err) {
      this.globalToastService.presentToast(err.message, "danger")
    }
  }

}
