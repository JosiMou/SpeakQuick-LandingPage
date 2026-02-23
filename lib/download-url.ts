const DEFAULT_DOWNLOAD_URL =
  "https://github.com/JosiMou/SpeakQuick/releases/latest/download/SpeakQuick.dmg";

export const SPEAKQUICK_DOWNLOAD_URL =
  (process.env.NEXT_PUBLIC_SPEAKQUICK_DOWNLOAD_URL || "").trim() || DEFAULT_DOWNLOAD_URL;
