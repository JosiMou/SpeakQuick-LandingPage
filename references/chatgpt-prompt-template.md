<instruction>
  Write a 2000-2800 word article about {KEYWORD}
  that showcases how SpeakQuick transforms voice-to-text workflows on macOS.
  Follow TF-IDF optimization from the provided CSV.
</instruction>
<critical_rules>
  <accuracy>
ONLY describe SpeakQuick features explicitly stated in <product_truth> below
NEVER invent capabilities, metrics, UI details, or integrations
If unsure about a feature, omit it
Use quantified benefits ONLY if provided in CSV or product tags
  </accuracy>
  <csv_requirements>
If TF-IDF CSV is missing/unreadable, STOP and request it
High importance (6-8): Include in title, H1, intro, conclusion
Medium importance (3-5): Use in subheadings and body naturally
Low importance (1-2): Sprinkle for semantic richness
Track all usage in audit table at end
  </csv_requirements>
  <serp_handling>
If you lack live SERP access, create a "SERP Inputs Needed" section
Do NOT fabricate "top results" or competitor analysis
  </serp_handling>
</critical_rules>
<conflict_resolution>
  When template structure conflicts with natural prose:
  -> Prioritize readability over rigid compliance
  -> Never pad sections to hit word counts
  -> Never force keywords where they sound awkward
  -> The reader experience beats structural perfection
</conflict_resolution>
<tone_guidance>
  Voice: Conversational expert friend sharing a discovery -- not a manual.
  <examples>
    YES: "Here's the thing -- your Mac already has a microphone. It just needs better software listening."
    YES: "I used to re-type meeting notes like some kind of medieval scribe."
    NO: "Voice-to-text technology is an important aspect of digital productivity workflows."
    NO: "This article will explore the various features and benefits of..."
  </examples>
  <principles>
Keywords enhance, never interrupt flow
Rotate variants to avoid repetition
Front-load importance without stuffing
Write for humans first, search engines second
  </principles>
</tone_guidance>
<article_structure>
  <required_elements>
    These must appear, but length/depth should match what the content needs:
TITLE: SEO-optimized, max 60 chars, include 1+ high-importance keyword
       Formula: [Power Word] + [High-Importance Keyword] + [Benefit]
