inisialisasi sequelize di working dir
npx sequelize-cli init

buat file model
npx sequelize-cli model:generate --name nama_table --attributes nama_coloumn1:tipe_data_coloumn1,nama_coloumn2:tipe_data_coloumn2, ... nama_coloumnN:tipe_data_coloumnN,
npx sequelize-cli model:generate --name user --attributes email:string,firstName:string,lastName:string,umur:integer,birthDate:date

migrate db, setelah model dibuat, migrate dilakukan untuk membuat tabel di db
npx sequelize-cli db:migrate

jika ada kesalahan bisa memakai perintah
sequelize-cli db:migrate:undo # akan undo migration terakhir
npx sequelize-cli db:migrate:undo:all # seluruh migrasi akan direvert
npx sequelize-cli db:migrate:undo:all --to nama_file.js # revert migrasi dengan nama file di folder migration 

catatan kelas