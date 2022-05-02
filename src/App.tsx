import './App.css';
import ShowcaseElement from './ShowcaseElement';
import EducationElement from './EducationElement';

function App() {
  return (
    <>
      <header></header>
      <div className="sidebar">
        <div className="top-sidebar">
          <a href="#" className="sidebar-target">🌏</a>
          <a href="#showcase" className="sidebar-target">💡</a>
          <a href="#education" className="sidebar-target">🎓</a>
          <a href="#contact" className="sidebar-target">💬</a>
        </div>
        <div className="bottom-sidebar"></div>
      </div>
      <div className="page-section">
        <h1>🌏 Hello World!</h1>
        <h2>I am Richard Dominick.</h2>
        <h3>Undergraduate student @ NUS Computing & Business, Singapore. Loves coding, learning and just exploring new things.
          <a href="https://www.linkedin.com/in/richard-dominick/">LinkedIn profile &gt;</a>
        </h3>
        <span>Illustrated by me! 😊</span>
      </div>
      <div className="page-section">
        <h1>💡 Showcase</h1>
        <p>Some of the projects I've done in the past and present.</p>
        <div className="showcase-container">
          <ShowcaseElement title='(Planned) Modal Presentation Editor' year='2023' tags={['React.js', 'remark.js']} description='' />
          <ShowcaseElement title='(Planned) NUS Module Swapper' year='2022' tags={['Ruby on Rails', 'Passwordless Authentication', 'JWT']} description='' />
          <ShowcaseElement title='(Ongoing) Computing for Voluntary and Welfare Organisations' year='2023' tags={['Git']} github='https://github.com/richdom2185/cvwo-assignment-frontend' description='' />
          <ShowcaseElement title='(Ongoing) Blankboard v2' year='2022' tags={['Flutter', 'Ruby on Rails', 'Websockets']} description='' />
          <ShowcaseElement title='Source Academy' year='2022' tags={['C', 'Docker', 'Git', 'Golang', 'Linux', 'MQTT', 'React.js', 'Vala']} description='' />
          <ShowcaseElement title='thing.do' year='2022' tags={['Heroku', 'React.js', 'Ruby on Rails', 'TypeScript']} description='' />
          <ShowcaseElement title='GitHub Pages Posts Manager' year='2021' tags={['Bootstrap CSS', 'Dart', 'OAuth']} description='' />
          <ShowcaseElement title='BL Nature Garden' year='2021' tags={['Jekyll', 'JQuery', 'Netlify', 'Responsive', 'Tailwind CSS']} description='' />
          <ShowcaseElement title='Shared Whiteboard App' year='2021' tags={['Flask', 'Flutter', 'GitHub Pages', 'HTML Canvas', 'JSON', 'Short Polling']} description='Predecessor to Blankboard' />
          <ShowcaseElement title='EJC Orientation App' year='2020' tags={['CORS', 'Deployment', 'Flask', 'Flutter', 'OAuth']} description='' />
          <ShowcaseElement title='Flashcards!' year='2019' tags={['Flutter', 'Python']} description='Using Python + Notion + Flutter, ...' />
        </div>
        <p>
          I love learning. I've always been curious since young, and this translates to everything I do, including coding. I believe the best way to learn coding is through projects. That is why, for each personal project I attempt, I always aim to learn something new. Beyond that, I've also made sure to keep learning and improving on modularity, scalability, and other programming best practices over the years. Since I started coding in 2017, I also made sure to keep an eye on good design and user experience. The above are some of my projects that I find worth sharing. Of course, there are many more projects and technologies I did and learn about that did not make it to this list...
        </p>
      </div>
      <div className="page-section">
        <h1>🎓 Education</h1>
        <EducationElement location='National University of Singapore' year='2021-2026' activities='' icon='' />
        <EducationElement location='Eunoia Junior College' year='2019-2020' activities='' icon='' />
        <p>
          I am a perfectionist and have really high standards for my work. Unfortunately, that also means that I often find myself unwilling to showcase a lot of my projects because that do not live up to my standards. However, I realise the value of education and seeing how other people grow over the years has also constantly motivated me to learn more. That is why I am currently working to generate proper documentation and provide the source codes for most of the projects showcased above in due time.
        </p>
      </div>
      <div className="page-section">
        <h1>💬 Contact Me</h1>
        <h2>You can find me on:</h2>
        <h2>Or, send me a message:</h2>
        <p>
          After the initial 2019 version of this website that was full of issues and I was never happy with (I was just getting started with web design then), to a 2021 version I only ended up completing halfway because I wasn't happy with the design I had come up with (I was not very familiar with UI/UX design practices then too), I finally ditched Jekyll (but still kept Tailwind away) for this 2022 version; I hope you liked it here!
        </p>
        <p>P.S. trying to keep up with current design trends and features... Dark Mode coming soon!</p>
      </div>
      <footer>
        <span>Designed and coded by Richard Dominick © 2022.</span>
        <span>Made using React. Powered by GitHub Pages.</span>
        {/* <span><a href="https://github.com/RichDom2185">GitHub</a></span>
        <span><a href="https://www.instagram.com/richdom2185/">Instagram</a></span> */}
      </footer>
    </>
  );
}

export default App;
