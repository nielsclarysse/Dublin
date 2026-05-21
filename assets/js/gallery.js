const galleryData = [
  {
    date: "Day 1",
    images: [
      "assets/images/gallery-pictures/Test-Image.jpg",
      // "assets/images/gallery-pictures/02-02-2026/photo2.jpg",
    ]
  },
    {
    date: "Day 2",
    images: [
      "assets/images/gallery-pictures/Test-Image.jpg",
      // "assets/images/gallery-pictures/02-02-2026/photo2.jpg",
    ]
  },
    {
    date: "Day 3",
    images: [
      "assets/images/gallery-pictures/Test-Image.jpg",
      // "assets/images/gallery-pictures/02-02-2026/photo2.jpg",
    ]
  },
    {
    date: "Day 4",
    images: [
      "assets/images/gallery-pictures/Test-Image.jpg",
      // "assets/images/gallery-pictures/02-02-2026/photo2.jpg",
    ]
  },
    {
    date: "Hotel",
    images: [
      "assets/images/gallery-pictures/Test-Image.jpg",
      // "assets/images/gallery-pictures/02-02-2026/photo2.jpg",
    ]
  },
];

// --- Render gallery ---

const gallery = document.querySelector(".gallery");

// Collect all images in order for lightbox navigation
const allImages = [];

galleryData.forEach(section => {
  if (section.images.length === 0) return;

  const sectionEl = document.createElement("div");
  sectionEl.className = "gallery-section";

  const title = document.createElement("p");
  title.className = "gallery-section-title";
  title.textContent = section.date;
  sectionEl.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "gallery-section-photos";

  section.images.forEach(src => {
    const index = allImages.length;
    allImages.push(src);

    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = src.split("/").pop();
    img.addEventListener("click", () => openLightbox(index));

    item.appendChild(img);
    grid.appendChild(item);
  });

  sectionEl.appendChild(grid);
  gallery.appendChild(sectionEl);
});

// --- Lightbox ---

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = allImages[currentIndex];
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
  lightboxImg.src = allImages[currentIndex];
}

function showNext() {
  currentIndex = (currentIndex + 1) % allImages.length;
  lightboxImg.src = allImages[currentIndex];
}

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", showPrev);
document.getElementById("lightbox-next").addEventListener("click", showNext);

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "Escape") closeLightbox();
});