SUBTITLE (H1): Expands on title, up to 80 chars, conversational
TLDR: 4-5 bullet points (50-100 words total)
Primary benefit + key transformation + SpeakQuick value prop + target user fit
Include metrics ONLY if provided in source materials
INTRODUCTION: Hook with relatable dictation/transcription pain -> frustration -> solution tease -> value promise
BODY SECTIONS: 3-5 sections based on keyword clusters and search intent
Let topic dictate length (some 300 words, some 500 -- don't pad)
Weave SpeakQuick features where topically relevant
CONCLUSION: Summarize transformation, reinforce primary keywords, clear CTA
FAQ: 5-7 questions targeting long-tail keywords
50-100 words per answer
Schema-friendly Q&A format
  </required_elements>
  <flexible_elements>
Section order in body (reorder if flow improves)
Exact section count (merge thin topics, split dense ones)
Subheading phrasing (match natural language over keyword-stuffing)
  </flexible_elements>
</article_structure>
<product_truth>
  <!-- This is the ONLY source for SpeakQuick claims -->
  <basic_details>
    <name>SpeakQuick</name>
    <url>https://www.speakquick.app/</url>
    <platform>macOS only (macOS 15+, Apple Silicon)</platform>
    <description>AI-powered transcription and dictation app for Mac. Local-first processing
    on Apple Silicon. No cloud uploads, no internet required. Features Push to Talk dictation,
    batch file transcription, speaker detection, and smart export.</description>
    <tagline>Transcribe in seconds. Local on your machine.</tagline>
    <examples>
      Hold global shortcut -> dictate into any text field -> release to transcribe
      Drag audio/video file onto SpeakQuick -> get accurate transcript in seconds
      Batch process meeting recordings -> export as SRT subtitles or plain text
    </examples>
  </basic_details>
  <how_it_works>
Push to Talk: Hold a global shortcut to dictate anywhere on your Mac. Release to transcribe. Works in any app, any text field.
Batch transcription: Drag and drop audio/video files for transcription
Local processing: All AI runs on-device using Apple Silicon Neural Engine
Speech recognition: Parakeet model for speech-to-text (NOT Whisper)
LLM post-processing: Qwen and Phi models on Apple Silicon for formatting and cleanup
Automatic language detection across 25+ languages
Speaker detection: Identifies and labels different speakers (coming soon)
Export formats: SRT, VTT, JSON, CSV, and plain text with customizable timestamps
Audio formats supported: MP3, M4A, WAV, AIFF, and most common audio formats
Video formats supported: MP4, MOV, AVI
Performance: Transcribe 1 hour of audio in under 5 minutes on Apple Silicon
  </how_it_works>
  <features>
Push to Talk: Global shortcut dictation in any app/text field
Works Offline: 100% local processing, no internet required
Speaker Detection: Automatic speaker identification and labeling (coming soon)
25+ Languages: Industry-leading accuracy with automatic language detection
Smart Export: SRT, VTT, JSON, CSV, plain text with precise timestamps
Apple Silicon Optimized: Neural Engine acceleration, 10x faster than cloud
Batch Processing: Process multiple audio/video files at once
Privacy: Audio never leaves your Mac, no cloud uploads
  </features>
  <technology>
    Speech AI: Parakeet (local on-device model)
    Post-processing: Qwen, Phi LLMs on Apple Silicon
    Processing: 100% local, no cloud, no internet dependency
    Optimization: Apple Silicon Neural Engine acceleration
  </technology>
  <pricing>
$38 USD one-time purchase (lifetime license)
Free 7-day trial (no credit card required)
30-day money-back guarantee
Includes: Unlimited transcription, all export formats, speaker detection,
local processing, batch processing, priority support, lifetime updates
No subscriptions, no recurring fees
  </pricing>
  <distribution>Direct sale from speakquick.app</distribution>
</product_truth>
<feature_keyword_map>
  <!-- When these keywords appear, mention these features -->
  dictation/dictate -> Push to Talk global shortcut, works in any app/text field
  speech-to-text/speech recognition -> Parakeet model, local processing, 25+ languages
  transcribe/transcription -> Batch file transcription, drag and drop, Smart Export
  offline/privacy -> 100% local processing, no cloud uploads, no internet required
  mac/macos/macbook -> macOS 15+, Apple Silicon optimized, Neural Engine
  apple/apple silicon -> Neural Engine acceleration, M-series optimization
  accuracy -> State-of-the-art Parakeet model, handles accents and technical jargon
  speed/fast -> 1 hour of audio in under 5 minutes, 10x faster than cloud
  formatting/punctuation -> LLM post-processing with Qwen/Phi for auto-formatting
  voice typing -> Push to Talk dictation in any text field
  meeting transcription -> Batch processing, speaker detection, SRT/VTT export
  subtitles/captions -> SRT, VTT export with precise timestamps
  languages -> 25+ languages with automatic detection
  speaker detection -> Automatic speaker identification and labeling
  audio files -> MP3, M4A, WAV, AIFF support, batch processing
  export -> SRT, VTT, JSON, CSV, plain text formats
  workflow -> Global shortcut, batch processing, Smart Export
  pricing/cost/subscription -> $38 one-time, no subscription, lifetime updates
  dragon/dragon dictate -> Compare: SpeakQuick is local-first, one-time purchase, modern AI
  macwhisper -> Compare: SpeakQuick uses Parakeet (not Whisper), includes Push to Talk dictation
  google docs -> SpeakQuick works in any app via Push to Talk, not limited to one app
  voice control -> Distinct from Apple's Voice Control accessibility feature
  built-in dictation/apple dictation -> Compare: SpeakQuick adds offline capability, better accuracy, batch transcription
  ai-powered -> Parakeet speech AI + Qwen/Phi LLM post-processing, all local
  one-time purchase -> $38 lifetime license vs. subscription alternatives
  custom vocabulary -> Handles technical jargon and specialized terminology
  automation -> Push to Talk for live dictation, batch processing for files
</feature_keyword_map>
<audience>
  Primary users: Professionals, content creators, students, and researchers on macOS.
  <common_use_cases>
Live dictation: Writers, journalists, students, and professionals who want to
      speak instead of type in any Mac application
Meeting transcription: Teams and individuals transcribing recorded meetings,
      interviews, and conference calls
Podcast/video production: Content creators generating transcripts, subtitles,
      and show notes from audio/video recordings
Medical/legal transcription: Professionals in regulated fields who need private,
      local-only transcription without cloud data exposure
Academic research: Researchers transcribing interviews, lectures, and field recordings
Multilingual workflows: Users working across multiple languages who need automatic
      language detection and accurate transcription
  </common_use_cases>
  <pain_points>
Apple's built-in Dictation has limited accuracy and requires internet for many languages
Cloud-based transcription services raise privacy concerns with sensitive audio
Subscription fatigue from services charging monthly for transcription
Slow cloud uploads and processing delays for large audio files
Poor accuracy with accents, technical jargon, or multiple speakers
No easy way to transcribe pre-recorded audio/video files on Mac
Dragon NaturallySpeaking discontinued Mac support years ago
Most dictation tools don't work offline or require constant internet
  </pain_points>
</audience>
<deliverables>
SERP ANALYSIS
     If live SERP data is unavailable, output "SERP Inputs Needed" and list what you require.
     If SERP data IS available, provide:
     <top_10_breakdown>
       For each of the top 10 results, capture:
Rank position
Page title + URL
Content type (guide, listicle, tool page, comparison, tutorial, etc.)
Estimated word count (short <1000, medium 1000-2000, long 2000+)
H2/H3 structure (list main subheadings)
Unique angle or hook (what makes this result rank?)
SpeakQuick relevance (does it address problems SpeakQuick solves?)
     </top_10_breakdown>
     <content_patterns>
       Identify patterns across top results:
Most common subtopics covered (what do 7+ results include?)
Common H2 themes (e.g., "Getting Started," "Best Practices," "Tools")
Average word count and depth
Media usage (screenshots, videos, tables, infographics)
CTA patterns (what are they selling/promoting?)
Content format preferences (step-by-step, conceptual, comparison)
     </content_patterns>
     <gap_analysis>
       Identify opportunities competitors miss:
Subtopics only 1-2 results cover (underserved angles)
Questions implied but not answered
Depth gaps (topics covered superficially everywhere)
Audience gaps (who are they NOT writing for?)
Freshness gaps (outdated info, old screenshots, dead links)
Tool/solution gaps (problems described but no actionable fix offered)
     </gap_analysis>
     <search_intent_breakdown>
       Classify the dominant intent:
Informational (learning, understanding)
Commercial investigation (comparing options)
Transactional (ready to buy/download)
Navigational (looking for specific resource)
       Note intent signals:
What questions do featured snippets answer?
What "People Also Ask" questions appear?
Do results skew toward tutorials, product pages, or comparisons?
     </search_intent_breakdown>
     <outline_justification>
       Map findings to article structure:
Which subtopics MUST be included (table stakes)?
Which gaps create differentiation opportunities?
How should sections be ordered based on intent?
Where does SpeakQuick fit naturally vs. feeling forced?
What unique angle will make this article rank?
       Output a proposed H2 outline with:
       | Section | Justification (why include?) | Target Keywords | Competitor Coverage |
       |---------|------------------------------|-----------------|---------------------|
     </outline_justification>
     <competitive_advantage_summary>
       In 3-5 sentences, articulate:
The single biggest gap this article will fill
Why this article deserves to outrank existing results
The unique value SpeakQuick adds that competitors can't offer
     </competitive_advantage_summary>
COMPLETE ARTICLE
All required elements with natural flow
SpeakQuick woven throughout (from product_truth only)
KEYWORD AUDIT TABLE
     Format:
     | Keyword | Importance | Target | Actual | Status |
     |---------|------------|--------|--------|--------|
SEO ELEMENTS
Meta title (60 char max)
Meta description (155 char)
3-5 internal link suggestions
Image alt text recommendations
</deliverables>
