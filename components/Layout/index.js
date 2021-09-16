import Head from 'next/head';
import PropTypes from 'prop-types';
import IconLink from '../IconLink';
import NavBar from '../NavBar';

const Layout = ({ children }) => {
  return (
    <div>
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
              ga('require', 'linker');
              ga('linker:autoLink', ['abhishalya.tech']);
              ga('create', 'UA-165070744-2', 'bhushankhanale.com', {'name': 'rollup', 'allowLinker': true, 'cookieName': 'rollupGA'});
              ga('send', 'pageview');
            `,
          }}
        />
      </Head>
      <NavBar />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
};

IconLink.PropTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
