/* ============================================================
 * UI strings — Database Lab, Soongsil University
 * English at /…, Korean at /ko/… — access via t(lang, key) from
 * src/i18n/utils.ts (falls back to English, then to the key).
 *
 * FULL KEY LIST (keep this comment in sync when adding keys)
 * ----------------------------------------------------------
 * site.*      site.name · site.nameKr · site.university · site.universityKr
 *             site.brandSub · site.description
 * nav.*       nav.home · nav.people · nav.professor · nav.members
 *             nav.alumni · nav.research · nav.publications
 *             nav.software · nav.news · nav.gallery · nav.join
 *             nav.console
 * a11y.*      a11y.skip · a11y.mainNav · a11y.themeToggle · a11y.langToggle
 *             a11y.menuOpen · a11y.menuClose · a11y.home
 *             a11y.peopleSubmenu
 * common.*    common.readMore · common.viewAll · common.all · common.latest
 *             common.email · common.website · common.github · common.dataset
 *             common.code · common.pdf · common.doi · common.kci
 *             common.bibtex · common.copyBibtex · common.copied
 *             common.citations · common.papers · common.paper · common.year
 *             common.unverified · common.external · common.download
 * home.*      home.heroTitle · home.heroTitleSub · home.heroDesc
 *             home.ctaTeam · home.ctaPublications · home.ctaJoin
 *             home.statCitations · home.statAlumni · home.statKocw
 *             home.selectedPubs · home.allPublications
 *             home.allNews
 * section.*   section.research.title/.sub · section.publications.title/.sub
 *             section.software.title/.sub · section.people.title/.sub
 *             section.news.title/.sub · section.teaching.title
 *             section.projects.title/.sub · section.alumni.title/.sub
 *             section.join.title
 * pubs.*      pubs.searchPlaceholder · pubs.searchLabel · pubs.topic
 *             pubs.type · pubs.count ("{shown} / {total}" templates)
 *             pubs.empty · pubs.reset · pubs.underVerification · pubs.award
 *             pubs.filterByTopic · pubs.filterByType
 * tabs.*      tabs.label · tabs.software · tabs.patents
 *             (SectionTabs — the Software & Patents page switcher)
 * patents.*   patents.title/.sub · patents.granted/.pending · patents.inventors
 *             patents.applicant · patents.filed/.registered · patents.appNo/.regNo · patents.view
 * topics.*    topics.flash-ftl · topics.forensics · topics.indexing
 *             topics.vishing · topics.nlp-metadata · topics.systems-other
 * types.*     types.IJ · types.IC · types.DJ · types.DC · types.DS · types.UR
 *             (long-form labels for the publication type codes)
 * people.*    people.professor · people.current · people.education
 *             people.career · people.service · people.interests
 *             people.links · people.alumni · people.phd · people.ms
 *             people.thesis · people.now · people.memberUnverified
 * research.*  research.filterPapers · research.relatedPapers
 *             research.sortHint · research.colProject · research.colAgency
 *             research.colPeriod · research.colPartners · research.colStatus
 *             research.role · research.grantNo
 * status.*    status.active · status.completed · status.proposal
 * software.*  software.kindDataset · software.kindCode · software.versions
 * news.*      news.tagPaper · news.tagAward · news.tagProject
 *             news.tagDataset · news.tagLab · news.tagPatent
 * join.*      join.title · join.desc · join.cta · join.gradInfo
 *             join.msPhd · join.msPhdDesc · join.intern · join.internDesc
 *             join.offer · join.apply · join.applyDesc · join.admissions
 *             join.faq
 * footer.*    footer.lab · footer.school · footer.address · footer.contact
 *             footer.rights · footer.ssuAlt
 * notfound.*  notfound.message · notfound.home
 * console.*   console.back
 * ---------------------------------------------------------- */

