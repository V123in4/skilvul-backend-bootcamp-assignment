# Docker
## Apa fungsi docker?
docker adalah sebuah aplikasi untuk memvirtualisasikan sebuah sistem operasi kepada sebuah aplikasi yang telah dibuat. Terjadi ketika sebuah aplikasi dibuat di linux, tetapi harus dijalankan di windows jika programmer tidak menambahkan support untuk itu maka aplikasi tersebut tidak dapat dijalankan. Untuk mengatasi masalah tersebut kita dapat menggunakan docker

## Cara kerja docker
secara garis besar docker bekerja seperti virtual machine. Tetapi docker tidak menyimulasikan keseluruhan hardware hanya software saja. Docker jauh lebih ringan dibandingkan virtual machine biasa. Software yang disimulasikan adalah **kernel** dan aplikasi berjalan di sebuah kontainer yang terisolasi dari sistem operasi utama.

Docker file -> docker image -> kontainer

**docker file** adalah file kode yang berisikan cara untuk membuat sebuah image. docker file juga berisikan depedency dan sistem operasi.

**image** sebuah file yang tidak dapat dirubah yang digunakan sebagai template untuk menjalankan sebuah container.

**kontainer** adalah tempat dimana aplikasi kita dijalankan. kontainer terisolasi dari sistem operasi utama.

## Perintah dasar docker
perintah docker dijalankan pada cli docker sendiri bukan pada terminal sistem.
```bash
docker pull ubuntu # download image dari cloud disini menggunakan ubuntu
docker images # melihat image yang sudah didownlod
docker run # menjalankan kontainer untuk aplikasi
docker ps # melihat kontainer yang sedang berjalan
```

## Membuat file docker dasar
perintah yang digunakan untuk membuat aplikasi node js berjalan pada sebuah container di docker
``` docker
# import image dari cloud
FROM ubuntu

# buka shell dan jalanakan perintah
RUN apt install node

# nyatakan direktori kerja disini . menandakan root
WORKDIR .

# copy file dari root kita ke root container
COPY . .

# sebuah command yang akan dijalakan docker
CMD [“node”, “app.js”]
```