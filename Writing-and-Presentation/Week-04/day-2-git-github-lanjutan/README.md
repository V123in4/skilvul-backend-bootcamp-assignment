# Git dan GitHub Lanjutan
# Branching
branching pada git merupakan proses pembuatan sebuah cabang dari sebuah kode lama sehingga tidak ada perubahan pada cabang lama. Cabang baru yang dibuat dapat kita edit, tambah, ataupun hapus. Tanpa ada perubahan samasekali pada cabang lama.
## Buat Branch
```sh
# pembuatan branch di git
$ git branch <nama_branch>
```
## Mengganti Branch yang Digunakan
```sh
$ git checkout <nama_branch>
```
branch dapat dibuat sekaligus mengganti ke branch tersebut dengan cara
```sh
$ git checkout -b <nama_branch> 
```
## Liat Branch
untuk melihat seluruh branch yang ada di git repository, dapat menggunakan:
```sh
$ git branch
```
## Hapus Branch
branch dapat dihapus menggunakan perintah:
```
$ git branch -d <nama_branch>
```
perlu diingat penghapusan branch tidak dapat dilakukan pada branch yang **aktif** (sedang dipilih)
## Merging Branch
sebelum melakukan git branch pastikan untuk memilih branch yang menerima dari branch lainnya sebagai HEAD dengan cara `git checkout <nama_branch>`.

kemudian perintah `git merge <nama_branch_lain>` dijalankan sehingga kedua branch tersebut digabungkan

```
$ git merge <nama_branch> -m "pesan"
```

contoh kita akan membuat sebuah branch `dev` dan menggabungkan branch dev ke branch `main`.

```sh
$ git checkout -b dev
# anggap buat perubahan disini
$ git commit -m "message"
# ingin melakukan merging ke branch main 
# 1. checkout ke main sehingga menjadi head
$ git checkout main
# 2. merge dev -> main 
$ git merge dev -m "v1.1"
# 3. umumnya setelah di merge branch dihapus
$ git branch -d "dev"
```



# Conflict and resolving
konflik terjadi ketika ada yang merubah sebuah file pada baris yang sama.

mungkin lebih mudah dimengerti jika kita menejelaskannya menggunakan kasus.

anggap disini ada 2 branch bernama `branch_saya` dan `branch_dia`. 

kedua branch berisikan file yang sama bernama text.txt isi text.txt sebagai berikut
```
merah
kuning
hijau
```
### Branch saya
pada branch saya isi file text.txt dirubah menjadi
```
merah
kuning
hijau
dilangit
biru
```

### Branch dia
pada branch dia isi file text.txt dirubah menjadi
```
merah
kuning
hijau
apple
anggur
```

jika diperhatikan branch dia dan branch saya memngubah baris yang sama yaitu 4 dan 5 sehingga, jika dilakukan `git merge` akan terjadi konflik,

untuk menyelesaikan konflik dapat melakukan 3 hal, pertama memilih perubahan dari `branch_dia`, mimilih perubahan dari `branch_saya` atau menyimpan kedua perubahan 

jika `git merge branch_dia` berasumsi head pada `branch_saya`. 

maka perubahan yang masuk adalah `branch_dia`. untuk menyelesaikan masalah dapat memilih **accept incoming changes**. sehingga branch saya menjadi

```
merah
kuning
hijau
apple
anggur
```

jika memilih **accept current changes** untuk memilih perubahan `branch_saya`. sehingga file menjadi
```
merah
kuning
hijau
dilangit
biru
```

jika memilih `accept both changes` maka perubahan kedua file akan ditambahkan berurutan 