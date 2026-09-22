# Panduan Lengkap: Dari Kode Sampai Website Online + QR Code

Panduan ini ditulis untuk pemula. Ikuti dari atas ke bawah, jangan lompat-lompat.
Simbol 📱 menandai langkah khusus untuk yang mengerjakan lewat HP.

---

## A. Isi Folder yang Kamu Terima

Kamu menerima folder bernama **`website-tanaman`** dengan isi seperti ini:

```
website-tanaman/
├── index.html
├── tanaman.html
├── tentang.html
├── tanaman/
│   ├── cabai-keriting.html
│   ├── cabai-setan.html
│   ├── pandan.html
│   ├── terong.html
│   ├── jeruk-limau.html
│   └── tomat.html
├── qr/
│   └── index.html
├── css/
│   └── style.css
├── js/
│   ├── plants-data.js
│   └── script.js
└── images/
    ├── cabai-keriting.jpg
    ├── cabai-setan.jpg
    ├── pandan.jpg
    ├── terong.jpg
    ├── jeruk-limau.jpg
    └── tomat.jpg
```

Kamu **tidak perlu membuat ulang file-file ini** — semua sudah jadi. Yang perlu kamu
lakukan hanya:

1. **Ganti foto tanaman.** Foto di folder `images/` sekarang masih foto contoh
   (gambar bulat sederhana bertuliskan nama tanaman), supaya kamu bisa langsung
   melihat tampilan website tanpa menunggu foto asli. Ganti file-nya dengan foto
   tanaman asli, dengan **nama file yang sama persis** (`cabai-keriting.jpg`,
   `cabai-setan.jpg`, `pandan.jpg`, `terong.jpg`, `jeruk-limau.jpg`, `tomat.jpg`).
   Kalau foto aslimu formatnya `.png`, kamu boleh pakai `.png`, tapi ingat harus
   mengubah juga nama file di `js/plants-data.js` (cari baris `image:`).
2. **Ganti identitas.** Buka file `index.html`, `tanaman.html`, `tentang.html`, dan
   file-file di dalam folder `tanaman/`, cari tulisan `[NAMA KELOMPOK]`,
   `[NAMA ANGGOTA]`, `[KELAS]`, `[NAMA SEKOLAH]`, lalu ganti dengan data kamu.
   Tips: pakai fitur **cari & ganti (Find & Replace)** supaya tidak perlu mengedit
   satu-satu di banyak file.
3. **Jangan ubah nama folder/file** (`tanaman/`, `qr/`, `css/`, `js/`, `images/`,
   dan nama-nama file di dalamnya) — nanti dijelaskan kenapa ini penting di bagian C.

📱 **Di HP:** Kamu tidak perlu membuat folder secara manual di penyimpanan HP.
Semua file ini nanti langsung di-upload ke GitHub lewat browser (dijelaskan di
bagian C). Kamu hanya perlu menyiapkan foto tanaman di galeri HP agar mudah dipilih
saat upload.

---

## B. Melihat Website Sebelum Online (Preview)

Sebelum di-upload ke internet, kamu bisa melihat dulu tampilannya:

**Di Komputer:**
1. Buka folder `website-tanaman`.
2. Klik dua kali file `index.html` — otomatis akan terbuka di browser (Chrome/Edge/dll).
3. Kamu akan melihat halaman Beranda. Coba klik menu "Daftar Tanaman", buka salah
   satu tanaman, dan coba tombol toggle **ID / EN**.

**Di HP (Android/iPhone):**
1. Buka aplikasi **File Manager** / **Berkas** di HP.
2. Cari folder `website-tanaman`, lalu ketuk `index.html`.
3. HP akan menawarkan untuk membuka file itu dengan **Chrome** atau browser lain — pilih itu.

> Catatan: Pada tahap preview ini, halaman **QR Code** (`qr/index.html`) mungkin
> belum menampilkan gambar QR jika HP/komputer kamu tidak terhubung internet, karena
> QR Code dibuat memakai library dari internet (`cdnjs.cloudflare.com`). Ini normal —
> setelah website online, dan browser kamu terhubung internet, QR Code akan muncul.

---

## C. Membuat Website Menjadi Online (PUBLIC)

Cara termudah dan gratis untuk pemula adalah **GitHub Pages**. Semua langkah di
bawah bisa dilakukan lewat **browser** (Chrome), baik di komputer maupun di HP.

### C.1 Membuat Akun GitHub (kalau belum punya)

1. Buka **github.com** di browser.
2. Ketuk/klik tombol **Sign up**.
3. Isi email, buat password, buat username (contoh: `budi-smk12`).
4. Ikuti proses verifikasi (biasanya isi kode dari email).
5. Setelah selesai, kamu akan masuk ke halaman utama GitHub (dashboard).

