const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sajikan web app dari file index.html.
app.use(express.static(path.join(__dirname), {
  index: "index.html",
  extensions: ["html"]
}));

// Fallback untuk route selain file statis.
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Vercel menggunakan app yang diekspor; lokal menjalankan server pada port.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Web app lamaran berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app;
