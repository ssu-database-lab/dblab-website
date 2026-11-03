/* Research areas, newest line first. desc_* paragraphs may contain
 * <strong>/<em> and are rendered with set:html. Figures live in
 * public/assets/research/. */

export interface ResearchArea {
  slug: string;
  title_en: string;
  title_kr: string;
  summary_en: string;
  summary_kr: string;
  era_en: string;
  era_kr: string;
  desc_en: string[];
  desc_kr: string[];
  links: { label: string; href: string }[];
  image?: {
    src: string;
    w: number;
    h: number;
    alt_en: string;
    alt_kr: string;
    cap_en: string;
    cap_kr: string;
  };
}

export const researchAreas: ResearchArea[] = [
  {
    slug: 'nlp-metadata',
    title_en: 'NLP & Rights Metadata',
    title_kr: '공유저작물 권리 메타데이터 추출',
    summary_en: 'A NER + LLM “division of labor” pipeline that extracts rights metadata from Korean openly licensed works, with per-field provenance.',
    summary_kr: '한국어 공유저작물 권리문서에서 메타데이터를 추출하는 NER + LLM “분업” 파이프라인과 필드별 출처 근거(provenance).',
    era_en: '2024 – present',
    era_kr: '2024 – 현재',
    desc_en: [
      'A deployed NER + LLM <strong>“division of labor”</strong> pipeline for Korean public-domain rights documents: a multi-provider OCR fallback chain feeds a fine-tuned KLUE-RoBERTa-Large NER model (26 B-I-O labels) and schema-guided LLM extraction running concurrently, and an LLM consolidation arbiter produces a unified 67-field schema with per-field provenance (AGREED / CONFLICT / LLM_ONLY / NER_ONLY / MISSING) and OCR-grounded Korean evidence.',
      'Year 2 adds image + text multimodal analysis — generative VLMs and SigLIP 2 + FAISS similarity — over a 144k-work KOGL corpus. The work is funded by the MCST/KOCCA copyright R&D program, in a consortium with Muhayu and HM Company serving the Korea Copyright Commission (Gongu Madang) and the Korea Culture Information Service Agency (KOGL).',
    ],
    desc_kr: [
      '한국어 공공저작물 권리문서를 위한 NER + LLM <strong>“분업”</strong> 파이프라인을 실서비스 수준으로 구축했습니다. 다중 제공자 OCR 폴백 체인이 미세조정된 KLUE-RoBERTa-Large NER(26개 B-I-O 라벨)과 스키마 기반 LLM 추출을 병렬로 구동하고, LLM 통합 중재기가 필드별 출처(AGREED / CONFLICT / LLM_ONLY / NER_ONLY / MISSING)와 OCR 근거 한국어 증거를 갖춘 67필드 통합 스키마를 생성합니다.',
      '2차년도에는 생성형 VLM과 SigLIP 2 + FAISS 유사도 기반의 이미지 + 텍스트 멀티모달 분석을 14만 4천 건 규모의 공공누리(KOGL) 저작물 코퍼스로 확장합니다. 문화체육관광부/KOCCA 연구개발사업의 지원을 받아, 무하유·HM컴퍼니와의 컨소시엄에서 한국저작권위원회(공유마당)와 한국문화정보원(공공누리)을 수요처로 수행하는 과제입니다.',
    ],
    links: [],
    image: {
      src: '/assets/research/nlp-metadata.png',
      w: 1280,
      h: 518,
      alt_en: 'Architecture diagram: OCR feeds concurrent LLM extraction and Korean NER, an LLM arbiter consolidates both into a unified 67-field metadata schema',
      alt_kr: '아키텍처 다이어그램: OCR 결과를 LLM 추출과 한국어 NER가 동시에 처리하고, LLM 중재자가 67개 필드 통합 메타데이터로 통합',
      cap_en: 'NER–LLM consolidation architecture for rights-metadata extraction (deployed pipeline)',
      cap_kr: '권리 메타데이터 추출을 위한 NER–LLM 통합(중재) 아키텍처 — 실제 배포 파이프라인',
    },
  },
  {
    slug: 'vishing',
    title_en: 'Voice Phishing Detection',
    title_kr: '한국어 보이스피싱 탐지',
    summary_en: 'KorCCVi, the first labeled Korean voice-phishing corpus, and models from KoBERT to multimodal audio–text and privacy-preserving real-time detection.',
    summary_kr: '국내 최초의 레이블링된 보이스피싱 코퍼스 KorCCVi와, KoBERT에서 오디오·텍스트 다중모달·프라이버시 보존 실시간 탐지까지 이어지는 모델 연구.',
    era_en: '2021 – present',
    era_kr: '2021 – 현재',
    desc_en: [
      'South Korea’s National Police Agency counts 260,694 cumulative vishing incidents from 2016 to 2025, with KRW 6,015.3 billion (≈ USD 4.11 B) in damage. Against that backdrop the lab built <strong>KorCCVi</strong>, the first labeled Korean voice-phishing transcript dataset, and progressed from ML/DL text classifiers and KoBERT to an attention-based CNN-BiLSTM (F1 0.9966), federated learning, and multilingual back-translation with SMOTE augmentation.',
      'The current line is <strong>multimodal (audio + text)</strong> and <strong>privacy-preserving</strong>: lightweight acoustic models (≤223K parameters; 99.59% accuracy with eGeMAPS features) and channel-robust Wav2Vec2.0 with EMA call-level aggregation (F1 ≈ 0.956–0.96 under GSM codec-matched evaluation) — efficient enough for real-time detection; see the papers for benchmark details.',
    ],
    desc_kr: [
      '경찰청 통계 기준 2016–2025년 누적 보이스피싱 260,694건, 피해액 6조 153억 원(약 41.1억 달러). 연구실은 최초의 레이블링된 한국어 보이스피싱 통화 전사 데이터셋 <strong>KorCCVi</strong>를 구축했고, ML/DL 텍스트 분류기와 KoBERT에서 출발해 어텐션 기반 CNN-BiLSTM(F1 0.9966), 연합학습, 다국어 역번역 + SMOTE 증강으로 연구를 발전시켜 왔습니다.',
      '현재는 <strong>멀티모달(오디오 + 텍스트)</strong>·<strong>프라이버시 보존</strong> 탐지가 중심입니다: 경량 음향 모델(≤223K 파라미터, eGeMAPS 특징으로 정확도 99.59%)과 채널 강건 Wav2Vec2.0 + EMA 통화 단위 집계(GSM 코덱 정합 평가에서 F1 ≈ 0.956–0.96)는 실시간 탐지에 충분한 효율을 갖췄습니다 — 벤치마크 세부 수치는 논문에서 확인할 수 있습니다.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/selfcontrol7/Korean_Voice_Phishing_Detection' },
      { label: 'IEEE DataPort', href: 'https://doi.org/10.21227/163c-0542' },
    ],
    image: {
      src: '/assets/research/vishing.png',
      w: 1280,
      h: 507,
      alt_en: 'Pipeline diagram: input audio stream through preprocessing, eGeMAPS/MFCC/Wav2Vec2.0 feature extraction, a lightweight MLP classifier, and EMA call-level aggregation to a vishing alert — fully on-device',
      alt_kr: '파이프라인 다이어그램: 입력 음성이 전처리, eGeMAPS/MFCC/Wav2Vec2.0 특징 추출, 경량 MLP 분류기, EMA 통화 단위 집계를 거쳐 보이스피싱 경보로 — 완전 온디바이스',
      cap_en: 'On-device, privacy-preserving detection pipeline — acoustic features to a call-level alert (IEEE Access line)',
      cap_kr: '온디바이스 프라이버시 보존 탐지 파이프라인 — 음향 특징에서 통화 단위 경보까지 (IEEE Access 라인)',
    },
  },
  {
    slug: 'forensics',
    title_en: 'Digital Forensics',
    title_kr: '플래시 저장장치 · SQLite 디지털 포렌식',
    summary_en: 'Recovery of deleted and wiped files on NAND flash and SSDs, YAFFS2 metadata, and SQLite deleted-record and messenger forensics.',
    summary_kr: 'NAND 플래시·SSD에서 삭제·와이핑된 파일의 복구, YAFFS2 메타데이터, SQLite 삭제 레코드·메신저 포렌식.',
    era_en: '2010 – 2020',
    era_kr: '2010 – 2020',
    desc_en: [
      'A decade of digital forensics on flash storage: recovery of deleted and wiped files on NAND flash, anti-forensics via block permutation to prevent recovery, wiping-evidence acquisition, selective recovery under the SSD TRIM command, YAFFS2 file-system metadata management, and circumstantial-evidence recovery for forensic timeline analysis.',
      'The same line extends to databases in the field — SQLite deleted-record recovery, journaling-of-journal-based SQLite file recovery, and message recovery from instant messengers. Altogether this area produced more than ten master’s theses between 2010 and 2020.',
    ],
    desc_kr: [
      '플래시 저장장치 위 디지털 포렌식 연구 10년: NAND 플래시에서 삭제·와이핑된 파일의 복구, 블록 치환으로 복구를 차단하는 안티포렌식, 와이핑 증거 확보, SSD TRIM 명령 하의 선별적 복구, YAFFS2 파일시스템 메타데이터 관리, 포렌식 타임라인 분석을 위한 정황 증거 복구를 다뤘습니다.',
      '이 연구는 현장의 데이터베이스로도 이어졌습니다 — SQLite 삭제 레코드 복구, Journaling of Journal 기반 SQLite 파일 복구, 인스턴트 메신저 메시지 복구. 2010–2020년 사이 10편이 넘는 석사학위논문을 배출한 분야입니다.',
    ],
    links: [],
    image: {
      src: '/assets/research/forensics.png',
      w: 1280,
      h: 923,
      alt_en: 'Diagram of block-mapping and log-page-mapping tables being restored from map blocks and pruned by a consistency check after a crash',
      alt_kr: '크래시 이후 맵 블록에서 블록 매핑·로그 페이지 매핑 테이블을 복원하고 일관성 검사로 정리하는 다이어그램',
      cap_en: 'Mapping-table restoration and consistency check after power failure (Electronics 2021)',
      cap_kr: '전원 장애 이후 매핑 테이블 복원과 일관성 검사 (Electronics 2021)',
    },
  },
  {
    slug: 'flash-ftl',
    title_en: 'Flash Storage & FTL',
    title_kr: '플래시 메모리 저장 시스템 & FTL',
    summary_en: 'Log-buffer flash translation layers (FAST, LSTAFF*), hybrid address mapping, flash-aware B-tree indexes, and crash recovery.',
    summary_kr: '로그 버퍼 기반 플래시 변환 계층(FAST, LSTAFF*), 하이브리드 주소 매핑, 플래시 인지 B-트리 인덱스, 크래시 복구.',
    era_en: '2004 – present',
    era_kr: '2004 – 현재',
    desc_en: [
      'The lab co-created the widely cited <strong>FAST</strong> flash translation layer (“A log buffer-based flash translation layer using fully-associative sector translation”, ACM TECS 2007 — cited 700+ times) and the LSTAFF/LSTAFF* system software for large-block flash. The work spans FTL design and surveys, hybrid address mapping, buffer replacement, flash-aware B-tree indexing (WPCB-Tree), and crash and data recovery on NAND flash and SSDs.',
      'Its roots run deeper still: before flash, the lab worked on database systems and spatial/multimedia indexing — k-nearest-neighbor queries with semantic predicates (Spy-Tec+, RS-tree), distance browsing, and GIS object prefetching (1999–2011). Today the flash line feeds directly into the undergraduate File Processing course, whose assignments build an emulated NAND device driver and an FTL from scratch.',
    ],
    desc_kr: [
      '연구실은 700회 이상 인용된 <strong>FAST</strong> 플래시 변환 계층(“A log buffer-based flash translation layer using fully-associative sector translation”, ACM TECS 2007)과 대블록 플래시를 위한 LSTAFF/LSTAFF* 시스템 소프트웨어를 공동 개발했습니다. FTL 설계와 서베이, 혼합 주소 사상, 버퍼 교체, 플래시 인지 B-트리 인덱싱(WPCB-Tree), 그리고 NAND 플래시·SSD에서의 크래시/데이터 복구까지 연구가 이어집니다.',
      '이 연구의 뿌리는 더 깊습니다. 플래시 이전에는 데이터베이스 시스템과 공간·멀티미디어 인덱싱 — 의미 술어를 결합한 k-최근접 이웃 질의(Spy-Tec+, RS-tree), 거리 브라우징, GIS 객체 프리페칭(1999–2011) — 을 연구했으며, 플래시 연구는 오늘날 학부 파일처리 수업에서 NAND 디바이스 드라이버와 FTL을 직접 구현하는 과제로 이어지고 있습니다.',
    ],
    links: [
      { label: 'FAST — ACM TECS 2007', href: 'https://doi.org/10.1145/1275986.1275990' },
    ],
    image: {
      src: '/assets/research/flash-ftl.png',
      w: 1280,
      h: 1304,
      alt_en: 'Architecture diagram of the WPCB-tree: a B+-tree module whose random writes pass through a transit buffer and write-pattern converter into sequential writes over the FTL and flash memory',
      alt_kr: 'WPCB-tree 아키텍처 다이어그램: B+-트리의 랜덤 쓰기가 버퍼와 쓰기 패턴 변환기를 거쳐 순차 쓰기로 FTL·플래시 메모리에 전달',
      cap_en: 'WPCB-tree — a flash-aware B-tree over the FTL (Symmetry 2018)',
      cap_kr: 'WPCB-tree — FTL 위의 플래시 인지 B-트리 (Symmetry 2018)',
    },
  },
];
