import defaultImage from './assets/images/logo-rm.png';

const CONFIG = {
  name: 'ResumeMatcher',

  origin: 'https://www.resumematcher.fyi/',
  basePathname: '/',
  trailingSlash: false,

  title: 'ResumeMatcher — Free Open Source Tool To Deep Dive Into Your Resume & Job Description',
  description:
    'Understand the key data differences between your job description and your resume, then improve upon it. Get hired faster!',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: 'G-9TE3D9NWZB', // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '',

  blog: {
    disabled: true,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
