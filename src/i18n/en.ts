/* English UI text, grouped by page. ko.ts must have exactly the same keys:
 * the editor flags a mismatch, and the build fails on one (see index.ts).
 * {name}-style placeholders are filled in with fmt(). Members, papers, and
 * news live in src/data/, not here. */

const en = {
  site: {
    name: 'DBLab',
    school: 'Soongsil University',
    fullName: 'DBLab, Soongsil University',
    address: 'Room 326, Information Science Building, Soongsil University, 369 Sangdo-ro, Dongjak-gu, Seoul 06978, Korea',
    menu: 'Menu',
    switchLang: '한국어',
  },

  nav: {
    home: 'Home',
    members: 'Members',
    research: 'Research',
    publications: 'Publications',
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

  members: {
    title: 'Members',
    description: 'Faculty, students, and alumni of DBLab at Soongsil University.',
    faculty: 'Faculty',
    students: 'Students',
    alumni: 'Alumni',
    profName: 'Prof. {name}',
    education: 'Education',
    career: 'Career',
    office: 'Office',
    facultyPage: 'Faculty page',
    phd: 'Ph.D.',
    ms: 'M.S.',
    now: 'Now',
  },

  research: {
    title: 'Research',
    description:
      'Research areas of DBLab at Soongsil University: rights-metadata extraction, voice-phishing detection, digital forensics, and flash storage.',
    projects: 'Projects',
    active: 'Active',
    completed: 'Completed',
  },

  publications: {
    title: 'Publications',
    description: 'Journal and conference papers, datasets, and patents from DBLab at Soongsil University.',
    patents: 'Patents',
    granted: 'Granted',
    pending: 'Filed',
    registered: 'Reg.',
    filed: 'App.',
  },
};

export type Dict = typeof en;
export default en;
