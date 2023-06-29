import defaultImage from './assets/images/gh_heaer.png';

const CONFIG = {
  name: 'Resume Matcher',

  origin: 'https://www.resumematcher.fyi/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Resume Matcher | Unlock Your Dream Job with Our Free Open Source Resume Matcher',
  description:
    'Maximize Your Career Potential: Instantly Decode, Align, and Upgrade Your Resume with the Job Description. Discover Resume Matcher for Faster Success!',
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
  googleSiteVerificationId: 'pDKL81vMAVmhxTGnunLZJNEx21qNB0hzOYH6I-RCQ0Q',

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
