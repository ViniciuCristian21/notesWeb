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
      throw new Error(err.message)
    }

    if(this.allNotes){
      this.allNotes = this.formatDate(this.allNotes)
    }
    return this.allNotes;
  }

  async updateNotes(id: string, description: string) {
    try {
      await api.patch("/update-note", {id, description})
      console.log("UPDATE-NOTE]", id)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async deleteNotes(id: string) {
    try {
      await api.delete("/delete-note", {
        data: {
          id
        }
      });
    } catch (err) {
      throw new Error(err.message)
    }
    console.log("[DELETE-NOTE]", id)
  }

  async createNotes(note: Notes) {
    console.log("[CREATE-NOTE]", note)

    try {
      await api.post("/new-note", note)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async getOneNote(id: string) {
    console.log("[GET-BY-ID] get one note");
    try {
      const note = await api.get(`find-note?id=${id}`);
      return note
    } catch (err) {
      throw new Error(err.message)
    }
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

  testError() {
    throw new Error("Error teste.")
  }
}
