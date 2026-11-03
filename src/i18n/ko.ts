/* 한국어 UI 문구. en.ts와 키가 똑같아야 합니다(다르면 빌드가 멈춥니다).
 * 구성원·논문·소식은 여기가 아니라 src/data/에 있습니다. */

import type { Dict } from './en';

const ko: Dict = {
  site: {
    name: 'DB연구실',
    school: '숭실대학교 컴퓨터학부',
    fullName: '숭실대학교 DB연구실',
    address: '(06978) 서울특별시 동작구 상도로 369 숭실대학교 정보과학관 326호',
    menu: '메뉴',
    switchLang: 'English',
  },

  nav: {
    home: '홈',
    members: '구성원',
    research: '연구',
    publications: '논문',
  },

  home: {
    title: 'DB연구실',
    sub: '숭실대학교 컴퓨터학부',
    description:
      '숭실대학교 DB연구실(박동주 교수) — 플래시 스토리지, 디지털 포렌식, 보이스피싱 탐지, 권리 메타데이터 추출.',
    intro:
      'DB연구실은 데이터를 저장·관리·분석하는 기술을 연구합니다. 플래시 메모리 저장 시스템에서 시작해 디지털 포렌식, 보이스피싱 탐지, 공유저작물 권리 메타데이터 추출로 연구 영역을 넓혀 왔습니다.',
    research: '연구 분야',
    allResearch: '연구 전체 보기',
    news: '최근 소식',
  },

  members: {
    title: '구성원',
    description: '숭실대학교 DB연구실의 교수, 재학생, 졸업생.',
    faculty: '지도교수',
    students: '재학생',
    alumni: '졸업생',
    profName: '{name} 교수',
    education: '학력',
    career: '경력',
    office: '연구실',
    facultyPage: '교수 소개',
    phd: '박사',
    ms: '석사',
    now: '현재',
  },

  research: {
    title: '연구',
    description:
      '숭실대학교 DB연구실의 연구 분야: 권리 메타데이터 추출, 보이스피싱 탐지, 디지털 포렌식, 플래시 스토리지.',
    projects: '연구 과제',
    active: '진행 중',
    completed: '종료',
  },

  publications: {
    title: '논문',
    description: '숭실대학교 DB연구실의 학술지·학술대회 논문, 데이터셋, 특허.',
    patents: '특허',
    granted: '등록',
    pending: '출원',
    registered: '등록번호',
    filed: '출원번호',
  },
};

export default ko;
