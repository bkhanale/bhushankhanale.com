import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl m-auto">
        <div className="my-8">
          <h1 className="text-3xl">About me</h1>
        </div>
        <div className="text-lg">
          <p>Hey, this is Bhushan. Glad you wanted to know more about me.</p>
          <br />
          <p>
            I&apos;m currently working as a Software Engineer at BrowserStack. I
            was previously working at Turtlemint building a scalable and
            reliable platform to share their content to digital partners across
            India. I also contribute to open-source projects and was recently a
            GSoC student for the coala project.
          </p>
          <br />
          <p>
            Feel free to reach me on any of my social media handles. Also, if
            you have some time do have a look ay my blog too ;)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
