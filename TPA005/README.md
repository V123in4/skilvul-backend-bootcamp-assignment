- Buatlah sebuah Web Service dan RESTful API untuk sebuah ToDoList Application.
- Web service dan RESTful API yang dibuat harus menggunakan `Express.js`.
- Web service dan RESTful API yang dibuat harus bisa digunakan untuk CRUD standar sebuah ToDoList.
- Database bisa menggunakan MySQl atau MongoDB.
- Jika menggunakan database MySQL, maka gunakan `sequelize-cli` untuk membuat `model`, `migration`, dan `seeder`, dan gunakan `sequelize` untuk mengakses database.
- Jika menggunakan database `MongoDB`, maka gunakan `mongoose` untuk mengakses database.
- Minimal ada endpoint untuk:
  1 Membuat user baru (Register)
  2 Login
  3 Membuat todo baru
  4 Melihat semua todo
  5 Melihat detail todo
  6 Mengubah todo
  7 Menghapus todo
  8 Menghapus semua todo
- Harus menerapkan `authentication` dan `authorization`.
- Harus menerapkan `response code` yang sesuai.
- Buatlah sebuah file `readme.md` yang berisi dokumentasi dari web service dan RESTful API yang dibuat.
<!-- - Deploy web service dan RESTful API yang dibuat ke cloud platform (`Heroku`, `AWS`, `Google` `Cloud`, `Azure`, dsb). -->

endpoints:
1. register
2. login
3. todos/new buat todo baru
4. todos liat semua todo
5. todos/detail
6. todos/edit/:id
7. todos/delete/:id
8. todos/delete
