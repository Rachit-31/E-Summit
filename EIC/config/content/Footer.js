/* eslint-disable max-len */
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGithubSquare,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default {
  links: [
    {
      title: 'About Us',
      id: 'about-us',
      url: '/#About',
      target: '',
      rel: '',
    },
    {
      title: 'Contact Us',
      id: 'contact-us',
      url: 'mailto:rachitjainjaipur@gmail.com',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      title: 'Sponsor Us',
      id: 'sponsor-us',
      url: 'https://tally.so/r/3jl2za',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
  Nitr: {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Institute_of_Information_Technology%2C_Una_logo.png',
  },
  // Logo for E-Summit
  hacknitr: {
    img: 'https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Institute_of_Information_Technology%2C_Una_logo.png',
    alt: 'E-SUMMIT',
  },
  icons: {
    content1: 'For more updates,',
    content2: 'follow us on all social media.',
  },
  copyright: {
    content: `Architected with ❤️ \nby EIC Team`,
  },
  cards: [
    {
      title: 'About IIIT Una',
      text: 'Indian Institute of Information Technology, Una (IIIT Una), established in 2014-15 , is one of the premier institutes of technology in India. Strategically located in the serene surroundings of Una district in Himachal Pradesh, IIIT Una aims to nurture talent, foster innovation, and contribute to the development of the nations technological landscape.',
      img: {
        src: 'https://img.collegepravesh.com/2015/11/IIIT-Una-Logo.png',
        alt: 'IIIT Una',
      },
    },
  ],
  socials: [
    {
      name: 'fb',
      icon: faFacebook,
      link: 'https://www.instagram.com/thisisrachitjain/',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/fb_zzl91w.png',
    },
    {
      name: 'insta',
      icon: faInstagram,
      link: 'https://www.instagram.com/hacknitr/',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/insta_aktzjs.png',
    },
    {
      name: 'li',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/company/hacknitr/',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/linkedin_eoenzs.png',
    },
    // {
    //   icon: faDiscord,
    //   link: 'https://hacknitr.com/discord',
    // },
    {
      name: 'gh',
      icon: faGithubSquare,
      link: 'https://github.com/dscnitrourkela/project-oregano',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/github_ve2kbe.png',
    },
    {
      name: 'twitter',
      icon: faTwitterSquare,
      link: 'https://twitter.com/hacknitr',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/TwitterX_uua6eg.png',
    },
  ],
  organisers: [
    {
      id: 1,
      link: 'https://dscnitrourkela.org/team.html',
      span: true,
      image: {
        src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027911/HackNITR/Frame_11_ilwmzh_nugoqr.png',
        alt: 'Google DSC NIT Rourkela',
      },
      column: 'span 2',
    },
    {
      id: 2,
      link: 'https://opencodenitr.herokuapp.com/',
      span: false,
      image: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/logo_plus_wordmark_white_ulz4wt.png',
        alt: 'Opencode',
      },
    },
    {
      id: 3,
      link: 'https://education.github.com/',
      span: false,
      image: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/GitHub_CE_2_u8jaum.png',
        alt: 'Github Campus Expert',
      },
    },
  ],
  impLinks: [
    {
      text: 'Terms and Conditions',
      href: '/',
    },
    {
      text: 'Privacy Policy',
      href: 'https://drive.google.com/file/d/18w9fE4ZhUrugPAlXH7tqxbKQ16Cr6lqn/view?pli=1',
    },
    {
      text: 'Code of Conduct',
      href: ' https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
    },
  ],
};
