/* English UI text, grouped by page. ko.ts must have exactly the same keys:
 * the editor flags a mismatch, and the build fails on one (see index.ts).
 * {name}-style placeholders are filled in with fmt(). Members, papers,
 * courses, and news live in src/data/, not here. */

const en = {
  site: {
    name: 'DBLab',
    school: 'Soongsil University',
    fullName: 'DBLab, Soongsil University',
    address: 'Room 326, Information Science Building, Soongsil University, 369 Sangdo-ro, Dongjak-gu, Seoul 06978, Korea',
    menu: 'Menu',
    theme: 'Switch light/dark mode',
    switchLang: '한국어',
  },

  nav: {
    professor: 'Professor',
    members: 'Members',
    research: 'Research',
    publications: 'Publications',
    patents: 'Patents',
    gallery: 'Gallery',
  },

  home: {
    title: 'DBLab',
    sub: 'School of Computer Science and Engineering, Soongsil University',
    description:
      'DBLab at Soongsil University, led by Prof. Dong-Joo Park — flash storage, digital forensics, voice-phishing detection, and rights-metadata extraction.',
    intro:
      'DBLab studies how data is stored, managed, and analyzed. Starting from flash-memory storage systems, our work has grown to include digital forensics, voice-phishing detection, and rights-metadata extraction for openly licensed works.',
    research: 'Research',
    allResearch: 'All research',
    news: 'Recent News',
  },

  professor: {
    title: 'Professor',
    description: 'Prof. Dong-Joo Park, School of Computer Science and Engineering, Soongsil University.',
    profName: 'Prof. {name}',
    office: 'Office',
    facultyPage: 'Faculty page',
    interests: 'Research Interests',
    education: 'Education',
    career: 'Career',
    service: 'Service',
    teaching: 'Teaching',
    undergrad: 'Undergraduate',
    grad: 'Graduate',
  },

  members: {
    title: 'Members',
    description: 'Students and alumni of DBLab at Soongsil University.',
    students: 'Students',
    alumni: 'Alumni',
    phd: 'Ph.D.',
    ms: 'M.S.',
    now: 'Now',
  },

  research: {
    title: 'Research',
    description:
      'Research areas of DBLab at Soongsil University: rights-metadata extraction, voice-phishing detection, digital forensics, and flash storage.',
    software: 'Datasets & Code',
    dataset: 'Dataset',
    code: 'Code',
    projects: 'Projects',
    active: 'Active',
    completed: 'Completed',
  },

  publications: {
    title: 'Publications',
    description: 'Journal and conference papers and datasets from DBLab at Soongsil University.',
  },

  patents: {
    title: 'Patents',
    description: 'Patents from DBLab at Soongsil University.',
    granted: 'Granted',
    pending: 'Filed',
    registered: 'Reg.',
    filed: 'App.',
  },

  gallery: {
    title: 'Gallery',
    description: 'Conferences, awards, and lab events of DBLab at Soongsil University.',
    empty: 'Photo coming soon',
  },
};

export type Dict = typeof en;
export default en;
