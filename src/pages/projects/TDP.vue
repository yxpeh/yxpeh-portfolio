<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>The Doodle People</h1>
        <div class="skills">
          <h3>Role: <br />Creative Technologist</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Unity, Blender, Adobe Suite</h3>
        </div>
      </div>
    </div>
    <div class="shortcuts">
      <p>Skip to:</p>
      <a href="#ideation" class="shortcut-link">Ideation</a>
      <a href="#final" class="shortcut-link">Final Product</a>
      <a href="#video" class="shortcut-link">Full Exhibition</a>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>
        During my time as a Creative Technologist Intern with The Doodle People
        in June, 2023, I had the opportunity to delve into technical art, game
        development and design. I worked on both the studio's original projects
        and client-requested initiatives. The most significant of these was the
        TOLL Omniverse, a virtual exhibit designed to showcase the workflow and
        logistics of the TOLL Group.
      </p>
      <p>
        For this project, I was responsible for designing the exhibit’s main
        flow, gameplay mechanics and UI, modelling immersive environments, and
        developing animations and visual effects. Additionally, I implemented
        the logic for player interactions in Unity and Spatial.io, ensuring a
        seamless and engaging user experience.
      </p>
      <div class="divider-hor"></div>
      <!-- client info and requests -->
      <h2>TOLL Group</h2>
      <p>
        Toll Group is a leading logistics and transportation company
        headquartered in Melbourne, Australia. Renowned for their expertise in
        supply chain solutions, they provide a wide range of services, including
        freight, warehousing, and distribution, catering to clients across
        various industries worldwide.
      </p>
      <p>
        During my internship, The Doodle People were approached by Toll Group to
        collaborate on an ambitious project. The goal was to showcase the future
        of logistics and highlight Toll Group's commitment to innovation through
        a series of interactive stations and experiences. Thus, we were tasked
        with creating an accessible and user-friendly virtual world to
        complement their physical exhibition, enabling the company to engage
        audiences on a global scale.
      </p>
      <div class="divider-hor"></div>
      <!-- ideation -->
      <h2 id="ideation">Ideation</h2>
      <p>
        To emphasize Toll Group's innovative and future-ready mindset, we
        decided to set the exhibit in a sci-fi environment. Our goal was to
        emulate a futuristic space hub with a clean, professional aesthetic that
        aligned with their forward-thinking vision.
      </p>
      <div class="image">
        <img src="/assets/tdp/inspo-1.png" />
        <img src="/assets/tdp/inspo-2.png" />
      </div>
      <p>
        We divided the exhibit into four distinct hubs, each highlighting a
        crucial aspect of Toll Group's workflow. These included: the Autonomous
        Zone, showcasing their automated logistics solutions; the Communication
        Hub, emphasizing their extensive communication and oversight
        capabilities; the Omnichannel Exhibit, demonstrating their expertise in
        managing logistics across multiple supply chain channels; and the
        Sustainability Zone, highlighting their commitment to achieving
        sustainable development goals.
      </p>
      <div class="image">
        <img src="/assets/tdp/reg-1.png" />
        <img src="/assets/tdp/reg-2.png" />
      </div>
      <p>
        All four zones are connected through the Innovation Hub, where players
        begin their journey through the exhibit. From this central hub, they can
        access any of the four zones in whichever order they prefer. Our design
        ensures that participants can explore the exhibit at their own pace.
      </p>
      <img src="/assets/tdp/hub-sketch.png" />
      <p>
        The hub is also where we introduce Tomirai, Toll Group's friendly AI
        assistant and mascot! Tomirai serves as the guide throughout the
        exhibit, offering helpful information and ensuring a smooth and engaging
        experience for users as they explore each zone.
      </p>
      <img src="/assets/tdp/tomirai.png" />
      <div class="divider-hor"></div>
      <!-- final-->
      <h2 id="final">Final Product</h2>
      <p>
        For this project, I concentrated on developing the Innovation Hub, the
        Autonomous Zone, and the Communication Hub.
      </p>

      <h3>Innovation Hub</h3>
      <p>
        As the central transport hub, the Innovation Hub is the first area
        players encounter and the space they will return to most frequently.
        Therefore, we focused on presenting all information succinctly and in an
        easily understandable manner. Navigation points were designed to be
        clear and intuitive, guiding players effortlessly to their desired
        destinations.
      </p>
      <img src="/assets/tdp/hub-ss.png" />
      <p>
        Upon first entering, players are greeted by Tomirai, who provides a
        brief introduction and tutorial to familiarize them with the exhibit and
        its features:
      </p>
      <img src="/assets/tdp/tomirai-intro.png" />
      <p>
        After which, players can choose to enter any of the four rooms, each
        representing a specific area of the exhibit. Each room includes a brief
        summary of its focus and a teleporter that leads to its respective
        location.
      </p>

      <h3>Autonomous Zone</h3>
      <p>
        The Autonomous Zone is designed as a futuristic warehouse, showcasing a
        variety of advanced robots that efficiently handle tasks such as
        organizing, overseeing, and transporting goods.
      </p>
      <img src="/assets/tdp/warehouse.png" />
      <p>
        We start players in an empty warehouse, where they are prompted to
        participate in a mini-game. In this game, they must select the
        appropriate automation tool for a specified task, after being given a
        brief summary of each robot's functionality. This interactive experience
        helps players internalize the different robot types and understand their
        roles within an automated warehouse setting.
      </p>
      <img src="/assets/tdp/pedestal.png" />
      <p>
        Since this is an exhibition, we decided there there was no need to
        enforce making the "right" choices. The goal is simply to enjoy the
        experience! If players happen to make a mistake, Tomirai is designed to
        swoop in and correct them, ensuring that the exhibit continues smoothly
        and without hassle.
      </p>
      <p>
        Once the mini-game is completed, players "install" the robots they’ve
        chosen, transforming the warehouse from a quiet, empty space into a
        bustling hub of activity. The once-static environment comes to life,
        showcasing the efficiency of Toll Group's automated solutions and
        highlighting the stark contrast between the initial state and the fully
        operational warehouse.
      </p>
      <img src="/assets/tdp/riseup.gif" />
      <p>
        The player is free to roam the warehouse, observing the fully animated
        robots as they carry out their tasks. Each robot is accompanied by a
        brief description explaining its function. I animated all robots to work
        in perfect harmony, seamlessly transporting boxes, sorting them, and
        performing other tasks, creating a dynamic and efficient environment
        that showcases the power of automation!
      </p>
      <p>
        Players can also choose to proceed to the second level of the warehouse,
        where they’ll have the opportunity to witness a drone inspecting shelves
        at their command.
      </p>
      <img src="/assets/tdp/drone.png" />

      <h3>Communication Hub</h3>
      <p>
        This zone is designed to highlight the effectiveness of Toll Group's
        supply chain oversight.
      </p>
      <p>
        I designed the environment to resemble a starship bridge, giving players
        a sense of control over a vast operation. This setting immerses them in
        the experience of managing and overseeing a supply chain, allowing them
        to feel like they're at the helm of something truly significant.
      </p>
      <img src="/assets/tdp/cz.png" />

      <p>
        At the very center of the hub is a holographic globe that reflects the
        real-time status of the global supply chain. However, when the player
        first enters, we introduce a cutscene depicting a global crisis:
      </p>
      <img src="/assets/tdp/redglobe.png" />
      <p>
        The player is then guided through resolving the supply chain issues
        using Toll Group's solutions, with each solution showcased in a
        dedicated station throughout the hub. As they navigate these stations,
        we made sure that they are able to gain a deeper understanding of how
        Toll's innovations can address and rectify supply chain disruptions
        through informative animated presentations.
      </p>
      <p>
        The first station, the Digital Twin station, demonstrates how warehouses
        can be optimized through simulations.
      </p>
      <img src="/assets/tdp/dt.png" />
      <p>
        Next, the ToTrak station highlights how Toll Group helps track product
        conditions in real time.
      </p>
      <img src="/assets/tdp/totrak.png" />

      <p>
        Lastly, the Telematics station demonstrates how Toll can detect
        drowsiness or other issues among the trucks in the supply chain.
      </p>
      <img src="/assets/tdp/telematics.png" />

      <p>
        All of Toll's solutions are showcased through a smooth and detailed
        cutscene, ensuring that the information is presented in an easily
        digestible and engaging way. We made sure this immersive experience
        helps players understand the practical applications of each solution
        while keeping them captivated throughout!
      </p>

      <h3 id="video">Full Exhbition</h3>
      <p>You can view the fully completed experience here:</p>
      <VimeoPlayer videoId="925777515" />
      <p></p>
      <div class="divider-hor"></div>
      <p></p>
      <h2>Conclusion</h2>
      <p>
        This project was my first deep dive into game development and
        interactive design, and it was an incredibly rewarding experience. The
        Doodle People gave me the opportunity to explore every facet of the
        process, from technical implementation to narrative and experience
        design. I got to contribute to the development of a real-world project
        that combined creativity, problem-solving, and storytelling. It was a
        fantastic learning journey, and I absolutely loved being a part of it!
      </p>
      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
      <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="tdp" />
  </div>
</template>

<script>
import SeeOthers from "../../components/SeeOthers.vue";
import VimeoPlayer from "../../components/VimeoPlayer.vue";

export default {
  components: {
    SeeOthers,
    VimeoPlayer,
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
  background-color: #f68d2a;
  margin: 20px 0 10px 0;
}

.summary {
  position: absolute;
  right: 10%;
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
}
.details h3 {
  font-size: 1.25rem;
  font-family: "InstrumentSans-Med";
  margin-top: 50px;
  color: #743800;
}

.details p {
  font-size: 1.1rem;
  font-family: "InstrumentSans-Reg";
  line-height: 1.8;
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
