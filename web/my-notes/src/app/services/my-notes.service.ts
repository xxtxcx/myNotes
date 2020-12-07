import { Injectable } from '@angular/core';
import { TheNote } from '../interfaces/the-note';
import { StorageService} from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyNotesService {


  private myNotesSubject: Subject<TheNote[]> = new Subject<TheNote[]>();
  private headers = new HttpHeaders().set('Content-Type', 'application/json');




  constructor(private storageService: StorageService,
    private http: HttpClient) {
      this.retrieveListFromDataBase();
    }


  //GET
  retrieveListFromDataBase() {
    this.http.get<TheNote[]>('http://localhost:44305/api/Notes').subscribe(
      response => this.myNotesSubject.next(response)
    );
  }

  //GET
  getNotes() {
    return this.myNotesSubject.asObservable();;
  }

  //POST
  addItem(item: TheNote) {
    this.http.post('http://localhost:44305/api/Notes',
      JSON.stringify({title: item.title}),
      {headers: this.headers}).subscribe(
      () => this.retrieveListFromDataBase(),
      () => {},
      () => {}
    );
  }


  //PUT
  updateItem(item: TheNote) {
    return this.http.put(`http://localhost:44305/api/Notes/${item._id}`,
      JSON.stringify({
        ...item,

      }),
      {headers: this.headers}).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }

  //DELETE
  deleteItem(item) {
    return this.http.delete(`http://localhost:44305/api/Notes/${item._id}`).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }
}






