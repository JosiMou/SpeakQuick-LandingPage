export type Language = "en" | "de";

export interface Translations {
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    downloadButton: string;
    watchDemo: string;
    metaInfo: {
      macOS: string;
      trial: string;
      noSubscription: string;
    };
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
    windowTitle: string;
    categories: {
      transcription: {
        name: string;
        tagline: string;
      };
      export: {
        name: string;
        tagline: string;
      };
      privacy: {
        name: string;
        tagline: string;
      };
    };
  };
  whyDifferent: {
    title: string;
    subtitle: string;
    cards: {
      local: {
        title: string;
        subhead: string;
        description: string;
      };
      speed: {
        title: string;
        subhead: string;
        description: string;
      };
      accurate: {
        title: string;
        subhead: string;
        description: string;
      };
      simple: {
        title: string;
        subhead: string;
        description: string;
      };
    };
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
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    cta: {
      title: string;
      button: string;
    };
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
      badge: "Now with Whisper v3",
      headline: "Turn Audio Into",
      headlineHighlight: "Accurate Text.",
      subtitle: "AI-powered transcription for podcasts, meetings, and interviews. Local processing, speaker detection, and export to any format.",
      downloadButton: "Download for macOS",
      watchDemo: "Watch Demo",
      metaInfo: {
        macOS: "macOS 13.0+",
        trial: "Free 7-Day Trial",
        noSubscription: "No subscription required",
      },
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
      windowTitle: "Feature Explorer",
      categories: {
        transcription: {
          name: "Transcription",
          tagline: "State-of-the-art speech recognition powered by OpenAI Whisper.",
        },
        export: {
          name: "Export & Formats",
          tagline: "Export your transcripts in any format you need.",
        },
        privacy: {
          name: "Privacy & Speed",
          tagline: "Your data stays yours. Process locally at incredible speeds.",
        },
      },
    },
    whyDifferent: {
      title: "Why SpeakQuick?",
      subtitle: "Built specifically for macOS with privacy and performance at its core. No subscriptions, no cloud uploads, no compromises.",
      cards: {
        local: {
          title: "Local First",
          subhead: "Your audio never leaves your Mac",
          description: "Unlike cloud-based services, SpeakQuick processes everything locally. No uploads, no waiting, no privacy concerns. Your sensitive recordings stay exactly where they should—on your device.",
        },
        speed: {
          title: "Lightning Fast",
          subhead: "10x faster than cloud transcription",
          description: "Optimized for Apple Silicon. Transcribe an hour of audio in under 5 minutes. No internet connection required means no upload delays or network bottlenecks.",
        },
        accurate: {
          title: "Incredibly Accurate",
          subhead: "Powered by Whisper v3",
          description: "State-of-the-art AI that handles accents, technical jargon, and multiple speakers with ease. Industry-leading accuracy across 99+ languages.",
        },
        simple: {
          title: "Dead Simple",
          subhead: "Drag, drop, done",
          description: "No complicated workflows or steep learning curves. Just drag your audio file onto SpeakQuick and get perfect transcripts. It's transcription that actually works the way you expect.",
        },
      },
    },
    pricing: {
      title: "Simple Pricing",
      subtitle: "One-time purchase. No subscriptions, no recurring fees. Own SpeakQuick forever.",
      price: "$49",
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
          answer: "SpeakQuick uses OpenAI's Whisper v3 model, which achieves state-of-the-art accuracy across 99+ languages. It handles accents, technical terminology, and background noise exceptionally well.",
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
      cta: {
        title: "Ready to transform your audio workflow?",
        button: "Download for Free",
      },
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
      metaDescription: "Guides for audio transcription on macOS. Learn about Whisper AI, speaker detection, batch processing, and getting the most out of SpeakQuick.",
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
      badge: "Jetzt mit Whisper v3",
      headline: "Wandle Audio in",
      headlineHighlight: "Präzisen Text.",
      subtitle: "KI-gestützte Transkription für Podcasts, Meetings und Interviews. Lokale Verarbeitung, Sprechererkennung und Export in jedes Format.",
      downloadButton: "Für macOS herunterladen",
      watchDemo: "Demo ansehen",
      metaInfo: {
        macOS: "macOS 13.0+",
        trial: "7 Tage kostenlos testen",
        noSubscription: "Kein Abonnement erforderlich",
      },
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
      windowTitle: "Funktions-Explorer",
      categories: {
        transcription: {
          name: "Transkription",
          tagline: "Modernste Spracherkennung, angetrieben von OpenAI Whisper.",
        },
        export: {
          name: "Export & Formate",
          tagline: "Exportiere deine Transkripte in jedem benötigten Format.",
        },
        privacy: {
          name: "Datenschutz & Geschwindigkeit",
          tagline: "Deine Daten bleiben dir. Lokal verarbeitet mit unglaublicher Geschwindigkeit.",
        },
      },
    },
    whyDifferent: {
      title: "Warum SpeakQuick?",
      subtitle: "Speziell für macOS entwickelt mit Datenschutz und Leistung im Fokus. Keine Abonnements, keine Cloud-Uploads, keine Kompromisse.",
      cards: {
        local: {
          title: "Lokal zuerst",
          subhead: "Dein Audio verlässt nie deinen Mac",
          description: "Im Gegensatz zu cloudbasierten Diensten verarbeitet SpeakQuick alles lokal. Keine Uploads, kein Warten, keine Datenschutzbedenken. Deine sensiblen Aufnahmen bleiben genau dort, wo sie sein sollten – auf deinem Gerät.",
        },
        speed: {
          title: "Blitzschnell",
          subhead: "10x schneller als Cloud-Transkription",
          description: "Optimiert für Apple Silicon. Transkribiere eine Stunde Audio in unter 5 Minuten. Keine Internetverbindung erforderlich bedeutet keine Upload-Verzögerungen oder Netzwerkengpässe.",
        },
        accurate: {
          title: "Unglaublich präzise",
          subhead: "Angetrieben von Whisper v3",
          description: "Modernste KI, die mühelos mit Akzenten, Fachjargon und mehreren Sprechern umgeht. Branchenführende Genauigkeit in über 99 Sprachen.",
        },
        simple: {
          title: "Totale Einfachheit",
          subhead: "Ziehen, ablegen, fertig",
          description: "Keine komplizierten Workflows oder steilen Lernkurven. Ziehe einfach deine Audiodatei auf SpeakQuick und erhalte perfekte Transkripte. Transkription, die tatsächlich so funktioniert, wie du es erwartest.",
        },
      },
    },
    pricing: {
      title: "Einfache Preisgestaltung",
      subtitle: "Einmaliger Kauf. Keine Abonnements, keine wiederkehrenden Gebühren. SpeakQuick gehört für immer dir.",
      price: "49 €",
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
          answer: "SpeakQuick verwendet OpenAIs Whisper v3 Modell, das in über 99 Sprachen modernste Genauigkeit erreicht. Es kommt hervorragend mit Akzenten, Fachterminologie und Hintergrundgeräuschen zurecht.",
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
      cta: {
        title: "Bereit, deinen Audio-Workflow zu transformieren?",
        button: "Kostenlos herunterladen",
      },
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
      metaDescription: "Anleitungen zur Audio-Transkription auf macOS. Erfahre mehr über Whisper AI, Sprechererkennung, Stapelverarbeitung und wie du das Beste aus SpeakQuick herausholst.",
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
