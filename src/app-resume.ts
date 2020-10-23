import './components/header';
import './components/experience-card';
import './components/icon';
import {css, customElement, html, LitElement} from 'lit-element';

@customElement('app-resume')
export class Resume extends LitElement {
  static styles = css`
    :host {
      font-family: 'IBM Plex Sans', sans-serif;
    }

    @media screen {
      :host {
        display: grid;
        grid-template-areas:
          'header header header header'
          '. content content .';
        margin-bottom: 5rem;
      }

      @media (max-width: 900px) {
        :host {
          grid-template-areas: 'header' 'content';
        }
      }
    }

    #content {
      grid-area: content;
    }

    app-header {
      grid-area: header;
    }

    fa-icon {
      font-size: 1.5rem;
    }

    h2 {
      margin: 0;
    }

    li {
      margin: 0.25rem 0;
    }

    .title {
      display: grid;
      color: var(--text);
      grid-template-columns: 3rem auto;
      align-items: flex-end;
      border-bottom: 0.25rem var(--primary) solid;
      margin: 2rem 2rem 0 2rem;
      padding-bottom: 0.75rem;
    }

    .section {
      display: grid;
      grid-template-rows: auto;
      row-gap: 1rem;
    }

    .body {
      margin-top: 0.5rem;
      font-size: 1.1rem;
      padding-right: 2rem;
    }
    
    #uni-awards {
      margin-top: 0.5rem;
    }

    ul {
      margin-top: 0;
    }
    
    #skills {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 1rem;
      color: var(--text);
      margin-left: 2rem;
      font-size: 1.1rem;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <div id="content">
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-graduation-cap"></fa-icon>
            <h2>EDUCATION</h2>
          </div>
          <experience-card
            title="University of Toronto"
            subtitle="Honours Bachelor of Science, Computer Science Co-op"
            location="Toronto, ON"
            time="2019 — Present"
          >
            <div slot="body" class="body">
              Cumulative GPA: <strong>3.75 / 4.00</strong> <br />
              Notable Courses: Software Design, Intro to Software Engineering,
              Discrete Mathematics, Multivariable Calculus, Linear Algebra<br />
              Awards:
              <ul id="uni-awards">
                <li><strong>Dean's List</strong> 2020-21</li>
                <li><strong>University of Toronto Scholar</strong> ($7500)</li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-briefcase"></fa-icon>
            <h2>EXPERIENCES</h2>
          </div>
          <experience-card
            title="Software Developer"
            subtitle="CaseWare International Inc. &bull; Co-op"
            location="Toronto, ON"
            time="Sept. 2020 — Present"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Engaged in an <strong>Agile Scrum</strong> of 11 team members
                  for the <strong>CaseWare Cloud</strong> product.
                </li>
                <li>
                  Developed bug fixes using <strong>Angular</strong> and
                  <strong>AngularJS</strong> <em>improving</em> the end
                  experience for distributors
                </li>
                <li>
                  Designed and implemented <strong>Unit Tests</strong> from
                  existing manual tests <strong><em>reducing</em></strong> the
                  developer and QA regression effort.
                </li>
              </ul>
            </div>
          </experience-card>
          <experience-card
            title="Food Service Associate — Tim Hortons"
            subtitle="Canada's Wonderland"
            location="Vaughan, ON"
            time="July — Sept. 2017"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Prepared and served
                  <strong>food and beverage items</strong> to park guests and
                  operated cash registers
                </li>
                <li>
                  Provided <strong>quality service</strong> to guests,
                  <em><strong>excelling</strong></em> in
                  <strong>customer service</strong> and
                  <strong>communication</strong>
                </li>
                <li>
                  Fulfilled orders while focusing on
                  <strong>direct Guest-Associate interactions</strong> in
                  compliance with <strong>WHMIS</strong> and company protocol
                </li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-code"></fa-icon>
            <h2>PROJECTS</h2>
          </div>
          <experience-card
            title="Ritrovo"
            subtitle="Full-Stack Social Platform"
            isProject="true"
            location="ritrovo.herokuapp.com"
            time="Sept. 2020"
            ><div slot="body" class="body">
              <ul>
                <li>
                  Built a <strong>Markdown</strong> post based dashboard using
                  <strong>Angular</strong> and <strong>Bootstrap</strong>
                  <em>while maintaining</em> a clean design
                </li>
                <li>
                  Implemented a <strong>REST API</strong> with
                  <strong>Node and ExpressJS</strong> featuring standard
                  <strong>CRUD</strong> operations for Users and Posts
                </li>
                <li>
                  Added <strong>Password Hashing</strong> to the
                  <strong>MongoDB</strong> database to improve User security and
                  authentication
                </li>
              </ul>
            </div></experience-card
          >
          <experience-card
            title="Noten"
            subtitle="Cloud Based Grade Management Application"
            isProject="true"
            location="ply.gl/com.noten"
            time="May 2020"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Built using <strong>React Native</strong> to achieve
                  <em>a single codebase</em> deployable on
                  <strong>Android</strong> and <strong>iOS</strong>
                </li>
                <li>
                  Implemented
                  <strong>Firebase Auth and Realtime Database</strong> to allow
                  users to login and sync data
                  <em><strong>instantly</strong></em>
                </li>
                <li>
                  Followed modern React practices such as
                  <strong>Hooks and Lifecycle</strong> methods
                </li>
                <li>
                  Learned the basics of async functions and promises with
                  <strong>JavaScript ES6</strong>
                </li>
              </ul>
            </div>
          </experience-card>
          <experience-card
            title="Personal Portfolio"
            subtitle="Showcase of Projects and Experiences"
            isProject="true"
            location="navn.me"
            time="Jan. 2020 — Present"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Built using <strong>HTML</strong>, <strong>CSS</strong> and
                  <strong>JavaScript</strong> with a focus on
                  <strong>responsive web design</strong>
                </li>
                <li>
                  Used modular <strong>Web Components</strong> to
                  <em><strong>decrease</strong></em> redundant code and
                  <em><strong>increase</strong></em> code reusability
                </li>
                <li>
                  Implemented <strong>CSS Grid</strong> to increase usability
                  across various screen sizes
                </li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-medal"></fa-icon>
            <h2>SKILLS</h2>
          </div>
          <div id="skills">
            <div class="category">
              <strong>Programming:</strong> HTML, CSS, TypeScript, JavaScript,
              Java, C, Python, Shell
            </div>
            <div class="category">
              <strong>Frameworks and Tools:</strong> Angular, React Native,
              Jira, Git, TravisCI, MongoDB, Firebase
            </div>
            <div class="category">
              <strong>Development Methodology:</strong> Agile with Scrum
              Framework
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-resume': Resume;
  }
}
