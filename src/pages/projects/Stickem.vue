<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>Stick 'Em Dojo</h1>
        <div class="skills">
          <h3>Role: <br />UI/UX Designer</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Figma, React.js, Tailwind</h3>
        </div>
      </div>
    </div>
    <div class="shortcuts">
      <p>Skip to:</p>
      <a href="#problem" class="shortcut-link">Problem Statement</a>
      <a href="#users" class="shortcut-link">Users</a>
      <a href="#research" class="shortcut-link">Research</a>
      <a href="#solution" class="shortcut-link">Proposed Solution</a>
      <a href="#testing" class="shortcut-link">User Testing</a>
      <a href="#improvements" class="shortcut-link">Improvements</a>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>
        For my final-year project at the Singapore University of Technology and
        Design, I collaborated with Stick 'Em Singapore, a STEAM education
        provider, as a UI/UX designer, developing a digital platform to promote
        self-directed STEAM learning for children.
      </p>
      <div class="divider-hor"></div>
      <!-- Stickem overview -->
      <h2>What is Stick 'Em?</h2>
      <p>
        <a
          href="https://stickem.sg/"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >Stick 'Em</a
        >
        is a company dedicated to making STEAM education accessible worldwide
        through its highly affordable STEAM kits. These kits use plastic
        connectors and chopsticks, enabling children to build complex robots and
        creations that encourage self-directed learning. In addition to their
        kits, Stick 'Em offers workshops and teacher training programs,
        featuring a curriculum designed to develop 21st-century skills in a fun
        and engaging way!
      </p>
      <img src="/assets/stickem/stickem-kit.png" />
      <div class="divider-hor"></div>
      <!-- problem statement -->
      <h2 id="problem">What's the problem?</h2>
      <p>
        Despite Stick 'Em's success in providing quality educational
        opportunities to schools, their current approach—primarily relying on
        workshops—comes with several limitations.
      </p>
      <li>Engaging schools are way too slow and can’t scale fast!</li>
      <li>Only a limited no. of kids are selected for workshops!</li>
      <li>Many schools still see STEAM as non-essential!</li>
      <p>Therefore, our problem statement asks:</p>
      <p>
        <i
          >How might we design an affordable, self-directed STEAM education
          system that enables children to engage in independent learning outside
          of school?</i
        >
      </p>
      <div class="divider-hor"></div>
      <!-- our users -->
      <h2 id="users">Our users</h2>
      <p>
        Our target users are children aged 9–14 with a keen interest in
        STEAM-related fields, including creative expression, robotics, and
        engineering. These children are digital natives, accustomed to
        socializing and engaging with digital platforms, making them comfortable
        navigating online environments and learning through technology.
      </p>
      <img src="/assets/stickem/them-kids.png" />
      <p>
        We chose to focus on children aged 9 and above, as this is a critical
        stage in their education when curiosity and critical thinking skills
        begin to develop, while the upper age limit is set at 14, as older
        children typically seek more advanced tools that go beyond the scope of
        our general STEAM kits.
      </p>
      <div class="divider-hor"></div>
      <!-- Reasearch -->
      <h2 id="research">Some research before we start...</h2>
      <p>
        Our first step was to analyze successful market solutions. We researched
        educational platforms that not only promote self-directed learning, but
        also effectively encourage users to engage with the material
        consistently over time. One standout example that excels in this area is
        Duolingo, renowned for its ability to sustain user engagement through
        gamification and well-designed learning experiences.
      </p>
      <img src="/assets/stickem/duolingo.png" />
      <p>
        Duolingo effectively leverages both intrinsic and extrinsic motivation
        through its feature design:
      </p>
      <img src="/assets/stickem/duo-gamification.svg" />
      <p>
        By combining these motivational factors, Duolingo sustains user
        engagement and encourages long-term learning. Therefore, for our initial
        prototype, we aimed to incorporate these motivational factors to
        effectively support self-directed STEAM learning.
      </p>
      <div class="divider-hor"></div>
      <h2 id="solution">Our proposed solution</h2>
      <p>
        With all of this in mind, we proposed developing Stick 'Em Dojo, a
        gamified digital platform that complements the existing STEAM kits to
        create an engaging phygital ecosystem for self-directed learning. The
        platform will offer a continuous stream of challenges for children to
        complete, progressing through a linear progression system. To enhance
        motivation, features like streaks and rewards will be implemented to
        keep them engaged and motivated throughout their learning journey.
      </p>

      <p>
        First, we created various low-fidelity wireframes to visualize potential
        layouts and gather feedback through preference testing.
      </p>
      <div class="image">
        <img src="/assets/stickem/wireframe-1.png" />
        <img src="/assets/stickem/wireframe-2.png" />
      </div>

      <p>
        After selecting the preferred layout, I studied the brand's aesthetic
        identity to create a consistent design library for the high-fidelity
        prototype. I ensured the design followed Stick 'Em's high-energy,
        cartoony style that appeals to kids, while staying true to the company's
        core identity.
      </p>
      <img src="/assets/stickem/des-guide.svg" style="width: 70%" />
      <p>
        With the style finalized, I moved on to creating an interactive,
        high-fidelity prototype in Figma.
      </p>
      <div class="image">
        <img src="/assets/stickem/hifi-1.png" />
        <img src="/assets/stickem/hifi-2.png" />
      </div>
      <p>
        Once the prototype was ready, we were set to give it a test run with our
        user base to gather valuable feedback and insights!
      </p>
      <div class="divider-hor"></div>
      <!-- Player Profile -->
      <h2 id="testing">User testing</h2>
      <p>
        For our initial testing, we conducted moderated sessions with 22
        participants, half of whom being familiar with Stick 'Em products, and
        the other half wbeing first-time users. Each child was given a Stick 'Em
        kit and a laptop with the Stick 'Em Dojo platform loaded. After a brief
        introduction, they explored both the platform and the kit freely, while
        we observed their interactions and provided guidance only when
        necessary.
      </p>
      <img src="/assets/stickem/mod-test.png" />
      <p>
        After the moderated session, we conducted a round of remote user
        testing, where we observed participants' behavior in their own homes.
        Using data analytics, we tracked metrics like retention rates and the
        number of challenges completed to gain insights into how the children
        interacted with the platform independently over time.
      </p>
      <img src="/assets/stickem/remote-sub.png" />
      <p>
        This, combined with a survey conducted after each session, provided us
        with valuable insights into the effectiveness of our solution and helped
        us identify areas for improvement!
      </p>
      <h3>So, what worked?</h3>
      <p>
        Throughout our test sessions, we were pleased to find that several
        aspects of our platform performed well:
      </p>
      <li>The kids found the platform fun, and were actively engaged!</li>
      <li>
        Kids were feeding off each other's creativity and inspired each other
        with their creations!
      </li>
      <li>The platform was intuitive and easy for them to use!</li>
      <h3>What didn't?</h3>
      <p>
        Unfortunately, the data collected also revealed some significant
        limitations. Firstly, the strictly linear progression system didn't
        cater well to children with varying skill levels. Experienced children
        often found the challenges too easy and boring, skipping ahead, while
        less experienced children struggled, getting stuck at several
        roadblocks.
      </p>
      <p>
        This is reflected in the data collected, reflecting each challenge's
        perceived difficulty:
      </p>
      <img src="/assets/stickem/data.png" />
      <p>
        Furthermore, we noticed a significant dip in retention after the first
        few weeks of active use. When surveyed, the most common reason cited was
        the lack of social motivators—children felt they had no one else to
        engage with or compete against, which impacted their continued interest.
      </p>

      <p>
        With these valuable insights, we were able to identify key areas for
        improvement in future development.
      </p>
      <div class="divider-hor"></div>

      <h2 id="improvements">Further Improvements</h2>
      <p>
        With these insights in mind, we decided to experiment with a checkpoint
        system to better cater to different skill levels. This allows more
        experienced children to progress to higher levels faster, while still
        letting less experienced kids advance at their own pace. Plus, it was a
        fun way to incorporate the karate belt system into our Dojo theme!
      </p>
      <img src="/assets/stickem/checkpoint.png" />
      <p>
        Recognizing the importance of social elements, we also plan to test a
        showcase feature where users can display their own creations and draw
        inspiration from others. This will foster a sense of community and
        encourage continued engagement through shared creativity.
      </p>
      <div class="image">
        <img src="/assets/stickem/showcase-1.png" />
        <img src="/assets/stickem/showcase-2.png" />
      </div>
      <p>
        Future possible features include a tournament system to introduce a
        competitive element, user-created challenges that allow children to
        design their own tasks for others to try, and in-game rewards to further
        incentivize continued use of the platform!
      </p>
      <div class="divider-hor"></div>

      <h2>What we are at now...</h2>
      <p>
        This project is still ongoing as part of a year-long capstone, but you
        can check out the work-in-progress website
        <a
          href="https://dojo.stickem.sg/"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >!
      </p>

      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
      <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="stickem" />
  </div>
