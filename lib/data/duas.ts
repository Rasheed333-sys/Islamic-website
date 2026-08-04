import type { Dua, DuaCategory } from "@/lib/types/dua";

/**
 * Every dua below has been checked against its primary source (Qur'an
 * citation, or the specific Bukhari/Muslim/Abu Dawud/Tirmidhi hadith
 * number) rather than reconstructed from memory. References are shown
 * to the user alongside each dua so they can verify independently.
 */
export const DUA_CATEGORIES: DuaCategory[] = [
  {
    id: "morning",
    label: "Morning",
    labelArabic: "الصباح",
    description: "Waking up in remembrance of Allah.",
    icon: "sunrise",
  },
  {
    id: "evening",
    label: "Evening",
    labelArabic: "المساء",
    description: "Closing the day in gratitude.",
    icon: "sunset",
  },
  {
    id: "prayer",
    label: "Prayer",
    labelArabic: "الصلاة",
    description: "A supplication to carry through salah.",
    icon: "hand",
  },
  {
    id: "travel",
    label: "Travel",
    labelArabic: "السفر",
    description: "Setting out on a journey.",
    icon: "plane",
  },
  {
    id: "parents",
    label: "Parents",
    labelArabic: "الوالدين",
    description: "Asking mercy for those who raised you.",
    icon: "users",
  },
  {
    id: "health",
    label: "Health",
    labelArabic: "الشفاء",
    description: "For healing — your own or someone else's.",
    icon: "heart-pulse",
  },
  {
    id: "protection",
    label: "Protection",
    labelArabic: "الحماية",
    description: "Seeking refuge from harm.",
    icon: "shield",
  },
  {
    id: "forgiveness",
    label: "Forgiveness",
    labelArabic: "الاستغفار",
    description: "Returning to Allah in repentance.",
    icon: "refresh-ccw",
  },
  {
    id: "sleep",
    label: "Sleep",
    labelArabic: "النوم",
    description: "Placing the night in Allah's hands.",
    icon: "moon",
  },
  {
    id: "eating",
    label: "Eating",
    labelArabic: "الطعام",
    description: "Gratitude before and after a meal.",
    icon: "utensils",
  },
  {
    id: "mosque",
    label: "Mosque",
    labelArabic: "المسجد",
    description: "Entering and leaving the house of Allah.",
    icon: "building",
  },
];

export const DUAS: Dua[] = [
  {
    id: "dua-morning-waking",
    categoryId: "morning",
    title: "Upon waking",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    translation:
      "All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.",
    reference: "Sahih al-Bukhari 6312",
  },
  {
    id: "dua-evening-remembrance",
    categoryId: "evening",
    title: "Evening remembrance",
    arabic:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Amsayna wa amsal-mulku lillahi wal-hamdu lillahi la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in Qadir",
    translation:
      "We have reached the evening, and at this very time all sovereignty belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner. His is the dominion and His is all praise, and He is over all things omnipotent.",
    reference: "Sahih Muslim 2723",
  },
  {
    id: "dua-prayer-rabbana-atina",
    categoryId: "prayer",
    title: "Good in this life and the next",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    translation:
      "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    reference: "Qur'an 2:201",
  },
  {
    id: "dua-travel-departure",
    categoryId: "travel",
    title: "Setting out on a journey",
    arabic:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
    transliteration:
      "Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqaliboon",
    translation:
      "Glory be to Him who has placed this at our service, for we could never have done it by ourselves. And indeed, to our Lord we will return.",
    reference: "Qur'an 43:13–14; recited by the Prophet ﷺ when travelling (Sahih Muslim 1342)",
  },
  {
    id: "dua-parents-mercy",
    categoryId: "parents",
    title: "For your parents",
    arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbi irhamhuma kama rabbayani sagheera",
    translation: "My Lord, have mercy upon them as they raised me when I was small.",
    reference: "Qur'an 17:24",
  },
  {
    id: "dua-health-healing",
    categoryId: "health",
    title: "For healing",
    arabic:
      "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا",
    transliteration:
      "Allahumma Rabban-nas, adhhibil-ba's, ishfi anta ash-Shafi, la shifa'a illa shifa'uka, shifa'an la yughadiru saqaman",
    translation:
      "O Allah, Lord of mankind, remove the affliction and grant healing — You are the Healer. There is no cure but Your cure, a healing that leaves behind no illness.",
    reference: "Sahih al-Bukhari 5742; Sahih Muslim 2191",
  },
  {
    id: "dua-protection-daily",
    categoryId: "protection",
    title: "Daily protection",
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa huwas-Sami'ul-'Alim",
    translation:
      "In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    reference: "Sunan Abi Dawud 5088; Jami' at-Tirmidhi 3388 — recited three times, morning and evening",
  },
  {
    id: "dua-forgiveness-sayyidul-istighfar",
    categoryId: "forgiveness",
    title: "The master supplication for forgiveness",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration:
      "Allahumma anta Rabbi, la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa anta",
    translation:
      "O Allah, You are my Lord. There is no god but You. You created me and I am Your servant, and I hold to Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin — so forgive me, for none forgives sins except You.",
    reference: "Sahih al-Bukhari 6306 — known as Sayyid al-Istighfar",
  },
  {
    id: "dua-sleep-nightly",
    categoryId: "sleep",
    title: "Before sleeping",
    arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    transliteration: "Allahumma bismika amutu wa ahya",
    translation: "O Allah, in Your name I die and I live.",
    reference: "Sahih al-Bukhari 6324",
    note: "Said while lying down; on waking, the morning dua above is recited.",
  },
  {
    id: "dua-eating-after",
    categoryId: "eating",
    title: "After eating",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana muslimin",
    translation: "All praise is for Allah who fed us, gave us drink, and made us Muslims.",
    reference: "Sunan Abi Dawud 3850; Jami' at-Tirmidhi 1858",
    note: "Before eating, it is sufficient to simply say \"Bismillah\" (In the name of Allah).",
  },
  {
    id: "dua-mosque-entering",
    categoryId: "mosque",
    title: "Entering the mosque",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma iftah li abwaba rahmatik",
    translation: "O Allah, open for me the doors of Your mercy.",
    reference: "Sahih Muslim 713",
    note: "When leaving, say: \"Allahumma inni as'aluka min fadlik\" — O Allah, I ask You of Your bounty.",
  },
];

export function getDuasByCategory(categoryId: string): Dua[] {
  return DUAS.filter((d) => d.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): DuaCategory | undefined {
  return DUA_CATEGORIES.find((c) => c.id === categoryId);
}