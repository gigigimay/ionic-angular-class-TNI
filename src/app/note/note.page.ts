import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  key: string;
  topic: string;
  dueDate: string;

  isToggle: boolean;
  isAdd: boolean;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.topic = '';
    this.isToggle = false;
    this.isAdd = false;
    this.dueDate = new Date().toString();

    this.showData();
  }

  showData() {
    this.itemsRef = this.db.list('/');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  // save or edit data
  save(note: any) {
    if (this.isAdd) {
      this.itemsRef.push({ note });
    } else if (this.key) {
      this.itemsRef.update(this.key, { note });
    }
    this.isToggle = false;
    this.isAdd = false;
  }

  openForm() {
    this.isToggle = this.isAdd ? !this.isToggle : true;
    this.isAdd = this.isToggle;
  }

  select(item) {
    const { note, key } = item;
    const { topic, dueDate } = note;
    this.key = key;
    this.topic = topic;
    this.dueDate = dueDate;
    this.isToggle = true;
    this.isAdd = false;
  }

}
