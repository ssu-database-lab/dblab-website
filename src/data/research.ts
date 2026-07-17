/* ============================================================
 * Research areas — Database Lab, Soongsil University
 *
 * Content condensed from docs/research/content-inventory.md §3.
 * Array is ordered MOST-RECENT-FIRST by era start (render order
 * on /research and for the intro anchor chips):
 *   E → nlp-metadata   (era 2024–present; funded MCST/KOCCA project)
 *   D → vishing        (era 2021–present; current flagship)
 *   B → forensics      (era 2010–2020)
 *   A → flash-ftl      (era 2004–present; §3C multimedia-indexing
 *                       heritage folded into the second paragraph)
 *
 * Consumed by src/pageviews/PageResearch.astro (anchor ids = slugs)
 * and free for other pages to import (e.g. home research cards).
 *
 * Field notes
 *   kicker   mono kicker line exactly as in mockup_b.html's cards
 *   stat     mono stat-chip line (language-neutral, per contract)
 *   desc_*   paragraphs; MAY contain <strong>/<em> — render with set:html
 *   tags     publication tag slugs → /publications?tag=<tag>
 *   links    public external resources only (no private repos)
 *   glyph    inner SVG markup for a viewBox="0 0 26 26" stroke glyph,
 *            consistent with the mockups' card glyphs — render inside
 *            <svg viewBox="0 0 26 26" fill="none" set:html={glyph} />
 * ============================================================ */

export type ResearchSlug = 'flash-ftl' | 'forensics' | 'vishing' | 'nlp-metadata';

export interface AreaLink {
  /** Language-neutral label (proper names: GitHub, IEEE DataPort, …). */
  label: string;
  href: string;
  icon: 'github' | 'dataset' | 'doi' | 'external';
}

export interface ResearchArea {
  slug: ResearchSlug;
  kicker: string;
  title_en: string;
  title_kr: string;
  era_en: string;
  era_kr: string;
  flag_en?: string;
  flag_kr?: string;
  stat: string;
  desc_en: string[];
  desc_kr: string[];
  tags: string[];
  links: AreaLink[];
  glyph: string;
}