export const ui = {
  en: {
    // site
    'site.name': 'Database Lab',
    'site.nameKr': '데이터베이스연구실',
    'site.university': 'Soongsil University',
    'site.universityKr': '숭실대학교',
    'site.brandSub': 'Soongsil University · 숭실대학교',
    'site.description':
      'Database Lab at Soongsil University — from the FAST flash translation layer to Korean voice-phishing detection AI. Led by Prof. Dong-Joo Park.',

    // nav
    'nav.home': 'Home',
    'nav.people': 'People',
    'nav.professor': 'Professor',
    'nav.members': 'Members',
    'nav.alumni': 'Alumni',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.software': 'Software & Patents',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.join': 'Join',
    'nav.console': 'Console',

    // a11y
    'a11y.skip': 'Skip to content',
    'a11y.mainNav': 'Main navigation',
    'a11y.themeToggle': 'Toggle color theme',
    'a11y.langToggle': 'Language',
    'a11y.menuOpen': 'Open menu',
    'a11y.menuClose': 'Close menu',
    'a11y.home': 'DB Lab home',
    'a11y.peopleSubmenu': 'People submenu',

    // common
    'common.readMore': 'Read more',
    'common.viewAll': 'View all',
    'common.all': 'All',
    'common.latest': 'Latest',
    'common.email': 'Email',
    'common.website': 'Website',
    'common.github': 'GitHub',
    'common.dataset': 'Dataset',
    'common.code': 'Code',
    'common.pdf': 'PDF',
    'common.doi': 'DOI',
    'common.kci': 'KCI',
    'common.bibtex': 'BibTeX',
    'common.copyBibtex': 'Copy BibTeX',
    'common.copied': 'Copied!',
    'common.citations': 'citations',
    'common.papers': 'papers',
    'common.paper': 'paper',
    'common.year': 'Year',
    'common.unverified': 'under verification',
    'common.external': 'External link',
    'common.download': 'Download',

    // home
    'home.heroTitle': 'We build systems that understand data.',
    'home.heroTitleSub': '우리는 데이터를 이해하는 시스템을 만듭니다.',
    'home.heroDesc':
      'The Database Lab at Soongsil University — two decades of data systems research, from the FAST flash translation layer to on-device Korean voice-phishing detection and trustworthy rights-metadata AI, led by Prof. Dong-Joo Park.',
    'home.ctaTeam': 'Meet the Team',
    'home.ctaPublications': 'Browse Publications',
    'home.ctaJoin': 'Join the Lab',
    'home.statCitations': 'citations · FAST FTL (ACM TECS 2007)',
    'home.statAlumni': 'alumni · 2 Ph.D. + 17 M.S.',
    'home.statKocw': 'KOCW views · Database open courseware',
    'home.selectedPubs': 'Selected Publications',
    'home.allPublications': 'All publications',
    'home.allNews': 'All news',

    // section headings
    'section.research.title': 'Research Areas',
    'section.research.sub':
      'Four lines of work, one thread: systems that make data fast, recoverable, and trustworthy.',
    'section.publications.title': 'Publications',
    'section.publications.sub':
      'The lab’s full record — filter by topic and type, or search. Bold names are lab members.',
    'section.software.title': 'Software & Data',
    'section.software.sub':
      'Datasets and code the community actually uses — versioned, licensed, and citable.',
    'section.people.title': 'People',
    'section.people.sub': 'One professor, one Ph.D. candidate, and a growing graduate team.',
    'section.news.title': 'News',
    'section.news.sub': 'Papers, awards, projects, and lab life — newest first.',
    'section.teaching.title': 'Teaching',
    'section.projects.title': 'Funded Projects',
    'section.projects.sub': 'National R&D and industry projects the lab runs or contributes to.',
    'section.alumni.title': 'Alumni',
    'section.alumni.sub': '19 graduates — 2 Ph.D. and 17 M.S. — since 2005.',
    'section.join.title': 'Join the Lab',

    // publications explorer
    'pubs.searchPlaceholder': 'Search title, author, venue…',
    'pubs.searchLabel': 'Search publications',
    'pubs.topic': 'Topic',
    'pubs.type': 'Type',
    'pubs.count': '{shown} / {total} entries',
    'pubs.empty': 'No papers match these filters.',
    'pubs.reset': 'Reset filters',
    'pubs.underVerification': 'under verification',
    'pubs.award': 'Award',
    'pubs.filterByTopic': 'Filter by topic',
    'pubs.filterByType': 'Filter by publication type',

    // Software & Patents tab bar (SectionTabs.astro)
    'tabs.label': 'Software & Patents',
    'tabs.software': 'Software & Data',
    'tabs.patents': 'Patents',

    // patents page (shares the Software & Patents tab area)
    'patents.title': 'Patents',
    'patents.sub': 'Korean patents filed through the Soongsil University Industry-Academic Cooperation Foundation.',
    'patents.granted': 'Granted (등록)',
    'patents.pending': 'Pending (출원공개)',
    'patents.inventors': 'Inventors',
    'patents.applicant': 'Applicant',
    'patents.filed': 'Filed',
    'patents.registered': 'Registered',
    'patents.appNo': 'Application No.',
    'patents.regNo': 'Registration No.',
    'patents.view': 'View on Google Patents',

    // topic labels (slugs from the contract tag list)
    'topics.flash-ftl': 'Flash & FTL',
    'topics.forensics': 'Forensics',
    'topics.indexing': 'Indexing',
    'topics.vishing': 'Voice Phishing',
    'topics.nlp-metadata': 'NLP & Metadata',
    'topics.systems-other': 'Systems (other)',

    // publication type long labels
    'types.IJ': 'International journal',
    'types.IC': 'International conference',
    'types.DJ': 'Domestic journal',
    'types.DC': 'Domestic conference',
    'types.DS': 'Dataset',
    'types.UR': 'Under review / in preparation',

    // people
    'people.professor': 'Professor',
    'people.current': 'Current Members',
    'people.education': 'Education',
    'people.career': 'Career',
    'people.service': 'Academic Service',
    'people.interests': 'Research Interests',
    'people.links': 'Links',
    'people.alumni': 'Alumni',
    'people.phd': 'Ph.D.',
    'people.ms': 'M.S.',
    'people.thesis': 'Thesis',
    'people.now': 'Now',
    'people.memberUnverified': 'roster confirmation pending',

    // research page
    'research.filterPapers': 'Filter papers',
    'research.relatedPapers': 'Related papers',
    'research.sortHint': 'Click a column header to sort',
    'research.colProject': 'Project',
    'research.colAgency': 'Agency · Program',
    'research.colPeriod': 'Period',
    'research.colPartners': 'Partners',
    'research.colStatus': 'Status',
    'research.role': 'Role',
    'research.grantNo': 'Grant no.',

    // project status
    'status.active': 'Active',
    'status.completed': 'Completed',
    'status.proposal': 'Proposal',

    // software
    'software.kindDataset': 'Dataset',
    'software.kindCode': 'Code',
    'software.versions': 'Versions',

    // news tags
    'news.tagPaper': 'paper',
    'news.tagAward': 'award',
    'news.tagProject': 'project',
    'news.tagDataset': 'dataset',
    'news.tagLab': 'lab',
    'news.tagPatent': 'patent',

    // join
    'join.title': 'Join the Database Lab',
    'join.desc':
      'We are recruiting M.S./Ph.D. students and undergraduate interns. Work on funded national projects — voice-phishing detection, rights-metadata AI, flash storage — publish internationally, and build systems that ship.',
    'join.cta': 'Email Prof. Park',
    'join.gradInfo': 'Graduate admissions info',
    'join.msPhd': 'M.S. / Ph.D. students',
    'join.msPhdDesc':
      'Full research-track positions on funded projects, with an established international publication record.',
    'join.intern': 'Undergraduate interns',
    'join.internDesc':
      'Hands-on research experience for Soongsil undergraduates — systems, ML, and real datasets.',
    'join.offer': 'What we offer',
    'join.apply': 'How to apply',
    'join.applyDesc': 'Email your CV and transcript to Prof. Park.',
    'join.admissions': '2026 admissions — fall intake',
    'join.faq': 'FAQ',

    // footer
    'footer.lab': 'Database Lab · 데이터베이스연구실',
    'footer.school': 'School of Computer Science & Engineering, Soongsil University',
    'footer.address': '369 Sangdo-ro, Dongjak-gu, Seoul · 서울특별시 동작구 상도로 369, 정보과학관',
    'footer.contact': 'Contact',
    'footer.rights': 'Database Lab, Soongsil University',
    'footer.ssuAlt': 'Soongsil University logo',

    // 404
    'notfound.message': 'The page you are looking for does not exist.',
    'notfound.home': 'Back to home',

    // console
    'console.back': '← back to human interface',
  },

  ko: {
    // site
    'site.name': '데이터베이스연구실',
    'site.nameKr': '데이터베이스연구실',
    'site.university': '숭실대학교',
    'site.universityKr': '숭실대학교',
    'site.brandSub': 'Soongsil University · 숭실대학교',
    'site.description':
      '숭실대학교 데이터베이스연구실 — FAST FTL부터 온디바이스 보이스피싱 탐지, 신뢰할 수 있는 권리 메타데이터 AI까지, 박동주 교수와 함께하는 데이터 시스템 연구.',

    // nav
    'nav.home': '홈',
    'nav.people': '구성원',
    'nav.professor': '교수',
    'nav.members': '현재 구성원',
    'nav.alumni': '졸업생',
    'nav.research': '연구',
    'nav.publications': '논문',
    'nav.software': 'SW·특허',
    'nav.news': '소식',
    'nav.gallery': '갤러리',
    'nav.join': '모집',
    'nav.console': '콘솔',

    // a11y
    'a11y.skip': '본문 바로가기',
    'a11y.mainNav': '주 메뉴',
    'a11y.themeToggle': '테마 전환',
    'a11y.langToggle': '언어 전환',
    'a11y.menuOpen': '메뉴 열기',
    'a11y.menuClose': '메뉴 닫기',
    'a11y.home': '데이터베이스연구실 홈',
    'a11y.peopleSubmenu': '구성원 하위 메뉴',

    // common
    'common.readMore': '더 보기',
    'common.viewAll': '전체 보기',
    'common.all': '전체',
    'common.latest': '최신',
    'common.email': '이메일',
    'common.website': '웹사이트',
    'common.github': 'GitHub',
    'common.dataset': '데이터셋',
    'common.code': '코드',
    'common.pdf': 'PDF',
    'common.doi': 'DOI',
    'common.kci': 'KCI',
    'common.bibtex': 'BibTeX',
    'common.copyBibtex': 'BibTeX 복사',
    'common.copied': '복사됨!',
    'common.citations': '회 인용',
    'common.papers': '편',
    'common.paper': '편',
    'common.year': '연도',
    'common.unverified': '확인 중',
    'common.external': '외부 링크',
    'common.download': '다운로드',

    // home
    'home.heroTitle': '우리는 데이터를 이해하는 시스템을 만듭니다.',
    'home.heroTitleSub': 'We build systems that understand data.',
    'home.heroDesc':
      '숭실대학교 데이터베이스연구실 — FAST FTL부터 온디바이스 보이스피싱 탐지, 신뢰할 수 있는 권리 메타데이터 AI까지, 박동주 교수와 함께하는 20여 년의 데이터 시스템 연구.',
    'home.ctaTeam': '연구실 구성원',
    'home.ctaPublications': '논문 살펴보기',
    'home.ctaJoin': '연구실 지원하기',
    'home.statCitations': '회 인용 · FAST FTL (ACM TECS 2007)',
    'home.statAlumni': '명의 졸업생 · 박사 2 + 석사 17',
    'home.statKocw': 'KOCW 조회수 · 데이터베이스 공개강의',
    'home.selectedPubs': '대표 논문',
    'home.allPublications': '논문 전체 보기',
    'home.allNews': '소식 전체 보기',

    // section headings
    'section.research.title': '연구 분야',
    'section.research.sub':
      '네 갈래의 연구, 하나의 목표 — 빠르고, 복구 가능하며, 신뢰할 수 있는 데이터 시스템.',
    'section.publications.title': '논문',
    'section.publications.sub':
      '연구실의 전체 논문 목록 — 주제·유형별 필터와 검색을 지원합니다. 굵은 글씨는 연구실 구성원입니다.',
    'section.software.title': '소프트웨어 & 데이터',
    'section.software.sub':
      '커뮤니티가 실제로 쓰는 데이터셋과 코드 — 버전과 라이선스, 인용 정보를 갖췄습니다.',
    'section.people.title': '구성원',
    'section.people.sub': '교수 1명, 박사과정 1명, 그리고 성장하는 대학원 연구팀.',
    'section.news.title': '소식',
    'section.news.sub': '논문, 수상, 과제, 연구실 소식 — 최신순.',
    'section.teaching.title': '강의',
    'section.projects.title': '연구 과제',
    'section.projects.sub': '연구실이 수행하거나 참여하는 국가 R&D 및 산학 과제.',
    'section.alumni.title': '졸업생',
    'section.alumni.sub': '2005년 이후 박사 2명, 석사 17명 — 총 19명의 졸업생.',
    'section.join.title': '연구실 지원',

    // publications explorer
    'pubs.searchPlaceholder': '제목·저자·학회 검색…',
    'pubs.searchLabel': '논문 검색',
    'pubs.topic': '주제',
    'pubs.type': '유형',
    'pubs.count': '{shown} / {total}편',
    'pubs.empty': '조건에 맞는 논문이 없습니다.',
    'pubs.reset': '필터 초기화',
    'pubs.underVerification': '확인 중',
    'pubs.award': '수상',
    'pubs.filterByTopic': '주제별 필터',
    'pubs.filterByType': '논문 유형별 필터',

    // Software & Patents tab bar (SectionTabs.astro)
    'tabs.label': '소프트웨어·특허',
    'tabs.software': '소프트웨어·데이터',
    'tabs.patents': '특허',

    // patents page (shares the Software & Patents tab area)
    'patents.title': '특허',
    'patents.sub': '숭실대학교 산학협력단을 통해 출원·등록된 대한민국 특허입니다.',
    'patents.granted': '등록',
    'patents.pending': '출원공개',
    'patents.inventors': '발명자',
    'patents.applicant': '출원인',
    'patents.filed': '출원일',
    'patents.registered': '등록일',
    'patents.appNo': '출원번호',
    'patents.regNo': '등록번호',
    'patents.view': 'Google Patents에서 보기',

    // topic labels
    'topics.flash-ftl': '플래시 & FTL',
    'topics.forensics': '디지털 포렌식',
    'topics.indexing': '인덱싱',
    'topics.vishing': '보이스피싱 탐지',
    'topics.nlp-metadata': 'NLP·메타데이터',
    'topics.systems-other': '시스템 기타',

    // publication type long labels
    'types.IJ': '국제 저널',
    'types.IC': '국제 학술대회',
    'types.DJ': '국내 저널',
    'types.DC': '국내 학술대회',
    'types.DS': '데이터셋',
    'types.UR': '심사 중 / 준비 중',

    // people
    'people.professor': '교수',
    'people.current': '현재 구성원',
    'people.education': '학력',
    'people.career': '경력',
    'people.service': '학술 활동',
    'people.interests': '연구 관심사',
    'people.links': '링크',
    'people.alumni': '졸업생',
    'people.phd': '박사',
    'people.ms': '석사',
    'people.thesis': '학위논문',
    'people.now': '현재',
    'people.memberUnverified': '명단 확인 중',

    // research page
    'research.filterPapers': '관련 논문 보기',
    'research.relatedPapers': '관련 논문',
    'research.sortHint': '열 제목을 클릭하면 정렬됩니다',
    'research.colProject': '과제',
    'research.colAgency': '지원기관 · 사업',
    'research.colPeriod': '기간',
    'research.colPartners': '참여기관',
    'research.colStatus': '상태',
    'research.role': '역할',
    'research.grantNo': '과제번호',

    // project status
    'status.active': '수행 중',
    'status.completed': '완료',
    'status.proposal': '제안',

    // software
    'software.kindDataset': '데이터셋',
    'software.kindCode': '코드',
    'software.versions': '버전',

    // news tags
    'news.tagPaper': '논문',
    'news.tagAward': '수상',
    'news.tagProject': '과제',
    'news.tagDataset': '데이터셋',
    'news.tagLab': '연구실',
    'news.tagPatent': '특허',

    // join
    'join.title': '데이터베이스연구실과 함께하세요',
    'join.desc':
      '석·박사 과정과 학부연구생을 모집합니다. 보이스피싱 탐지, 권리 메타데이터 AI, 플래시 스토리지 등 국가 과제에 참여하고, 국제 학술지에 논문을 발표하며, 실제로 배포되는 시스템을 만듭니다.',
    'join.cta': '박동주 교수님께 메일 보내기',
    'join.gradInfo': '대학원 입학 안내',
    'join.msPhd': '석사·박사 과정',
    'join.msPhdDesc':
      '국가 과제 기반의 연구 트랙 — 국제 학술지 게재 실적이 검증된 연구 환경입니다.',
    'join.intern': '학부연구생',
    'join.internDesc':
      '숭실대 학부생을 위한 실전 연구 경험 — 시스템, 머신러닝, 실제 데이터셋을 다룹니다.',
    'join.offer': '연구실이 제공하는 것',
    'join.apply': '지원 방법',
    'join.applyDesc': 'CV와 성적증명서를 박동주 교수님께 이메일로 보내주세요.',
    'join.admissions': '2026학년도 후기 모집',
    'join.faq': '자주 묻는 질문',

    // footer
    'footer.lab': 'Database Lab · 데이터베이스연구실',
    'footer.school': '숭실대학교 컴퓨터학부',
    'footer.address': '서울특별시 동작구 상도로 369 숭실대학교 정보과학관 · 369 Sangdo-ro, Dongjak-gu, Seoul',
    'footer.contact': '연락처',
    'footer.rights': 'Database Lab, Soongsil University',
    'footer.ssuAlt': '숭실대학교 로고',

    // 404
    'notfound.message': '요청하신 페이지를 찾을 수 없습니다.',
    'notfound.home': '홈으로 돌아가기',

    // console
    'console.back': '← back to human interface',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)['en'];
