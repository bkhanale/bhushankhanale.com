import Head from 'next/head';
import Image from 'next/image';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import IconLink from '../components/IconLink';

const handles = [
  {
    icon: faGithub,
    link: 'https://github.com/bkhanale',
  },
  {
    icon: faLinkedin,
    link: 'https://linkedin.com/in/bhushan-khanale',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/BhushanKhanale',
  },
  {
    icon: faEnvelope,
    link: 'mailto:hello@bhushankhanale.com',
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bhushan Khanale</title>
        <meta
          name="description"
          content="Personal portfolio webpage of Bhushan Khanale."
        />
      </Head>
      <div className="flex flex-col mt-20 text-center justify-center items-center">
        <div className="">
          <Image
            src="/images/profile.jpeg"
            alt="Bhushan"
            height="200"
            width="200"
            className="rounded-full"
          />
        </div>
        <div className="mt-5">
          <h1 className="text-6xl">Bhushan Khanale</h1>
          <h2 className="text-xl mt-4">Software Engineer</h2>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        {handles.map((icon) => (
          <IconLink className="mr-3" icon={icon.icon} link={icon.link} />
        ))}
      </div>
    </Layout>
  );
}
