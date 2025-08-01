const translations = {
  en: {
    heroLine: "Innovate. Create. Elevate.",
    heroSub: "Transforming your digital landscape with cutting-edge solutions and visionary design.",
    mainButton: "Explore Services"
  },
  te: {
    heroLine: "నవీనత. సృష్టించండి. అభివృద్ధి చేయండి.",
    heroSub: "ఆధునిక డిజైన్‌తో మీ డిజిటల్ ప్రదేశాన్ని మార్చండి.",
    mainButton: "సేవలను అన్వేషించండి"
  },
  hi: {
    heroLine: "नवाचार। निर्माण करें। ऊंचाई तक पहुंचें।",
    heroSub: "आपके डिजिटल परिदृश्य को नए दृष्टिकोण से सशक्त करें।",
    mainButton: "सेवाएं देखें"
  },
  mr: {
    heroLine: "नवोन्मेष. निर्माण. उंचावणी.",
    heroSub: "डिजिटल भविष्यासाठी आधुनिक उपाय.",
    mainButton: "सेवा पहा"
  }
};

function changeLanguage() {
  const lang = document.getElementById('languageSelector').value;
  const t = translations[lang];
  if (document.getElementById('heroLine')) document.getElementById('heroLine').innerText = t.heroLine;
  if (document.getElementById('heroSub')) document.getElementById('heroSub').innerText = t.heroSub;
  if (document.getElementById('mainButton')) document.getElementById('mainButton').innerText = t.mainButton;
}
