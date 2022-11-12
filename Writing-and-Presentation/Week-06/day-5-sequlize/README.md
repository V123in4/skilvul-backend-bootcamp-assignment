<!-- inisialisasi sequelize di working dir
npx sequelize-cli init

buat file model
npx sequelize-cli model:generate --name nama_table --attributes nama_coloumn1:tipe_data_coloumn1,nama_coloumn2:tipe_data_coloumn2, ... nama_coloumnN:tipe_data_coloumnN
npx sequelize-cli model:generate --name user --attributes email:string,firstName:string,lastName:string,umur:integer,birthDate:date

migrate db, setelah model dibuat, migrate dilakukan untuk membuat tabel di db
npx sequelize-cli db:migrate

jika ada kesalahan bisa memakai perintah
sequelize-cli db:migrate:undo # akan undo migration terakhir
npx sequelize-cli db:migrate:undo:all # seluruh migrasi akan direvert
npx sequelize-cli db:migrate:undo:all --to nama_file.js # revert migrasi dengan nama file di folder migration  -->

# Apa yang dimaksud dengan sequelize?
Sequeilze merupakan libary ORM Object Relaion Mapping yang dapat digunakan untuk mempermudah querying ke server. 

jika sebelumnya dengan library mysql2 query yang digunakan static dan bisa bilang lebih sulit diimplementasikan dibandingkan dengan sequelize. Oleh karena itu sequelize lebih banyak digunakan, disamping syntax sweetening sequelize juga dapat menyambungkan ke tipe database lainnya selain mysql tanpa merubah kode sebarispun. prosedur yang perlu kita lakukan adalah merubah konfigurasi di file config.json dibagian dialect.

# Installasi sequelize pada workspace
Menginstall sequelize dapat menggunakan perintah berikut.
```bash
npm install -D sequelize-cli # menginstall mysequel-cli di developemen
npm install sequelize # menginstall library my sequel untuk dijalankan 
npm install mysql2 # menginstall mysql2 untuk melakukan query ke database
```

# Mebuat tabel menggunakan sequelize
secara garis besar flow untuk sequelize sebagai berikut

```
init -> create_db -> create_model -> migrate -> seed
init = menyiapkan folder
create_db = membuat db menggunakan sequelize
create_model = semacam membuat tabel di sequelize
migrate = meletakan tabel di database setelah dibuat model di sequelize
seed = digunakan untuk querying ke database
```

### Inisialisasi sequelize
```bash
npx sequelize-cli init
# init digunakan untuk membuat file config, model, seeder, dan migration.
```

### Membuat database
```bash
npx sequelize db:create
# membuat database berdasarkan config, database bisa dibuat jika 
# akses yang diberikan sesuai
```

### Membuat model
model disini bersifat seperti tabel tetapi bukan tabel, disini primary key id akan dibuat secara otomatis
```bash
npx sequelize-cli model:generate --name nama_table --attributes nama_coloumn1:tipe_data_coloumn1,nama_coloumn2:tipe_data_coloumn2, ... nama_coloumnN:tipe_data_coloumnN
```

### Migrasi model
migrasi dilakukan untuk memindahkan model tadi menjadi tabel di database
```bash
npx sequelize-cli db:migrate
```
jika terjadi kesalahan dalam pembuatan model, migrasi dapat diedit dengan cara
```bash
sequelize-cli db:migrate:undo # akan undo migration terakhir
npx sequelize-cli db:migrate:undo:all # seluruh migrasi akan direvert
npx sequelize-cli db:migrate:undo:all --to nama_file # revert migrasi dengan nama file di folder migration 
```

# Uhh apa yang terjadi?
penjelasan diatas tentang membuat sebuah tabel, belum sampai insert atau manipulasi data menggunakan sequelize.