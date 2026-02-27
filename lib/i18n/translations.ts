export type Language = "en" | "de";

export interface Translations {
  hero: {
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    subtitleLight: string;
    downloadButton: string;
    watchDemo: string;
    scrollText: string;
    demo: {
      windowTitle: string;
      fileName: string;
      duration: string;
      transcribing: string;
      navItems: string[];
      transcriptionLines: string[];
      noteLines: string[];
      terminalLines: string[];
    };
  };
  features: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
      comingSoon?: boolean;
    }>;
  };
  integrations: {
    subtitle: string;
  };
  speedComparison: {
    title: string;
    typingLabel: string;
    voiceLabel: string;
    unit: string;
    barTyping: string;
    barVoice: string;
    subtitle: string;
  };
  ctaSection: {
    title: string;
    subtitle: string;
    button: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    price: string;
    period: string;
    description: string;
    trialNote: string;
    cta: string;
    features: string[];
    guarantee: string;
  };
  faq: {
    title: string;
    supportTitle: string;
    supportDescription: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    links: {
      privacy: string;
      terms: string;
      support: string;
    };
    copyright: string;
  };
  page: {
    title: string;
  };
  blog: {
    metaTitle: string;
    metaDescription: string;
    indexTitle: string;
    indexSubtitle: string;
    searchPlaceholder: string;
    noPostsTitle: string;
    noPostsMessage: string;
    noPostsSearch: string;
    resultCount: string;
    clearFilters: string;
    relatedPosts: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      headline: "Transcribe in seconds.",
      headlineHighlight: "Local on your machine.",
      subtitle: "On-device speech AI powered by Apple Silicon.",
      subtitleLight: "No internet. No uploads. No waiting.",
      downloadButton: "Download for Mac",
      watchDemo: "Watch Demo",
      scrollText: "Scroll to explore",
      demo: {
        windowTitle: "SpeakQuick",
        fileName: "Team_Meeting_Recording.m4a",
        duration: "24:32",
        transcribing: "Transcribing...",
        navItems: ["File", "Edit", "View", "Help"],
        transcriptionLines: [
          "The main takeaway from this quarter is that we need to focus on improving our transcription accuracy for technical terminology.",
          "Absolutely. I have been testing SpeakQuick with our medical recordings and the speaker detection is incredibly accurate.",
          "The export options are also really flexible...",
        ],
        noteLines: [
          "Q4 focus: transcription accuracy for technical terms",
          "Speaker detection validated on medical recordings",
          "Export flexibility confirmed by team",
        ],
        terminalLines: [
          "$ speakquick transcribe meeting.m4a",
          "  Processing audio... 24:32 duration",
          "  Detecting speakers... 3 found",
          "  Transcription complete. Saved to meeting.txt",
          "$ speakquick export --format srt meeting.txt",
          "  Exported to meeting.srt",
        ],
      },
    },
    features: {
      title: "Everything you need for transcription",
      subtitle: "Professional-grade transcription with the simplicity you expect from a Mac app.",
      cards: [
        {
          title: "Push to Talk",
          description: "Hold a global shortcut to dictate anywhere on your Mac. Release to transcribe. Works in any app, any text field.",
        },
        {
          title: "Works Offline",
          description: "All processing happens locally on your Mac. No cloud uploads, no internet required. Your recordings stay private.",
        },
        {
          title: "Speaker Detection",
          description: "Automatically identifies and labels different speakers. Perfect for meetings, interviews, and podcasts.",
          comingSoon: true,
        },
        {
          title: "25+ Languages",
          description: "Industry-leading accuracy across 25 languages with automatic language detection.",
        },
        {
          title: "Smart Export",
          description: "Export to SRT, VTT, JSON, CSV, and plain text. Customizable timestamps for any workflow.",
        },
        {
          title: "Apple Silicon",
          description: "Built for M-series chips. Transcribe an hour of audio in under 5 minutes with Neural Engine acceleration.",
        },
      ],
    },
    integrations: {
      subtitle: "SpeakQuick works in any app on your Mac. Hold to talk, release to type. Your voice becomes text wherever the cursor is.",
    },
    speedComparison: {
      title: "Type less. Say more.",
      typingLabel: "Typing",
      voiceLabel: "SpeakQuick",
      unit: "WPM",
      barTyping: "Average typing speed",
      barVoice: "Voice dictation speed",
      subtitle: "Voice input is 3x faster than typing. Write emails, notes, and messages in a fraction of the time.",
    },
    ctaSection: {
      title: "Start dictating for free",
      subtitle: "7-day free trial. No credit card required.",
      button: "Download for Mac",
    },
    pricing: {
      title: "Simple Pricing",
      subtitle: "One-time purchase. No subscriptions, no recurring fees. Own SpeakQuick forever.",
      price: "$38",
      period: "one-time",
      description: "Lifetime license. All future updates included.",
      trialNote: "Starts with a free 7-day trial. No credit card required.",
      cta: "Download Free Trial",
      features: [
        "Unlimited transcription",
        "All export formats",
        "Speaker detection",
        "Local processing",
        "Batch processing",
        "Priority support",
        "Lifetime updates",
      ],
      guarantee: "30-day money-back guarantee. No questions asked.",
    },
    faq: {
      title: "Frequently Asked Questions",
      supportTitle: "Still have questions?",
      supportDescription: "Check the documentation or reach out to our support team.",
      items: [
        {
          question: "Does SpeakQuick work offline?",
          answer: "Yes! SpeakQuick processes all audio locally on your Mac. No internet connection is required for transcription. This means your files never leave your device and you can transcribe anywhere.",
        },
        {
          question: "What audio formats are supported?",
          answer: "SpeakQuick supports MP3, M4A, WAV, AIFF, and most common audio formats. You can also transcribe from video files including MP4, MOV, and AVI.",
        },
        {
          question: "How accurate is the transcription?",
          answer: "SpeakQuick uses state-of-the-art speech recognition AI that achieves industry-leading accuracy across 25+ languages. It handles accents, technical terminology, and background noise exceptionally well.",
        },
        {
          question: "Can I export to subtitle formats?",
          answer: "Absolutely. SpeakQuick exports to SRT, VTT, and other subtitle formats with precise timestamps. Perfect for adding captions to videos or creating accessible content.",
        },
        {
          question: "Is there a Windows version?",
          answer: "Currently, SpeakQuick is macOS-only. We're optimized specifically for Apple Silicon to deliver the best performance and user experience on Mac.",
        },
      ],
    },
    footer: {
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        support: "Support",
      },
      copyright: "© {year} SpeakQuick. All rights reserved.",
    },
    page: {
      title: "SpeakQuick - AI Transcription for Mac",
    },
    blog: {
      metaTitle: "SpeakQuick Blog - Transcription Tips & Guides",
      metaDescription: "Guides for audio transcription on macOS. Learn about speech AI, speaker detection, batch processing, and getting the most out of SpeakQuick.",
      indexTitle: "Blog",
      indexSubtitle: "Guides and tips for audio transcription on macOS with SpeakQuick.",
      searchPlaceholder: "Search posts...",
      noPostsTitle: "No posts found",
      noPostsMessage: "No posts available yet. Check back soon.",
      noPostsSearch: "No posts match your search. Try a different term.",
      resultCount: "results",
      clearFilters: "Clear",
      relatedPosts: "Related Posts",
      ctaTitle: "Ready to transcribe?",
      ctaDescription: "Download SpeakQuick and get accurate transcriptions in minutes. No cloud, no subscription.",
      ctaButton: "Download SpeakQuick",
    },
  },

  de: {
    hero: {
      headline: "Transkribiere in Sekunden.",
      headlineHighlight: "Lokal auf deinem Mac.",
      subtitle: "On-Device Sprach-KI mit Apple Silicon.",
      subtitleLight: "Kein Internet. Keine Uploads. Kein Warten.",
      downloadButton: "Für Mac herunterladen",
      watchDemo: "Demo ansehen",
      scrollText: "Scrollen zum Entdecken",
      demo: {
        windowTitle: "SpeakQuick",
        fileName: "Team_Meeting_Aufnahme.m4a",
        duration: "24:32",
        transcribing: "Transkribiere...",
        navItems: ["Datei", "Bearbeiten", "Ansicht", "Hilfe"],
        transcriptionLines: [
          "Die Haupterkenntnis aus diesem Quartal ist, dass wir uns auf die Verbesserung der Transkriptionsgenauigkeit bei Fachterminologie konzentrieren müssen.",
          "Absolut. Ich habe SpeakQuick mit unseren medizinischen Aufnahmen getestet und die Sprechererkennung ist unglaublich präzise.",
          "Die Exportoptionen sind auch sehr flexibel...",
        ],
        noteLines: [
          "Q4 Fokus: Transkriptionsgenauigkeit bei Fachbegriffen",
          "Sprechererkennung bei medizinischen Aufnahmen validiert",
          "Export-Flexibilität vom Team bestätigt",
        ],
        terminalLines: [
          "$ speakquick transcribe meeting.m4a",
          "  Audio wird verarbeitet... 24:32 Dauer",
          "  Sprecher werden erkannt... 3 gefunden",
          "  Transkription abgeschlossen. Gespeichert als meeting.txt",
          "$ speakquick export --format srt meeting.txt",
          "  Exportiert als meeting.srt",
        ],
      },
    },
    features: {
      title: "Alles, was du für Transkription brauchst",
      subtitle: "Professionelle Transkription mit der Einfachheit, die du von einer Mac-App erwartest.",
      cards: [
        {
          title: "Push to Talk",
          description: "Halte einen globalen Shortcut gedrückt, um überall auf deinem Mac zu diktieren. Loslassen zum Transkribieren. Funktioniert in jeder App, jedem Textfeld.",
        },
        {
          title: "Offline verfügbar",
          description: "Alle Verarbeitung geschieht lokal auf deinem Mac. Keine Cloud-Uploads, kein Internet nötig. Deine Aufnahmen bleiben privat.",
        },
        {
          title: "Sprechererkennung",
          description: "Erkennt und beschriftet automatisch verschiedene Sprecher. Perfekt für Meetings, Interviews und Podcasts.",
          comingSoon: true,
        },
        {
          title: "25+ Sprachen",
          description: "Branchenführende Genauigkeit in 25 Sprachen mit automatischer Spracherkennung.",
        },
        {
          title: "Smarter Export",
          description: "Export als SRT, VTT, JSON, CSV und Klartext. Anpassbare Zeitstempel für jeden Workflow.",
        },
        {
          title: "Apple Silicon",
          description: "Für M-Chips entwickelt. Transkribiere eine Stunde Audio in unter 5 Minuten mit Neural Engine Beschleunigung.",
        },
      ],
    },
    integrations: {
      subtitle: "SpeakQuick funktioniert in jeder App auf deinem Mac. Halten zum Sprechen, loslassen zum Tippen. Deine Stimme wird zu Text, wo immer der Cursor steht.",
    },
    speedComparison: {
      title: "Weniger tippen. Mehr sagen.",
      typingLabel: "Tippen",
      voiceLabel: "SpeakQuick",
      unit: "WPM",
      barTyping: "Durchschnittliche Tippgeschwindigkeit",
      barVoice: "Spracheingabe-Geschwindigkeit",
      subtitle: "Spracheingabe ist 3x schneller als Tippen. Schreibe E-Mails, Notizen und Nachrichten in einem Bruchteil der Zeit.",
    },
    ctaSection: {
      title: "Jetzt kostenlos diktieren",
      subtitle: "7 Tage kostenlos testen. Keine Kreditkarte erforderlich.",
      button: "Für Mac herunterladen",
    },
    pricing: {
      title: "Einfache Preisgestaltung",
      subtitle: "Einmaliger Kauf. Keine Abonnements, keine wiederkehrenden Gebühren. SpeakQuick gehört für immer dir.",
      price: "38 €",
      period: "einmalig",
      description: "Lebenslange Lizenz. Alle zukünftigen Updates inklusive.",
      trialNote: "Beginnt mit einer kostenlosen 7-Tage-Testversion. Keine Kreditkarte erforderlich.",
      cta: "Kostenlose Testversion laden",
      features: [
        "Unbegrenzte Transkription",
        "Alle Exportformate",
        "Sprechererkennung",
        "Lokale Verarbeitung",
        "Stapelverarbeitung",
        "Prioritäts-Support",
        "Lebenslange Updates",
      ],
      guarantee: "30 Tage Geld-zurück-Garantie. Ohne Wenn und Aber.",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      supportTitle: "Noch Fragen?",
      supportDescription: "Schau in die Dokumentation oder kontaktiere unser Support-Team.",
      items: [
        {
          question: "Funktioniert SpeakQuick offline?",
          answer: "Ja! SpeakQuick verarbeitet alle Audiodaten lokal auf deinem Mac. Für die Transkription ist keine Internetverbindung erforderlich. Das bedeutet, dass deine Dateien dein Gerät nie verlassen und du überall transkribieren kannst.",
        },
        {
          question: "Welche Audioformate werden unterstützt?",
          answer: "SpeakQuick unterstützt MP3, M4A, WAV, AIFF und die meisten gängigen Audioformate. Du kannst auch aus Videodateien wie MP4, MOV und AVI transkribieren.",
        },
        {
          question: "Wie präzise ist die Transkription?",
          answer: "SpeakQuick verwendet modernste Spracherkennungs-KI mit branchenführender Genauigkeit in über 25 Sprachen. Es kommt hervorragend mit Akzenten, Fachterminologie und Hintergrundgeräuschen zurecht.",
        },
        {
          question: "Kann ich in Untertitelformate exportieren?",
          answer: "Absolut. SpeakQuick exportiert in SRT, VTT und andere Untertitelformate mit präzisen Zeitstempeln. Perfekt zum Hinzufügen von Untertiteln zu Videos oder zum Erstellen barrierefreier Inhalte.",
        },
        {
          question: "Gibt es eine Windows-Version?",
          answer: "Derzeit ist SpeakQuick nur für macOS verfügbar. Wir sind speziell für Apple Silicon optimiert, um auf dem Mac die beste Leistung und Benutzererfahrung zu bieten.",
        },
      ],
    },
    footer: {
      links: {
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
        support: "Support",
      },
      copyright: "© {year} SpeakQuick. Alle Rechte vorbehalten.",
    },
    page: {
      title: "SpeakQuick - KI-Transkription für Mac",
    },
    blog: {
      metaTitle: "SpeakQuick Blog - Transkriptions-Tipps & Anleitungen",
      metaDescription: "Anleitungen zur Audio-Transkription auf macOS. Erfahre mehr über Sprach-KI, Sprechererkennung, Stapelverarbeitung und wie du das Beste aus SpeakQuick herausholst.",
      indexTitle: "Blog",
      indexSubtitle: "Anleitungen und Tipps zur Audio-Transkription auf macOS mit SpeakQuick.",
      searchPlaceholder: "Beiträge suchen...",
      noPostsTitle: "Keine Beiträge gefunden",
      noPostsMessage: "Noch keine Beiträge verfügbar. Schau bald wieder vorbei.",
      noPostsSearch: "Keine Beiträge zu deiner Suche. Versuche einen anderen Begriff.",
      resultCount: "Ergebnisse",
      clearFilters: "Zurücksetzen",
      relatedPosts: "Verwandte Beiträge",
      ctaTitle: "Bereit zum Transkribieren?",
      ctaDescription: "Lade SpeakQuick herunter und erhalte präzise Transkriptionen in Minuten. Keine Cloud, kein Abonnement.",
      ctaButton: "SpeakQuick herunterladen",
    },
  },
};
