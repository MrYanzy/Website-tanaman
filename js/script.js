// ==========================================================
// SCRIPT.JS
// ==========================================================
// PENTING: Ganti BASE_URL di bawah ini SETELAH website sudah
// online (misalnya sudah aktif di GitHub Pages). Sebelum itu,
// biarkan saja seperti contoh ini.
//
// Contoh setelah online di GitHub Pages:
// const BASE_URL = "https://namakamu.github.io/website-tanaman";
//
// JANGAN diakhiri tanda garis miring "/" di bagian akhir.
// ==========================================================
const BASE_URL = "https://github.com/MrYanzy/Website-tanaman.git";

// ==========================================================
// BAGIAN 1: TOGGLE BAHASA (Indonesia / English)
// ==========================================================

function getSavedLang() {
  try {
    return localStorage.getItem("site-lang") || "id";
  } catch (e) {
    return "id";
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem("site-lang", lang);
  } catch (e) {
    // Jika localStorage tidak tersedia, bahasa tidak disimpan.
    // Website tetap berjalan normal, hanya tidak "diingat".
  }
}

function applyLang(lang) {
  document.body.classList.remove("lang-id", "lang-en");
  document.body.classList.add(lang === "en" ? "lang-en" : "lang-id");

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });

  document.documentElement.setAttribute("lang", lang);

  // Beri tahu bagian lain (misalnya card tanaman) supaya render ulang
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

function initLangToggle() {
  const lang = getSavedLang();
  applyLang(lang);

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const chosen = btn.getAttribute("data-lang-btn");
      saveLang(chosen);
      applyLang(chosen);
    });
  });
}

function currentLang() {
  return document.body.classList.contains("lang-en") ? "en" : "id";
}

// ==========================================================
// BAGIAN 2: CARD TANAMAN (dipakai di Beranda & Daftar Tanaman)
// ==========================================================

function plantUrl(slug) {
  // Beberapa hosting tidak butuh ".html" di akhir URL, tapi
  // menuliskannya secara eksplisit membuat link selalu bekerja
  // di GitHub Pages / Netlify tanpa pengaturan tambahan.
  return BASE_URL + "/tanaman/" + slug + ".html";
}

function plantLocalHref(slug) {
  // Dipakai untuk link <a> di dalam website itu sendiri (relatif),
  // supaya tetap berfungsi walau BASE_URL belum diganti.
  return "tanaman/" + slug + ".html";
}

function buildPlantCard(slug, data, basePathPrefix) {
  const lang = currentLang();
  const t = data[lang];
  const viewLabel = lang === "en" ? "View Details" : "Lihat Detail";

  const card = document.createElement("div");
  card.className = "plant-card";
  card.innerHTML =
    '<img src="' +
    basePathPrefix +
    data.image +
    '" alt="' +
    t.name +
    '">' +
    '<div class="plant-card-body">' +
    "<h3>" +
    t.name +
    "</h3>" +
    '<p class="latin">' +
    data.id.latin +
    "</p>" +
    '<a class="btn" href="' +
    basePathPrefix +
    "tanaman/" +
    slug +
    '.html">' +
    viewLabel +
    "</a>" +
    "</div>";
  return card;
}

// containerId  : id elemen tempat card dimasukkan
// basePathPrefix: "" jika file ada di folder utama, "../" jika di dalam subfolder
// limit        : jumlah tanaman yang ditampilkan (kosongkan untuk semua)
// searchValue  : kata kunci pencarian (opsional)
function renderPlantCards(containerId, basePathPrefix, limit, searchValue) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  const keyword = (searchValue || "").trim().toLowerCase();

  let slugs = plantsOrder.slice();
  if (limit) {
    slugs = slugs.slice(0, limit);
  }

  let shown = 0;
  slugs.forEach(function (slug) {
    const data = plantsData[slug];
    const lang = currentLang();
    const name = data[lang].name.toLowerCase();
    const latin = data.id.latin.toLowerCase();

    if (keyword && name.indexOf(keyword) === -1 && latin.indexOf(keyword) === -1) {
      return;
    }

    container.appendChild(buildPlantCard(slug, data, basePathPrefix || ""));
    shown++;
  });

  const emptyMsg = document.getElementById(containerId + "-empty");
  if (emptyMsg) {
    emptyMsg.style.display = shown === 0 ? "block" : "none";
  }
}

// ==========================================================
// BAGIAN 3: HALAMAN DETAIL TANAMAN
// ==========================================================
// Setiap halaman tanaman/xxx.html sudah berisi teks ID & EN
// secara langsung di HTML (di dalam <span class="lang-id-text">
// dan <span class="lang-en-text">), jadi toggle bahasa cukup
// diatur lewat CSS (lihat class "lang-id" / "lang-en" di body).
// Bagian ini hanya dipakai untuk mengisi judul tab browser.
function setupDetailPage(slug) {
  const data = plantsData[slug];
  if (!data) return;

  document.addEventListener("langchange", function (e) {
    document.title = data[e.detail].name + " - Website Tanaman Sekolah";
  });
  document.title = data[currentLang()].name + " - Website Tanaman Sekolah";
}

// ==========================================================
// BAGIAN 4: HALAMAN QR CODE
// ==========================================================

function renderQRCodes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  plantsOrder.forEach(function (slug) {
    const data = plantsData[slug];
    const url = plantUrl(slug);

    const card = document.createElement("div");
    card.className = "qr-card";

    const qrBoxId = "qrbox-" + slug;

    card.innerHTML =
      "<h3>" +
      data.id.name +
      "</h3>" +
      '<p class="latin">' +
      data.id.latin +
      "</p>" +
      '<div class="qr-box" id="' +
      qrBoxId +
      '"></div>' +
      '<p class="qr-caption">Scan untuk melihat informasi tanaman</p>' +
      '<p class="qr-url">' +
      url +
      "</p>" +
      '<button class="btn" data-download="' +
      slug +
      '">Download QR</button>';

    container.appendChild(card);

    // Buat QR code di dalam kotak yang baru saja ditambahkan
    /* global QRCode */
    new QRCode(document.getElementById(qrBoxId), {
      text: url,
      width: 160,
      height: 160,
      colorDark: "#2b2b26",
      colorLight: "#ffffff",
    });
  });

  // Tombol download: ambil gambar QR yang sudah dibuat lalu unduh sebagai PNG
  container.querySelectorAll("[data-download]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const slug = btn.getAttribute("data-download");
      const box = document.getElementById("qrbox-" + slug);
      const img = box.querySelector("img") || box.querySelector("canvas");
      if (!img) return;

      const link = document.createElement("a");
      link.download = "qr-" + slug + ".png";
      link.href = img.src || img.toDataURL("image/png");
      link.click();
    });
  });
}
