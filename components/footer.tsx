import Image from 'next/image';
import githubIcon from '../public/GitHub-Mark-32px.png';
import linkedinIcon from '../public/In-White-34.png';

const Footer = () => (
  <footer className="flex flex-col items-center bg-gray-100 p-4 shadow dark:bg-gray-800 sm:flex-row md:justify-between md:p-6">
    <a
      href="https://steam.pepitozcatemporium.com/"
      className="mb-4 flex items-center sm:mb-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3 h-10 w-10 rounded-full bg-indigo-600 p-2 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        Steam Distillery
      </span>
    </a>

    <span className="mt-4 inline-flex items-center justify-center sm:ml-auto sm:mt-0">
      <a href="https://github.com/azgoalie" className="dark:invert">
        <Image src={githubIcon} alt="GitHub Icon" width={32} height={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/travis-mcmahon-79055656"
        className="ml-3 invert  dark:invert-0"
      >
        <Image src={linkedinIcon} alt="GitHub Icon" width={32} height={32} />
      </a>
    </span>
  </footer>
);

export default Footer;
