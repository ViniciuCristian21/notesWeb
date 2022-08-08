import { api } from './../../api';
import { Notes } from './../entities/Notes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesRequestService {
  private allNotes: any[];
  constructor() { }

  async getAllNotes() {
    try {
      this.allNotes = await (await api.get("/all-notes")).data;
    } catch (err) {
      console.log({
        error: err.message
      })
    }

    this.allNotes = this.formatDate(this.allNotes)
    return this.allNotes;
  }

  async updateNotes(id: string) {}

  async deleteNotes(id: string) {
    console.log("[DELETE-NOTE]", id)
  }

  async createNotes(note: Notes) {
    console.log("[CREATE-NOTE]", note)

    await api.post("/new-note", note)
  }

  //Format datas
  formatDate(data: any[]) {
    let notes = [];
    data.forEach(element => {
      const date = new Date(element.date)
      notes.push({
        id: element.id,
        description: element.description,
        date: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      })
    });

    return notes
  }
}
