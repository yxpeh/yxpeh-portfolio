<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>TrekAlert</h1>
        <div class="skills">
          <h3>Role: <br />UI/UX Designer</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Figma, Adobe Suite</h3>
        </div>
      </div>
    </div>
    <div class="shortcuts">
      <p>Skip to:</p>
      <a href="#problem" class="shortcut-link">Problem Statement</a>
      <a href="#users" class="shortcut-link">Users</a>
      <a href="#prototype" class="shortcut-link">Prototyping & Testing</a>
      <a href="#improvements" class="shortcut-link">Improvements</a>
      <a href="#final" class="shortcut-link">Final Product</a>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>
        For this project, my team aimed to create a one-stop app that caters to
        hikers of all levels, from beginners to experts alike. The app provides
        tailored professional support for hike preparation, taking into account
        trail difficulty and location-specific needs.
      </p>
      <div class="divider-hor"></div>
      <!-- problem statement -->
      <h2 id="problem">What's the problem?</h2>
      <p>
        Through our initial research and surveys, we discovered that a major
        deterrent for people deciding to go hiking is the difficulty in
        planning, along with unforeseen circumstances that can arise during the
        hike, such as weather changes or transport cancellations.
      </p>
      <img src="/assets/trekalert/survey-res.png" />
      <p>Therefore, our problem statement asks:</p>
      <p>
        <i
          >How might we provide hikers with access to a concise information
          platform that also delivers timely updates in mountainous areas?</i
        >
      </p>
      <div class="divider-hor"></div>
      <!-- our users -->
      <h2 id="users">Our target users</h2>
      <p>
        Through a combination of primary research, conducted via an initial
        survey, and secondary research, including analysis of various hiking
        forums on platforms like Reddit and Facebook, my team and I were able to
        identify and refine the characteristics of different subsets of our
        target users. This research led to the creation of these user personas:
      </p>
      <img src="/assets/trekalert/persona-1.png" style="width: 80%" />
      <img src="/assets/trekalert/persona-2.png" style="width: 80%" />
      <img src="/assets/trekalert/persona-3.png" style="width: 80%" />
      <div class="divider-hor"></div>
      <!-- Reasearch -->
      <h2>Existing Solutions</h2>
      <p>
        Before developing our solution, we decided to study existing products to
        identify areas where they excel and areas where they fall short. Our
        primary competitors in this space are AllTrails and Google Maps:
      </p>
      <div class="image">
        <img src="/assets/trekalert/comp-1.png" style="width: 500px" />
        <img src="/assets/trekalert/comp-2.png" style="width: 500px" />
      </div>
      <p>
        With this in mind, we developed a solution aimed at filling the gaps
        left by these products, providing features and functionality that better
        meet the needs of hikers.
      </p>
      <div class="divider-hor"></div>
      <h2>Our proposed solution</h2>
      <p>
        After completing our initial research, we decided to develop TrekAlert,
        a one-stop information platform that focuses on delivering real-time
        updates through push notifications and a user-friendly dashboard.
      </p>
      <p>
        TrekAlert would stand out from competitors with its simple UI, making it
        easy for users to quickly digest real-time information. It also offers
        warnings about unforeseen circumstances, even outside the app, ensuring
        hikers stay informed and prepared!
      </p>
      <div class="divider-hor"></div>

      <h2 id="prototype">Prototyping and Testing</h2>
      <h3>Low-Fidelity Prototype</h3>
      <p>
        We began by creating a low-fidelity prototype of our app for user
        testing. Using Figmam, we experimented with three different layouts to
        gather feedback and determine user preferences, helping us finalize the
        direction for the design.
      </p>
      <p>
        The first flow centers on a dashboard that presents all relevant
        information concisely and clearly:
      </p>
      <img
        src="/assets/trekalert/flow-1.png"
        style="height: 70%; box-shadow: none; margin-top: 50px"
      />
      <p>
        The second flow uses a map to display each notification within its
        location-specific context:
      </p>
      <img
        src="/assets/trekalert/flow-2.png"
        style="height: 70%; box-shadow: none; margin-top: 50px"
      />
      <p>
        And the last flow displays each notification in chronological order.
      </p>
      <img
        src="/assets/trekalert/flow-3.png"
        style="height: 70%; box-shadow: none; margin-top: 50px"
      />
      <p>
        We also drafted different formats for our out-of-app push notifications
        to determine how users prefer their information to be presented.
      </p>
      <div class="image">
        <img src="/assets/trekalert/notif-1.png" />
        <img src="/assets/trekalert/notif-2.png" />
      </div>
      <h3>Initial Testing</h3>
      <p>
        We used the low-fidelity prototype for our first round of testing, where
        we conducted in-person interviews and surveys to get a sense of what
        users preferred. We also had participants rank the different prototypes
        to help us understand which design worked best for them.
      </p>
      <p>While the ranking results gave us a clear winner:</p>
      <img src="/assets/trekalert/ranking.png" />
      <p>
        The scenario testing during the interview stage uncovered some
        interesting insights that we hadn’t expected.
      </p>
      <p>
        The participants were asked to put themselves in the shoes of users in
        different scenarios we provided and evaluate the app’s effectiveness
        based on those situations. Through this activity, they were able to
        point out, very helpfully, that different users would want different
        hierarchies of information based on factors like their skill level and
        the purpose of their hike. This highlighted the need for a flexible way
        to display information that can adapt to each user’s specific needs.
      </p>
      <h3>High Fidelity Prototype</h3>
      <p>
        With our newly gained insights, we moved on to creating the
        high-fidelity prototype. Based on user preferences, we made the
        dashboard the main page of the app, ensuring it was both easy to
        navigate and packed with the most relevant information for hikers.
      </p>
      <img src="/assets/trekalert/dashboard.svg" style="width: 80%" />
      <p>
        To address the need for a flexible information display, we added a
        3-question survey to the user flow during sign-up. This allows us to
        tailor the information hierarchy based on their preferences.
      </p>
      <img src="/assets/trekalert/login-survey.png" style="width: 80%" />
      <p>
        In addition, users can update their preferences anytime, giving them
        full control over how the app presents information.
      </p>
      <h3>Usability Testing</h3>
      <p>
        Once the high-fidelity prototype was ready, we conducted key usability
        testing. Participants were given specific tasks to complete, and we
        recorded the time taken to finish each one. We also asked for their
        satisfaction scores to assess how well the app met their needs.
      </p>

      <p>
        We also conducted another round of in-depth in-person interviews, where
        participants shared their thoughts on their satisfaction with the app.
        We asked them if they felt the features were sufficient and if there was
        anything they would want to add or improve.
      </p>
      <p>
        While we received favorable results, with users highlighting that we
        have succeeded in our main goal of provided real-time feedback and ease
        of use, they also pointed out some important shortcomings, namely:
        <li>Insufficient information about specific trails,</li>
        <li>
          While the dashboard is useful for planning, it is less useful during
          the hike itself compared to the map, and
        </li>
        <li>
          Lack of a social aspect, which is a crucial component in the hiking
          community.
        </li>
      </p>
      <div class="divider-hor"></div>

      <h2 id="improvements">Further Improvements</h2>
      <p>
        With these key insights in mind, we decided to add a few key features to
        address these shortcomings.
      </p>
      <p>
        First, we added a feature that provides users with in-depth information
        for specific trails, including hiker reviews, maps, advice, and more!
      </p>
      <img src="/assets/trekalert/trail-info.svg" />
      <p>
        From here, users can also join groups heading to the same trail,
        fostering a much-needed community aspect within the app and allowing
        hikers to connect, share experiences, and even plan hikes together.
      </p>
      <img src="/assets/trekalert/social.svg" />
      <p>
        Recognizing its usefulness through the interviews, we decided to
        re-incorporate the map from our low-fidelity prototype as a separate
        feature. This allows users to view notifications with their location
        highlighted, making it easier to navigate and stay informed during the
        hike.
      </p>
      <p>
        Additionally, users can report their own sightings and alert other
        hikers, ensuring that our notifications are timely, comprehensive, and
        community-driven!
      </p>
      <img src="/assets/trekalert/map.svg" />

      <div class="divider-hor"></div>

      <h2 id="final">Final Product</h2>
      <p>
        After countless rounds of iterations, TrekAlert is now a comprehensive
        information app that goes above and beyond in addressing our initial
        issues, providing hikers with a robust platform for planning, real-time
        updates, and community engagement. Take a look at the final Figma
        prototype here!
      </p>
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1)"
        width="800"
        height="800"
        src="https://embed.figma.com/proto/OOFWMQnjmKUi2Gaol3oUVW/Hi-Fi-Prototype?node-id=73-136&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=73%3A136&show-proto-sidebar=1&embed-host=share"
        allowfullscreen
      ></iframe>

      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
      <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="trekalert" />
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
  background-image: url("/assets/trekalert/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin: 20px 0 10px 0;
}

.summary {
  position: absolute;
  right: 5%;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.summary h1 {
  color: white;
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
  text-align: center;
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
  margin: 50px auto 50px auto;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(72, 72, 72, 0.3);
  max-width: 100%;
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
iframe {
  display: block;
  margin: auto;
}
</style>
