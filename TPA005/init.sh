npm install

# buat database
npx sequelize-cli db:create

# model tidak dibuat karena sudah ada
# npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string
# npx sequelize-cli model:generate --name todo_list --attributes title:string,description:string,check:boolean,id_user:integer

# migrasikan model ke database yang telah dibuat
npx db:migrate