</template>

<script>
import SeeOthers from "../../components/SeeOthers.vue";

export default {
  components: {
    SeeOthers,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "InstrumentSans-Reg";
  src: local("InstrumentSans-Reg"),
    url("../fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "InstrumentSans-Med";
  src: local("InstrumentSans-Med"),
    url("../fonts/InstrumentSans-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.banner {
  position: relative;
  width: 100%;
  height: 225px;
  background-image: url("/assets/stickem/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f68d2a;
  margin: 20px 0 10px 0;
}

.summary {
  position: absolute;
  right: 8%;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.summary h1 {
  color: rgb(255, 255, 255);
  font-size: 3.5rem;
  margin-bottom: 5px;
  font-family: "InstrumentSans-Med";
}
.skills {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "InstrumentSans-Reg";
  gap: 20px;
  margin-bottom: 35px;
}
.skills h3 {
  font-size: 0.9rem;
  line-height: 1.5;
}

.details {
  width: 75%;
  margin: auto;
  margin-top: 50px;
}

.details h2 {
  font-size: 2rem;
  font-family: "InstrumentSans-Med";
}
.details h3 {
  font-size: 1.25rem;
  font-family: "InstrumentSans-Med";
  color: #743800;
}

.details p {
  font-size: 1.1rem;
  font-family: "InstrumentSans-Reg";
  line-height: 1.8;
}
.details li {
  font-size: 1.1rem;
  font-family: "InstrumentSans-Reg";
  line-height: 1.8;
  margin-left: 50px;
}
.divider-hor {
  justify-content: center;
  width: 100%;
  height: 2px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}

.divider-vert {
  justify-content: center;
  height: 60%;
  width: 1px;
  background-color: #ffffff;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;
  margin: auto;
}
img {
  display: block;
  margin: 20px auto 20px auto;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(72, 72, 72, 0.3);
  max-width: 100%;
}
.link {
  font-family: "InstrumentSans-Med";
  position: relative;
  color: #8c6e61;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}
.link:hover {
  color: rgb(46, 28, 21);
}

.link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #f68d2a;
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}
.shortcuts {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 40px;
}
.shortcuts p {
  font-size: 1rem;
  margin-right: 40px;
  font-family: "InstrumentSans-Reg";
  line-height: 1.8;
}

.shortcut-link {
  font-family: "InstrumentSans-Reg";
  position: relative;
  color: #8c6e61;
  margin-right: 15px;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.shortcut-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #f68d2a;
  transition: width 0.3s ease;
}

.shortcut-link:hover {
  color: rgb(46, 28, 21);
}

.shortcut-link:hover::after {
  width: 100%;
}
</style>
