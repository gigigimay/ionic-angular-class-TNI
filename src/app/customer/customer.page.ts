import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

const dataDB = {
  name: 'data.db',
  location: 'default'
};

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  isOpen: boolean;
  customers: any[];

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.isOpen = false;
    this.platform.ready().then(() => {
      // create a db
      this.sqlite.create(dataDB).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS Customers(id INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT, phone TEXT)')
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      }).catch(e => console.log(e));
    });

    this.showData();
  }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

  // show data from Customers table, sort by id
  // and store the data in this.customers
  showData() {
    this.sqlite.create(dataDB).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM Customers ORDER BY id DESC;')
        .then(async (data) => {
          this.customers = [];
          const { rows } = await data;
          if (rows) {
            rows.forEach(d => {
              this.customers.push(d);
            });
          }

          const toast = await this.toastCtrl.create({
            // message: 'Data inserted.',
            message: JSON.stringify(data),
            duration: 3000
          });
          toast.present();
        })
        .catch(e => console.log(e));
    });
  }

  add(form: any) {
    this.sqlite.create(dataDB).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO Customers(fullname, phone) VALUES(?,?)', [form.fullname, form.phone])
        .then(async (data) => {
          const toast = await this.toastCtrl.create({
            // message: 'Data inserted.',
            message: JSON.stringify(data),
            duration: 3000
          });
          toast.present();
          this.showData();
          this.isOpen = false;
        })
        .catch(e => console.log(e));
    })
      .catch();
  }
}