### C.2 Membuat Repository Baru

"Repository" adalah semacam folder proyek di GitHub tempat kamu menyimpan file website.

1. Di pojok kanan atas, ketuk **ikon "+"**, lalu pilih **"New repository"**.
   - 📱 Di HP, tombol "+" ini ada di bagian atas halaman, kadang perlu buka menu
     hamburger (☰) dulu jika tampilan HP berbeda.
2. Di kolom **Repository name**, ketik: `website-tanaman`
   (boleh nama lain, tapi ingat namanya karena akan muncul di alamat website).
3. Pilih **Public** (harus Public, bukan Private, supaya GitHub Pages bisa aktif gratis).
4. **Jangan centang** "Add a README file" (biar tidak bentrok saat upload nanti).
5. Ketuk tombol hijau **"Create repository"**.

### C.3 Upload Semua File Website

1. Di halaman repository yang baru dibuat, cari dan ketuk tombol **"Add file"**,
   lalu pilih **"Upload files"**.
2. Akan muncul area upload. Ketuk area itu (tulisan "choose your files") untuk
   membuka pemilih file, **atau** kalau di komputer, drag semua isi folder ke situ.
3. **Yang di-upload adalah ISI folder `website-tanaman`, bukan folder itu sendiri.**
   Artinya: pilih `index.html`, `tanaman.html`, `tentang.html`, `PANDUAN.md`, dan
   folder `tanaman/`, `qr/`, `css/`, `js/`, `images/` — semuanya sekaligus, lalu upload.
   - Kebanyakan browser mendukung upload folder lengkap (subfolder ikut ter-upload).
     Jika opsi upload folder tidak muncul di HP kamu, upload dulu file-file yang ada
     di folder utama (`index.html`, dst), lalu ulangi langkah **"Add file → Upload
     files"** untuk masing-masing subfolder (buka subfolder itu dulu di GitHub,
     baru upload isinya).
4. Setelah semua file terlihat masuk di daftar (bagian bawah halaman), scroll ke
   bawah, ketuk tombol hijau **"Commit changes"** (biarkan pesan commit apa adanya).

### C.4 Mengaktifkan GitHub Pages

1. Di halaman repository, ketuk tab **"Settings"** (ikon gerigi ⚙️, di deretan menu
   atas repository — Code, Issues, Pull requests, ... , Settings).
2. Di menu sebelah kiri, ketuk **"Pages"**.
3. Pada bagian **"Build and deployment" → "Source"**, pilih **"Deploy from a branch"**.
4. Pada bagian **"Branch"**, pilih **`main`** (atau `master`, sesuai nama branch
   repositorymu) dan folder **`/ (root)`**, lalu ketuk **"Save"**.
5. Tunggu 1-2 menit. Refresh halaman Settings → Pages tadi. Akan muncul kotak hijau
   bertuliskan sesuatu seperti:
   > "Your site is live at `https://namakamu.github.io/website-tanaman/`"
6. **Salin (copy) alamat URL tersebut** — ini alamat website kamu yang sudah online!

### C.5 Alternatif: Netlify (opsional, lebih cocok di komputer)

Kalau kamu mengerjakan dari komputer dan ingin cara yang lebih simpel tanpa akun
GitHub, bisa juga pakai Netlify:

1. Buka **app.netlify.com/drop**.
2. **Drag & drop** folder `website-tanaman` (folder lengkap) ke halaman tersebut.
3. Netlify otomatis meng-upload dan memberi alamat website (contoh:
   `https://nama-acak.netlify.app`).
4. Alamat ini bisa langsung dipakai sebagai `BASE_URL` (lihat bagian D).

> Untuk pemula yang mengerjakan lewat HP, **GitHub Pages tetap direkomendasikan**
> karena prosesnya lewat browser biasa dan filenya tersimpan rapi.

---

## D. Mengganti BASE_URL Setelah Website Online

Setelah kamu punya URL website (contoh: `https://namakamu.github.io/website-tanaman/`),
kamu harus memberitahu website tentang alamat ini, supaya QR Code mengarah ke
alamat yang benar (bukan ke `website-saya.com` yang cuma contoh).

1. Buka repository `website-tanaman` di GitHub.
2. Buka folder **`js`**, lalu ketuk file **`script.js`**.
3. Ketuk ikon **pensil (✏️ Edit this file)** di pojok kanan atas tampilan file.
   (Fitur ini ada langsung di website GitHub — kamu **tidak perlu aplikasi tambahan**,
   jadi ini juga cara termudah untuk mengedit lewat HP.)
