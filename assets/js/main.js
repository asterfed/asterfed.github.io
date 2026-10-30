const translations = {
  en: {
    skipLink: "Skip to content",
    languageLabel: "Language",
    languageAria: "Language",
    themeLight: "Light",
    themeDark: "Dark",
    themeLightAria: "Switch to light theme",
    themeDarkAria: "Switch to dark theme",
    navAbout: "About",
    navWork: "What we do",
    navContact: "Contact",
    heroEyebrow: "Where Innovation Plays.",
    heroTitle: "Asterfed",
    heroCopy: "A digital product company under PT Aster Inovasi Teknologi, focused on mobile games and applications.",
    heroAction: "Get to know us",
    aboutEyebrow: "Who we are",
    aboutTitle: "About Asterfed",
    aboutCopy: "Asterfed is a digital product company under PT Aster Inovasi Teknologi. We develop mobile games and applications with a product-first mindset, grounded in user understanding, market validation, engaging experiences, and sustainable business models.",
    aboutMission: "From mobile games to everyday applications, we turn promising ideas into products people enjoy, value, and return to.",
    workEyebrow: "Our principles",
    workTitle: "Built for lasting value",
    workIntro: "We build digital products around three principles that help ideas find an audience and grow sustainably.",
    cardOneTitle: "Market validation",
    cardOneCopy: "We find real market opportunities, understand user needs, and validate ideas before investing in large-scale development.",
    cardTwoTitle: "User retention",
    cardTwoCopy: "We create meaningful, engaging experiences that bring people back and build lasting relationships between products and their audiences.",
    cardThreeTitle: "Revenue & sustainability",
    cardThreeCopy: "We shape sustainable monetization strategies and business models that turn valuable digital experiences into viable products.",
    closingStatement: "We don't just build products. We build products with purpose, traction, and potential.",
    contactEyebrow: "Start a conversation",
    contactTitle: "Let’s work together",
    contactCopy: "For inquiries, email us at",
    contactAction: "Get in touch",
    footerRights: "All rights reserved.",
  },
  id: {
    skipLink: "Langsung ke konten",
    languageLabel: "Bahasa",
    languageAria: "Bahasa",
    themeLight: "Terang",
    themeDark: "Gelap",
    themeLightAria: "Ganti ke tema terang",
    themeDarkAria: "Ganti ke tema gelap",
    navAbout: "Tentang",
    navWork: "Layanan",
    navContact: "Kontak",
    heroEyebrow: "Where Innovation Plays.",
    heroTitle: "Asterfed",
    heroCopy: "Perusahaan produk digital di bawah PT Aster Inovasi Teknologi yang berfokus pada pengembangan game dan aplikasi seluler.",
    heroAction: "Kenali kami",
    aboutEyebrow: "Siapa kami",
    aboutTitle: "Tentang Asterfed",
    aboutCopy: "Asterfed adalah perusahaan produk digital di bawah PT Aster Inovasi Teknologi. Kami mengembangkan game dan aplikasi seluler dengan pendekatan yang mengutamakan produk, berlandaskan pemahaman pengguna, validasi pasar, pengalaman yang menarik, dan model bisnis yang berkelanjutan.",
    aboutMission: "Dari game seluler hingga aplikasi sehari-hari, misi kami adalah mengubah ide potensial menjadi produk yang dinikmati, bernilai, dan terus digunakan.",
    workEyebrow: "Prinsip kami",
    workTitle: "Dibangun untuk nilai jangka panjang",
    workIntro: "Kami mengembangkan produk digital dengan tiga prinsip yang membantu ide menemukan penggunanya dan tumbuh secara berkelanjutan.",
    cardOneTitle: "Validasi pasar",
    cardOneCopy: "Kami mengidentifikasi peluang pasar yang nyata, memahami kebutuhan pengguna, dan memvalidasi ide sebelum berinvestasi dalam pengembangan skala besar.",
    cardTwoTitle: "Retensi pengguna",
    cardTwoCopy: "Kami merancang pengalaman yang bermakna dan menarik agar pengguna terus kembali, sekaligus membangun hubungan jangka panjang antara produk dan audiensnya.",
    cardThreeTitle: "Pendapatan & keberlanjutan",
    cardThreeCopy: "Kami mengembangkan strategi monetisasi dan model bisnis berkelanjutan yang mengubah pengalaman digital bernilai menjadi produk yang layak.",
    closingStatement: "Kami tidak hanya membangun produk. Kami membangun produk dengan tujuan, daya tarik, dan potensi.",
    contactEyebrow: "Mari berbincang",
    contactTitle: "Mari bekerja sama",
    contactCopy: "Untuk pertanyaan, hubungi kami melalui email:",
    contactAction: "Hubungi kami",
    footerRights: "Hak cipta dilindungi.",
  },
};

const storageKeys = {
  language: "asterfed-language",
  theme: "asterfed-theme",
};

function getStoredPreference(key, allowedValues, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return allowedValues.includes(value) ? value : fallback;
  } catch (error) {
    console.warn("Unable to read the saved Asterfed preference.", error);
    return fallback;
  }
}

function storePreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Unable to save the Asterfed preference.", error);
  }
}

const languageSelect = document.querySelector("#language");
const themeToggle = document.querySelector(".theme-toggle");
const faviconLink = document.querySelector('link[rel="icon"]');

function setLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const translation = dictionary[element.dataset.i18nAria];
    if (translation) element.setAttribute("aria-label", translation);
  });
  languageSelect.value = language;
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.textContent = dictionary[isDark ? "themeDark" : "themeLight"];
  themeToggle.setAttribute(
    "aria-label",
    dictionary[isDark ? "themeLightAria" : "themeDarkAria"],
  );
  storePreference(storageKeys.language, language);
}

function setTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = translations[document.documentElement.lang][
    isDark ? "themeDark" : "themeLight"
  ];
  themeToggle.setAttribute(
    "aria-label",
    translations[document.documentElement.lang][isDark ? "themeLightAria" : "themeDarkAria"],
  );
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#111720" : "#f7f8fa";
  faviconLink.href = isDark ? "favicon-dark.ico" : "favicon.ico";
  storePreference(storageKeys.theme, theme);
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.currentTarget.value);
});

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
setLanguage(getStoredPreference(storageKeys.language, Object.keys(translations), "en"));
setTheme(getStoredPreference(storageKeys.theme, ["light", "dark"], "light"));
