import { Component, OnInit } from '@angular/core';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

const dataDB = {
  name: 'data.db',
  location: 'default'
};

const SQL_COMMANDS = {
  create: 'CREATE TABLE IF NOT EXISTS Customers(id INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT, phone TEXT)',
  insert: 'INSERT INTO Customers(fullname, phone) VALUES(?,?)',
  select: 'SELECT * FROM Customers ORDER BY id DESC;',
  delete: 'DELETE FROM Customers WHERE id=?',
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
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    console.log('customers init!');
    this.isOpen = false;
    this.platform.ready().then(() => {
      // create a db
      this.sqlite.create(dataDB).then((db: SQLiteObject) => {
        db.executeSql(SQL_COMMANDS.create, [])
          .then(res => console.log('Executed SQL', res))
          .catch(e => console.error('execution error on CREATE TABLE', e));
      }).catch(e => console.error('connection error on CREATE TABLE', e));
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
      db.executeSql(SQL_COMMANDS.select, [])
        .then((res) => {
          this.customers = [];
          for (let i = 0; i < res.rows.length; i++) {
            const { id, fullname, phone } = res.rows.item(i);
            this.customers.push({ id, fullname, phone });
          }
        })
        .catch(e => console.error('error on SELECT sql', e));
    });
  }

  add(item: any) {
    const { fullname, phone } = item;
    this.sqlite.create(dataDB).then((db: SQLiteObject) => {
      db.executeSql(SQL_COMMANDS.insert, [fullname, phone])
        .then(async () => {
          const toast = await this.toastCtrl.create({
            message: 'Data inserted.',
            duration: 3000
          });
          toast.present();
          this.showData();
          this.isOpen = false;
        })
        .catch(e => console.error('error on INSERT', e));
    });
  }

  async delete(item: any) {
    const { id, fullname } = item;
    const confirm = await this.alertCtrl.create({
      header: 'Confirm delete?',
      message: `Are you sure you want to delete [${fullname}]`,
      buttons: [{ text: 'Cencel', },
      {
        text: 'Delete',
        handler: () => {
          this.sqlite.create(dataDB).then((db: SQLiteObject) => {
            db.executeSql(SQL_COMMANDS.delete, [id])
              .then(async () => {
                const toast = await this.toastCtrl.create({
                  message: 'Data deleted.',
                  duration: 3000
                });
                toast.present();
                this.showData();
              })
              .catch(e => console.error('error on DELETE', e));
          });
        }
      }]
    });
    confirm.present();
  }

  edit(item: any) {
    const { fullname, phone } = item;
    this.isOpen = true;
  }
}
