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
    key: 1,
    icon: faGithub,
    link: 'https://github.com/bkhanale',
  },
  {
    key: 2,
    icon: faLinkedin,
    link: 'https://linkedin.com/in/bhushan-khanale',
  },
  {
    key: 3,
    icon: faTwitter,
    link: 'https://twitter.com/BhushanKhanale',
  },
  {
    key: 4,
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
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-165070744-1', 'bhushankhanale.com');
              ga('create', 'UA-165070744-2', 'bhushankhanale.com', {'name': 'rollup', 'allowLinker': true, 'cookieName': 'rollupGA'})
              ga('send', 'pageview');
            `,
          }}
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
          <IconLink
            key={icon.key}
            className="mr-3"
            icon={icon.icon}
            link={icon.link}
          />
        ))}
      </div>
    </Layout>
  );
}