export const researchAreas: ResearchArea[] = [
  {
    slug: 'nlp-metadata',
    kicker: 'nlp-metadata · 권리 메타데이터',
    title_en: 'NLP & Rights Metadata',
    title_kr: '공유저작물 권리 메타데이터 추출',
    era_en: '2024 – present',
    era_kr: '2024 – 현재',
    flag_en: 'funded',
    flag_kr: '수행 과제',
    stat: '67-field metadata schema · 144k-work KOGL corpus',
    desc_en: [
      'A deployed NER + LLM <strong>“division of labor”</strong> pipeline for Korean public-domain rights documents: a multi-provider OCR fallback chain feeds a fine-tuned KLUE-RoBERTa-Large NER model (26 B-I-O labels) and schema-guided LLM extraction running concurrently, and an LLM consolidation arbiter produces a unified 67-field schema with per-field provenance (AGREED / CONFLICT / LLM_ONLY / NER_ONLY / MISSING) and OCR-grounded Korean evidence.',
      'Year 2 adds image + text multimodal analysis — generative VLMs and SigLIP 2 + FAISS similarity — over a 144k-work KOGL corpus. The work is funded by the MCST/KOCCA copyright R&D program, in a consortium with Muhayu and HM Company serving the Korea Copyright Commission (Gongu Madang) and the Korea Culture Information Service Agency (KOGL).',
    ],
    desc_kr: [
      '한국어 공공저작물 권리문서를 위한 NER + LLM <strong>“분업”</strong> 파이프라인을 실서비스 수준으로 구축했습니다. 다중 제공자 OCR 폴백 체인이 미세조정된 KLUE-RoBERTa-Large NER(26개 B-I-O 라벨)과 스키마 기반 LLM 추출을 병렬로 구동하고, LLM 통합 중재기가 필드별 출처(AGREED / CONFLICT / LLM_ONLY / NER_ONLY / MISSING)와 OCR 근거 한국어 증거를 갖춘 67필드 통합 스키마를 생성합니다.',
      '2차년도에는 생성형 VLM과 SigLIP 2 + FAISS 유사도 기반의 이미지 + 텍스트 멀티모달 분석을 14만 4천 건 규모의 공공누리(KOGL) 저작물 코퍼스로 확장합니다. 문화체육관광부/KOCCA 연구개발사업의 지원을 받아, 무하유·HM컴퍼니와의 컨소시엄에서 한국저작권위원회(공유마당)와 한국문화정보원(공공누리)을 수요처로 수행하는 과제입니다.',
    ],
    tags: ['nlp-metadata'],
    links: [],
    glyph:
      '<path d="M6 2.5h10l4 4v17H6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 2.5v4h4M9 11h8M9 14.5h8M9 18h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  },
  {
    slug: 'vishing',
    kicker: 'vishing · 보이스피싱 탐지',
    title_en: 'Voice Phishing Detection',
    title_kr: '한국어 보이스피싱 탐지',
    era_en: '2021 – present',
    era_kr: '2021 – 현재',
    flag_en: 'flagship',
    flag_kr: '주력 분야',
    stat: 'KorCCVi — the first labeled Korean voice-phishing dataset',
    desc_en: [
      'South Korea’s National Police Agency counts 260,694 cumulative vishing incidents from 2016 to 2025, with KRW 6,015.3 billion (≈ USD 4.11 B) in damage. Against that backdrop the lab built <strong>KorCCVi</strong>, the first labeled Korean voice-phishing transcript dataset, and progressed from ML/DL text classifiers and KoBERT to an attention-based CNN-BiLSTM (F1 0.9966), federated learning, and multilingual back-translation with SMOTE augmentation.',
      'The current line is <strong>multimodal (audio + text)</strong> and <strong>privacy-preserving</strong>: lightweight acoustic models (≤223K parameters; 99.59% accuracy with eGeMAPS features) and channel-robust Wav2Vec2.0 with EMA call-level aggregation (F1 ≈ 0.956–0.96 under GSM codec-matched evaluation) — efficient enough for real-time detection; see the papers for benchmark details. A five-year MSIT proposal extends this to deepfake benchmarks (KorCCVi-DF), adversarial defense in the LLM era, large audio-language models, and federated learning with differential privacy.',
    ],
    desc_kr: [
      '경찰청 통계 기준 2016–2025년 누적 보이스피싱 260,694건, 피해액 6조 153억 원(약 41.1억 달러). 연구실은 최초의 레이블링된 한국어 보이스피싱 통화 전사 데이터셋 <strong>KorCCVi</strong>를 구축했고, ML/DL 텍스트 분류기와 KoBERT에서 출발해 어텐션 기반 CNN-BiLSTM(F1 0.9966), 연합학습, 다국어 역번역 + SMOTE 증강으로 연구를 발전시켜 왔습니다.',
      '현재는 <strong>멀티모달(오디오 + 텍스트)</strong>·<strong>프라이버시 보존</strong> 탐지가 중심입니다: 경량 음향 모델(≤223K 파라미터, eGeMAPS 특징으로 정확도 99.59%)과 채널 강건 Wav2Vec2.0 + EMA 통화 단위 집계(GSM 코덱 정합 평가에서 F1 ≈ 0.956–0.96)는 실시간 탐지에 충분한 효율을 갖췄습니다 — 벤치마크 세부 수치는 논문에서 확인할 수 있습니다. 5개년 과기정통부 제안 과제는 딥페이크 벤치마크(KorCCVi-DF), LLM 시대의 적대적 방어, 대형 오디오-언어 모델, 차분 프라이버시 결합 연합학습으로 이 연구를 확장합니다.',
    ],
    tags: ['vishing'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/selfcontrol7/Korean_Voice_Phishing_Detection',
        icon: 'github',
      },
      {
        label: 'IEEE DataPort',
        href: 'https://doi.org/10.21227/163c-0542',
        icon: 'dataset',
      },
    ],
    glyph:
      '<path d="M2 13h3l2.5-6 4 12 3-9 2 3H23" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>',
  },
  {
    slug: 'forensics',
    kicker: 'forensics · 디지털 포렌식',
    title_en: 'Digital Forensics',
    title_kr: '플래시 저장장치 · SQLite 디지털 포렌식',
    era_en: '2010 – 2020',
    era_kr: '2010 – 2020',
    stat: '10+ M.S. theses on flash & SQLite recovery (2010–2020)',
    desc_en: [
      'A decade of digital forensics on flash storage: recovery of deleted and wiped files on NAND flash, anti-forensics via block permutation to prevent recovery, wiping-evidence acquisition, selective recovery under the SSD TRIM command, YAFFS2 file-system metadata management, and circumstantial-evidence recovery for forensic timeline analysis.',
      'The same line extends to databases in the field — SQLite deleted-record recovery, journaling-of-journal-based SQLite file recovery, and message recovery from instant messengers. Altogether this area produced more than ten master’s theses between 2010 and 2020.',
    ],
    desc_kr: [
      '플래시 저장장치 위 디지털 포렌식 연구 10년: NAND 플래시에서 삭제·와이핑된 파일의 복구, 블록 치환으로 복구를 차단하는 안티포렌식, 와이핑 증거 확보, SSD TRIM 명령 하의 선별적 복구, YAFFS2 파일시스템 메타데이터 관리, 포렌식 타임라인 분석을 위한 정황 증거 복구를 다뤘습니다.',
      '이 연구는 현장의 데이터베이스로도 이어졌습니다 — SQLite 삭제 레코드 복구, Journaling of Journal 기반 SQLite 파일 복구, 인스턴트 메신저 메시지 복구. 2010–2020년 사이 10편이 넘는 석사학위논문을 배출한 분야입니다.',
    ],
    tags: ['forensics'],
    links: [],
    glyph:
      '<circle cx="11" cy="11" r="7.5" stroke="currentColor" stroke-width="1.5"/><path d="M16.5 16.5 23 23" stroke="currentColor" stroke-width="1.5"/><path d="M8 11a3 3 0 0 1 6 0" stroke="currentColor" stroke-width="1.5"/>',
  },
  {
    slug: 'flash-ftl',
    kicker: 'flash-ftl · 플래시 스토리지',
    title_en: 'Flash Storage & FTL',
    title_kr: '플래시 메모리 저장 시스템 & FTL',
    era_en: '2004 – present',
    era_kr: '2004 – 현재',
    stat: 'FAST FTL — 712 citations (ACM TECS 2007)',
    desc_en: [
      'The lab co-created the widely cited <strong>FAST</strong> flash translation layer (“A log buffer-based flash translation layer using fully-associative sector translation”, ACM TECS 2007 — cited 700+ times) and the LSTAFF/LSTAFF* system software for large-block flash. The work spans FTL design and surveys, hybrid address mapping, buffer replacement, flash-aware B-tree indexing (WPCB-Tree), and crash and data recovery on NAND flash and SSDs.',
      'Its roots run deeper still: before flash, the lab worked on database systems and spatial/multimedia indexing — k-nearest-neighbor queries with semantic predicates (Spy-Tec+, RS-tree), distance browsing, and GIS object prefetching (1999–2011). Today the flash line feeds directly into the undergraduate File Processing course, whose assignments build an emulated NAND device driver and an FTL from scratch.',
    ],
    desc_kr: [
      '연구실은 700회 이상 인용된 <strong>FAST</strong> 플래시 변환 계층(“A log buffer-based flash translation layer using fully-associative sector translation”, ACM TECS 2007)과 대블록 플래시를 위한 LSTAFF/LSTAFF* 시스템 소프트웨어를 공동 개발했습니다. FTL 설계와 서베이, 혼합 주소 사상, 버퍼 교체, 플래시 인지 B-트리 인덱싱(WPCB-Tree), 그리고 NAND 플래시·SSD에서의 크래시/데이터 복구까지 연구가 이어집니다.',
      '이 연구의 뿌리는 더 깊습니다. 플래시 이전에는 데이터베이스 시스템과 공간·멀티미디어 인덱싱 — 의미 술어를 결합한 k-최근접 이웃 질의(Spy-Tec+, RS-tree), 거리 브라우징, GIS 객체 프리페칭(1999–2011) — 을 연구했으며, 플래시 연구는 오늘날 학부 파일처리 수업에서 NAND 디바이스 드라이버와 FTL을 직접 구현하는 과제로 이어지고 있습니다.',
    ],
    tags: ['flash-ftl', 'indexing'],
    links: [
      {
        label: 'FAST — ACM TECS 2007',
        href: 'https://doi.org/10.1145/1275986.1275990',
        icon: 'doi',
      },
    ],
    glyph:
      '<rect x="5" y="5" width="16" height="16" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M9 1.5v3M13 1.5v3M17 1.5v3M9 21.5v3M13 21.5v3M17 21.5v3M1.5 9h3M1.5 13h3M1.5 17h3M21.5 9h3M21.5 13h3M21.5 17h3" stroke="currentColor" stroke-width="1.5"/>',
  },
];
