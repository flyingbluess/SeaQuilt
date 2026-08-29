/**
 * 澎湖【海被子】民宿官方網站 - JavaScript 互動腳本
 */

/* ===================================================================
   📸 民宿相簿相片清單 (想增加新照片？只要在下方複製一行新增即可！)
   ===================================================================
   分類說明 (category)：
   - 'balcony'    : 海景陽台
   - 'rooms'      : 房型實景
   - 'intertidal' : 潮間帶生態
   - 'exterior'   : 停車與環境
   =================================================================== */
const GALLERY_PHOTOS = [
  // 🌟 海景陽台與夕陽美景
  {
    src: 'assets/S__100237335.jpg',
    title: '絕美海景陽台夕陽',
    desc: '坐在陽台休閒椅上，欣賞夕陽金光灑落無垠海面與潮間帶',
    category: 'balcony',
    tag: '海景陽台'
  },
  {
    src: 'assets/01.jpg',
    title: '無敵海景雙人房・落地窗陽台',
    desc: '大面落地玻璃門直通觀海陽台，抬頭就是蔚藍天空與白雲',
    category: 'rooms',
    tag: '雙人房'
  },
  {
    src: 'assets/S__71901188_0.jpg',
    title: '大窗海景雙人房・全景海景窗',
    desc: '雙面大採光景觀窗飽覽碧海藍天，明亮採光與舒適大床',
    category: 'rooms',
    tag: '大窗雙人房'
  },
  {
    src: 'assets/S__73572517_0.jpg',
    title: '大窗海景雙人房・夕陽穿透',
    desc: '在舒適大床上飽覽海景與落日餘暉，靜享海島放鬆時刻',
    category: 'rooms',
    tag: '大窗雙人房'
  },

  // 🛏️ 一樓海景四人房 (NT$ 3,500)
  {
    src: 'assets/room_family.jpg',
    title: '一樓海景四人房・窗前海景',
    desc: '清晨陽光透過落地窗灑落床前，窗外即是蔚藍大海',
    category: 'rooms',
    tag: '四人房'
  },
  {
    src: 'assets/S__90914886_0.jpg',
    title: '一樓海景四人房・舒適雙大床',
    desc: '寬敞明亮的大空間，配置兩張標準雙人舒適大床與氣氛燈光',
    category: 'rooms',
    tag: '四人房'
  },
  {
    src: 'assets/S__90914883_0.jpg',
    title: '一樓海景四人房・全景空間',
    desc: '配有休憩小茶几、液晶電視、衣架與獨立衛浴設備',
    category: 'rooms',
    tag: '四人房'
  },

  // 🛏️ 無敵海景 & 大窗海景雙人房 (NT$ 2,450 / NT$ 2,000)
  {
    src: 'assets/S__70123562_0.jpg',
    title: '海景雙人房・質感原木空間',
    desc: '木質地板與典雅床組，配有現代質感化妝衛浴與休憩桌椅',
    category: 'rooms',
    tag: '雙人房'
  },
  {
    src: 'assets/room_double.jpg',
    title: '海景客房・寬敞格局視角',
    desc: '大面落地採光搭配自然木質家具，氛圍溫馨放鬆',
    category: 'rooms',
    tag: '雙人房'
  },
  {
    src: 'assets/S__68886623_0.jpg',
    title: '雙房海景夕陽透光視角',
    desc: '黃昏時刻溫暖的落日夕陽灑滿整個客房空間',
    category: 'rooms',
    tag: '房型實景'
  },

  // 🏡 一樓休閒公區、外觀與停車場
  {
    src: 'assets/LINE_ALBUM_房間_260413_3.jpg',
    title: '一樓海景大客廳與落地窗採光',
    desc: '大面全景玻璃窗將陽光與波光粼粼的蔚藍海景完美引入室內',
    category: 'exterior',
    tag: '民宿公區'
  },
  {
    src: 'assets/hero.jpg',
    title: '海被子民宿・純白別墅外觀',
    desc: '座落於海岸第一排的現代白色建築，伴隨夕陽天際線',
    category: 'exterior',
    tag: '建築外觀'
  },
  {
    src: 'assets/parking_exterior.jpg',
    title: '海被子民宿專屬好停車場',
    desc: '民宿門前劃設專屬獨立大車位，自駕租車免找車位超便利',
    category: 'exterior',
    tag: '專屬停車'
  },

  // 🦀 潮間帶生態實景
  {
    src: 'assets/intertidal.jpg',
    title: '鄰近潮間帶・清澈潮池生態',
    desc: '出門步行數分鐘即可抵達，清澈潮池中隨處可見野生小螃蟹與魚蝦',
    category: 'intertidal',
    tag: '潮間帶'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
  initDatePickers();
  initSmoothScroll();
  initGallery();
});

/* ===================================================================
   1. Navbar Scroll & Mobile Menu Toggle
   =================================================================== */
function initNavbar() {
  const header = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Scroll listener for sticky header background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileDrawer.classList.contains('open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Auto close drawer when link clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // Active navigation link highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   2. Photo Gallery & Lightbox Viewer
   =================================================================== */
let currentLightboxIndex = 0;
let filteredPhotos = [...GALLERY_PHOTOS];

function initGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');

  if (!galleryGrid) return;

  renderGallery('all');

  // Category filter tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderGallery(filter);
    });
  });

  // Lightbox keyboard navigation
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (modal && modal.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'ArrowRight') nextLightboxImage();
    }
  });
}