4. Cari baris paling atas:
   ```js
   const BASE_URL = "https://website-saya.com";
   ```
5. Ganti bagian di dalam tanda kutip dengan URL website kamu, **tanpa garis miring
   "/" di akhir**. Contoh:
   ```js
   const BASE_URL = "https://namakamu.github.io/website-tanaman";
   ```
6. Scroll ke bawah, ketuk **"Commit changes..."**, lalu ketuk tombol hijau
   **"Commit changes"** sekali lagi untuk menyimpan.
7. Tunggu sekitar 30-60 detik, GitHub Pages akan otomatis memperbarui websitemu.

---

## E. Membuat & Menggunakan QR Code

1. Buka website kamu yang sudah online, lalu buka halaman **`/qr/`**
   (contoh: `https://namakamu.github.io/website-tanaman/qr/index.html`).
2. Pastikan **peringatan kuning** ("BASE_URL masih contoh") **sudah tidak muncul**
   lagi — kalau masih muncul, berarti langkah D belum berhasil tersimpan.
3. Di halaman itu akan muncul 6 kotak QR Code, masing-masing untuk satu tanaman,
   lengkap dengan alamat URL tujuannya di bawah QR (untuk kamu periksa).
4. **Cara mengecek QR Code benar:**
   - Pindai QR "Cabai Keriting" dengan kamera HP lain (atau HP yang sama, buka
     kamera lalu arahkan ke layar) → pastikan halaman yang terbuka adalah halaman
     **Cabai Keriting**, bukan halaman lain.
   - Ulangi untuk kelima tanaman lainnya.
5. **Download QR Code:** ketuk tombol **"Download QR"** di bawah tiap QR Code —
   gambar QR akan otomatis tersimpan sebagai file PNG di HP/komputer kamu.
6. **Mencetak:** buka file PNG yang sudah didownload lewat aplikasi galeri/foto,
   lalu cetak seperti mencetak foto biasa (lewat printer, studio foto, atau print shop).
   Usahakan ukuran cetak minimal 4x4 cm supaya mudah dipindai.
7. **Menempel:** tempelkan hasil cetak QR Code di dekat tanaman yang sesuai
   (misalnya di pot atau ditusuk dengan tusukan label taman), pastikan permukaannya
   rata dan tidak mudah basah terkena air/hujan (bisa dilaminating).

---

## F. Checklist Testing

Setelah semua langkah di atas selesai, cek satu per satu:

- [ ] Website bisa dibuka di HP
- [ ] Halaman Cabai Keriting bisa dibuka
- [ ] Halaman Cabai Setan bisa dibuka
- [ ] Halaman Pandan bisa dibuka
- [ ] Halaman Terong bisa dibuka
- [ ] Halaman Jeruk Limau bisa dibuka
- [ ] Halaman Tomat bisa dibuka
- [ ] Toggle bahasa ID/EN bekerja di setiap halaman
- [ ] Semua gambar/foto tanaman muncul (bukan ikon gambar rusak)
- [ ] QR Cabai Keriting → membuka halaman Cabai Keriting
- [ ] QR Cabai Setan → membuka halaman Cabai Setan
- [ ] QR Pandan → membuka halaman Pandan
- [ ] QR Terong → membuka halaman Terong
- [ ] QR Jeruk Limau → membuka halaman Jeruk Limau
- [ ] QR Tomat → membuka halaman Tomat

Kalau ada yang gagal, cek kembali:
- Nama file gambar di `images/` harus **sama persis** (huruf kecil semua, pakai
  tanda hubung "-", bukan spasi) dengan yang tertulis di `js/plants-data.js`.
- BASE_URL di `js/script.js` harus sudah diganti (lihat bagian D) dan **tidak**
  diakhiri tanda "/".
- Folder `tanaman/`, `qr/`, `css/`, `js/`, `images/` harus ikut ter-upload ke
  GitHub (cek langsung di halaman repository, pastikan semua folder itu terlihat).

---

## Ringkasan Alur

```
File website (HTML/CSS/JS)
        ↓
Upload ke GitHub (repository "website-tanaman")
        ↓
Aktifkan GitHub Pages (Settings → Pages)
        ↓
Dapat URL website (https://namakamu.github.io/website-tanaman/)
        ↓
Ganti BASE_URL di js/script.js dengan URL itu
        ↓
Buka halaman /qr/, download & cetak QR Code
        ↓
Tempel QR Code di tanaman fisik
        ↓
Orang scan → langsung ke halaman tanaman yang benar 🎉
```
