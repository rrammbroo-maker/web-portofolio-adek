// Ganti contoh di bawah dengan data piagam milikmu.
// image: nama file di folder assets/images/
// Ganti contoh di bawah dengan data sertifikat milikmu.
// Simpan gambar di folder assets/images/ dengan nama file yang sesuai.
const certificates = {
  academic: [
    { image:"a1.jpeg", title:"TOP 10 FINALIST", description:"Hijab Poster Competition, Brawijaya Fest 2023" },
    { image:"a2.jpeg", title:"2ND PLACE WINNER", description:"Hijab Muslimah Week Poster Competition 2023" },
    { image:"a3.jpeg", title:"PKMPI 2 FINALIST", description:"LP2PKM Competition 2022" },
    { image:"a4.jpeg", title:"3RD PLACE WINNER", description:"PMM Digital Poster Competition, University of Muhammadiyah Malang (UMM)" },
    { image:"a5.jpeg", title:"1ST PLACE WINNER", description:"DOPAMIN Poster Competition 2023" },
    { image:"a6.jpeg", title:"4TH PLACE", description:"Outstanding Student Selection, Brawijaya University 2024" },
    { image:"a7.jpeg", title:"2ND PLACE WINNER", description:"National Camp POLKESMA Midwifery Student Poster Competition 2024" },
    { image:"a8.jpeg", title:"FINALIST", description:"SERUIX 2023" },
    { image:"a9.jpeg", title:"2ND PLACE WINNER", description:"HILARIUS Public Poster Competition 2023" },
    { image:"a10.jpeg", title:"GOLD MEDALIST", description:"Bahasa Indonesia National Science Competition 2024" },
    { image:"a11.jpeg", title:"GOLD MEDALIST", description:"Bahasa Indonesia National Science Competition 2025" },
    { image:"a12.jpeg", title:"3RD PLACE WINNER", description:"TKM LAKESMA Student-Level Poster Competition 2023" },
    { image:"a13.jpeg", title:"GOLD MEDALIST", description:"English National Science Competition 2025" },
    { image:"a14.jpeg", title:"1ST PLACE WINNER", description:"BEM STIKES Majapahit Mojokerto Poster Competition 2023" }
  ],
  nonAcademic: [
    { image:"p1.jpeg", title:"BADAN PENGURUS INTI", description:"Rapat Anggota Tahunan 2024" },
    { image:"p2.jpeg", title:"MASTER OF CEREMONY", description:"Midwifery Department FKUB Family Halal Bihalal 2023" },
    { image:"p3.jpeg", title:"CHIEF EXECUTIVE", description:"Midwive's Day 2022" },
    { image:"p4.jpeg", title:"VOLUNTEER", description:"Duduk Baca 2023" },
    { image:"p5.jpeg", title:"VOLUNTEER", description:"BAKSOSBID X MC 2022" },
    { image:"p6.jpeg", title:"STAFF MEDIA & INFORMATION", description:"Department IKAMABI 2023" },
    { image:"p7.jpeg", title:"SPEAKER", description:"SCENIC 2024 at Malang" },
    { image:"p8.jpeg", title:"MODERATOR", description:"Sekolah Volunteer BAKSOSBID 2023" },
    { image:"p9.jpeg", title:"MODERATOR", description:"Bina Karakter Mahasiswa FKUB 2024" },
    { image:"p10.jpeg", title:"SPEAKER", description:"UPGRADING 2024 at Malang" },
    { image:"p11.jpeg", title:"SPEAKER", description:"UTERY SISTA GATHERING 2024 at Malang" },
    { image:"p12.jpeg", title:"MODERATOR", description:"Road to Get Achievement IV 2022" },
    { image:"p13.jpeg", title:"MODERATOR", description:"Midwifery Entrepreneur Show 2022 " },
    { image:"p14.jpeg", title:"SPEAKER", description:"PKKMB FKUB 2023" },
    { image:"p15.jpeg", title:"MODERATOR", description:"SCENIC 2023 at Malang" },
    { image:"p16.jpeg", title:"MODERATOR", description:"HEARING Kebidanan Jenjang Sarjana FKUB 2023" },
    { image:"p17.jpeg", title:"MODERATOR", description:"Bina Karakter Mahasiswa PROBIN MABA UB 2023" },
    { image:"p18.jpeg", title:"JUDGE", description:"STAND Poster Competition 2023" },
    { image:"p19.jpeg", title:"STAFF MUDA", description:"External Department ARMABI FKUB 2022/2023" }
  ]
};



function renderCertificates() {
  const groups = [
    { key:"academic", target:"academicGrid", label: "AKADEMIK" },
    { key:"nonAcademic", target:"nonAcademicGrid", label: "NON-AKADEMIK" }
  ];
  groups.forEach(group => {
    const container = document.getElementById(group.target);
    container.innerHTML = certificates[group.key].map((item, index) => {
      const path = `assets/images/${item.image}`;
      const safeTitle = escapeHTML(item.title);
      const safeDescription = escapeHTML(item.description);
      return `<article class="certificate-card">
        <button class="certificate-image-button" type="button" data-image="${path}" data-caption="${safeTitle}" aria-label="Perbesar ${safeTitle}">
          <img src="${path}" alt="${safeTitle}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
          <span class="certificate-placeholder" style="display:none"><span>${safeTitle}</span><small>${item.image}</small></span>
        </button>
        <div class="certificate-info"><span class="category">${group.label} · ${String(index + 1).padStart(2,"0")}</span><h3>${safeTitle}</h3><p>${safeDescription}</p></div>
      </article>`;
    }).join("");
  });
  document.querySelectorAll(".certificate-image-button").forEach(button => {
    button.addEventListener("click", () => openLightbox(button.dataset.image, button.dataset.caption));
  });
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

const lightbox = document.getElementById("lightbox");
function openLightbox(src, caption) {
  const image = document.getElementById("lightboxImage");
  image.src = src;
  document.getElementById("lightboxCaption").textContent = caption;
  lightbox.classList.add("open");
}
function closeLightbox() { lightbox.classList.remove("open"); document.getElementById("lightboxImage").src = ""; }
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));

const audio = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
function updateMusicStatus(message) {
  musicStatus.textContent = message || (audio.paused ? "Musik belum diputar" : "Sedang diputar");
  musicToggle.textContent = audio.paused ? "▶" : "Ⅱ";
  musicToggle.setAttribute("aria-label", audio.paused ? "Putar musik" : "Jeda musik");
}
musicToggle.addEventListener("click", async () => {
  if (audio.paused) {
    try { await audio.play(); updateMusicStatus(); }
    catch { updateMusicStatus("Tambahkan file music.mp3"); }
  } else {
    audio.pause(); updateMusicStatus("Musik dijeda");
  }
});
audio.addEventListener("play", () => updateMusicStatus());
audio.addEventListener("pause", () => updateMusicStatus("Musik dijeda"));
audio.addEventListener("error", () => updateMusicStatus("Tambahkan file music.mp3"));

// Coba autoplay. Browser dapat menolak pemutaran bersuara tanpa interaksi pengguna.
window.addEventListener("load", async () => {
  try { await audio.play(); updateMusicStatus(); }
  catch { updateMusicStatus("Musik belum diputar"); }
});

document.getElementById("year").textContent = new Date().getFullYear();
renderCertificates();