function renderGallery(filter) {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  if (filter === 'all') {
    filteredPhotos = [...GALLERY_PHOTOS];
  } else {
    filteredPhotos = GALLERY_PHOTOS.filter(p => p.category === filter);
  }

  filteredPhotos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', photo.category);
    item.onclick = () => openLightbox(index);

    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}" loading="lazy">
      <div class="gallery-zoom-icon">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>
      <div class="gallery-item-overlay">
        <span class="gallery-item-tag">${photo.tag}</span>
        <div class="gallery-item-info">
          <div class="gallery-item-title">${photo.title}</div>
          <div class="gallery-item-desc">${photo.desc}</div>
        </div>
      </div>
    `;

    galleryGrid.appendChild(item);
  });
}

window.openLightbox = function(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
};

window.prevLightboxImage = function() {
  if (filteredPhotos.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
  updateLightboxContent();
};

window.nextLightboxImage = function() {
  if (filteredPhotos.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredPhotos.length;
  updateLightboxContent();
};

function updateLightboxContent() {
  const photo = filteredPhotos[currentLightboxIndex];
  if (!photo) return;

  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');
  const counter = document.getElementById('lightboxCounter');

  if (img) img.src = photo.src;
  if (title) title.textContent = photo.title;
  if (desc) desc.textContent = photo.desc;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${filteredPhotos.length}`;
}

/* ===================================================================
   3. FAQ Accordion
   =================================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const question = card.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      
      // Close other opened cards
      faqCards.forEach(c => c.classList.remove('active'));

      // If it wasn't active, open it
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   4. Date Pickers Init (Default Dates & Constraints)
   =================================================================== */
function initDatePickers() {
  const checkIn = document.getElementById('checkInDate');
  const checkOut = document.getElementById('checkOutDate');

  if (!checkIn || !checkOut) return;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 3);

  const formatDate = (d) => d.toISOString().split('T')[0];

  checkIn.min = formatDate(today);
  checkIn.value = formatDate(tomorrow);

  checkOut.min = formatDate(tomorrow);
  checkOut.value = formatDate(dayAfterTomorrow);

  checkIn.addEventListener('change', () => {
    if (checkIn.value) {
      const nextDay = new Date(checkIn.value);
      nextDay.setDate(nextDay.getDate() + 1);
      checkOut.min = formatDate(nextDay);
      if (new Date(checkOut.value) <= new Date(checkIn.value)) {
        checkOut.value = formatDate(nextDay);
      }
    }
  });
}

/* ===================================================================
   5. Smooth Scroll for Hash Links
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ===================================================================
   6. Select Room Quick Action
   =================================================================== */
window.selectRoom = function(roomName) {
  const select = document.getElementById('roomSelect');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(roomName) || roomName.includes(select.options[i].value)) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`已為您選擇：${roomName}`);
};

/* ===================================================================
   7. Copy Google Map URL & Address
   =================================================================== */
const GOOGLE_MAP_URL = 'https://maps.app.goo.gl/ibVAMCtHk7Dayq5J8';

window.copyMapUrl = function() {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(GOOGLE_MAP_URL).then(() => {
      showToast('已複製 Google Map 導航網址！');
    }).catch(() => {
      fallbackCopyText(GOOGLE_MAP_URL);
    });
  } else {
    fallbackCopyText(GOOGLE_MAP_URL);
  }
};

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('已複製到剪貼簿！');
  } catch (err) {
    showToast('複製失敗，請手動複製');
  }
  document.body.removeChild(textarea);
}

/* ===================================================================
   8. Form Submission & Modal Handling
   =================================================================== */
let generatedInquiryText = '';

window.handleInquirySubmit = function(e) {
  e.preventDefault();

  const name = document.getElementById('guestName').value.trim();
  const phone = document.getElementById('guestPhone').value.trim();
  const checkIn = document.getElementById('checkInDate').value;
  const checkOut = document.getElementById('checkOutDate').value;
  const room = document.getElementById('roomSelect').value;
  const guests = document.getElementById('guestCount').value;
  const notes = document.getElementById('guestNotes').value.trim();

  if (!name || !phone || !checkIn || !checkOut) {
    showToast('請完整填寫必填欄位！');
    return;
  }

  generatedInquiryText = `【澎湖海被子民宿・詢房預約】
────────────────
👤 訂房大名：${name}
📞 聯絡電話：${phone}
📅 入住日期：${checkIn}
📅 退房日期：${checkOut}
🛏️ 詢問房型：${room}
👥 入住人數：${guests}
📝 備註需求：${notes ? notes : '無特殊備註'}
────────────────
📍 Google Map 導航：${GOOGLE_MAP_URL}
期待為您安排美好的澎湖海島假期！`;

  const modalMessage = document.getElementById('modalMessage');
  if (modalMessage) {
    modalMessage.innerHTML = `<strong>${name}</strong> 您好，已為您整理好 <strong>${room}</strong> 的詢房資訊（${checkIn} 至 ${checkOut}）。<br><br>您可以一鍵複製摘要訊息，直接透過 LINE 或電話向管家確認即時空房！`;
  }

  openModal();
};

window.openModal = function() {
  const modal = document.getElementById('inquiryModal');
  if (modal) {
    modal.classList.add('open');
  }
};

window.closeModal = function() {
  const modal = document.getElementById('inquiryModal');
  if (modal) {
    modal.classList.remove('open');
  }
};

window.copyInquiryText = function() {
  if (!generatedInquiryText) return;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(generatedInquiryText).then(() => {
      showToast('詢房摘要已成功複製！可直接貼至 LINE 傳送');
    }).catch(() => {
      fallbackCopyText(generatedInquiryText);
    });
  } else {
    fallbackCopyText(generatedInquiryText);
  }
};

/* Close modal on outside click */
window.addEventListener('click', (e) => {
  const modal = document.getElementById('inquiryModal');
  if (e.target === modal) {
    closeModal();
  }
});

/* ===================================================================
   9. Toast System
   =================================================================== */
let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
