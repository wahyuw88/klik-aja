# Web App Lamaran Wahyu untuk Khalda 💗

Web app lamaran interaktif satu halaman menggunakan Node.js + Express. Bisa dijalankan lokal dan disiapkan untuk deploy ke Vercel.

## Jalankan di komputer

1. Pastikan Node.js versi LTS sudah terpasang.
2. Ekstrak ZIP ini.
3. Buka terminal pada folder proyek.
4. Jalankan:

```bash
npm install
npm start
```

5. Buka http://localhost:3000

## Deploy ke Vercel

1. Upload folder proyek ini ke repository GitHub.
2. Import repository tersebut di Vercel.
3. Vercel akan membaca `vercel.json` dan `api/index.js`.
4. Deploy. Tidak perlu mengisi environment variable khusus.

## Struktur

- `index.html` — halaman interaktif, CSS, dan JavaScript.
- `server.js` — Express server untuk lokal dan ekspor app.
- `api/index.js` — entry point serverless Vercel.
- `package.json` — konfigurasi Node.js dan dependency.
- `vercel.json` — routing Vercel.

Tidak menggunakan database atau API eksternal.
