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
# 3. umumnya dilakukan hapus branch
$ git branch -d "dev"
```

```
$ git merge <nama_branch> -m "pesan"
```

# Conflict and resolving
konflik terjadi ketika ada yang merubah sebuah file pada baris yang sama.
