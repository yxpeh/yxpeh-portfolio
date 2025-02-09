<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>Deep Space Breach</h1>
        <div class="skills">
          <h3>Role: <br />Game Designer</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Unity, Meta SDK</h3>
        </div>
      </div>
    </div>
    <div class="shortcuts">
      <p>Skip to:</p>
      <a href="#concept" class="shortcut-link">Concept</a>
      <a href="#environment" class="shortcut-link">Environment</a>
      <a href="#monster" class="shortcut-link">Monster</a>
      <a href="#puzzles" class="shortcut-link">Puzzles</a>
      <a href="#result" class="shortcut-link">Result</a>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>
        For our Extended Experience module, my team and I created a sci-fi
        horror VR escape room, Deep Space Breach, designed to fully immerse
        players in tension and terror. With monsters lurking and puzzles to
        solve under pressure, the game heightens fear through sight, sound, and
        an unrelenting sense of urgency.
      </p>
      <p>
        For this project, I was responsible for the overall game design and
        technical implementation in Unity using the Meta SDK.
      </p>
      <div class="divider-hor"></div>
      <!-- concept and storyline -->
      <h2 id="concept">Concept and Storyline</h2>
      <p>
        In our game, the player is the pilot of a morally gray research vessel
        that has spiraled into chaos. Their once-contained experiments have
        broken free, seeking revenge. To escape, the player must collect four
        keys scattered across the ship and detach the vessel’s head before it's
        too late. But with relentless monsters hunting them down for revenge,
        every decision—where to run, when to hide, and which puzzle to solve
        next—becomes a fight for survival. All the while, they’re forced to
        confront the horrors they helped create!
      </p>
      <img src="/assets/horrorescape/concept.png" style="width: 60%" />
      <p>
        Our game concept centers around a horror-themed escape room experience
        set in a sci-fi backdrop. However, we decided to break away from the
        traditional linear escape room format, allowing players to tackle
        puzzles in parallel. With a monster in pursuit, this approach gives
        players the freedom to start, abandon, and revisit challenges to their
        discretion based on perceived threat, adding both strategy and tension
        to the experience.
      </p>

      <div class="divider-hor"></div>
      <!-- environment design -->
      <h2 id="environment">Environment Design</h2>
      <p>
        The research vessel consists of five main areas across two levels, with
        key cards hidden in the Bio Lab, Physics Lab, Chemistry Lab, and Engine
        Room. To escape, the player must solve themed puzzles in each area,
        collect all key cards, and reach the control room—all while evading the
        relentless monsters hunting them down!
      </p>
      <img src="/assets/horrorescape/map.png" style="width: 80%" />
      <p>
        We designed the environment with sleek, geometric structures and
        futuristic machinery to reinforce the sci-fi theme. To heighten the
        horror, we contrasted this with bloodstains and scattered bodies,
        creating an eerie sense of chaos and dread.
      </p>
      <img src="/assets/horrorescape/bio-dark.png" style="width: 60%" />
      <p>
        These details invite players to uncover the story through observation,
        deepening their immersion. The gore also acts as a subtle guide,
        providing contextual hints for solving each room’s puzzles.
      </p>
      <p>
        We also kept the environment intentionally dark to create a sense of
        uncertainty. With limited visibility, players can never be sure where
        the monsters are, making every step more tense and unpredictable.
      </p>
      <img src="/assets/horrorescape/light-flicker.gif" />
      <div class="divider-hor"></div>

      <h2 id="monster">Enemy Design</h2>
      <p>
        Before exploring the finer details of gameplay, let’s first examine the
        design of our relentless pursuers:
      </p>
      <img
        src="/assets/horrorescape/monster-jumpscare.png"
        style="width: 40%"
      />
      <p>
        These monsters are the tortured remnants of the research vessel's
        unethical experiments. After enduring horrific experiments by the
        player's colleagues, they’ve gained superhuman abilities, including
        phasing through walls and using sonar to track the player, much like a
        predator. Now, they’ve escaped, driven by a thirst for revenge......
      </p>
      <p>
        We designed these monsters to follow the player along a Euclidean path,
        with the ability to walk through walls. This keeps players on edge, even
        while solving puzzles, as they can never afford to turn their backs on
        the threat lurking behind them.
      </p>
      <img src="/assets/horrorescape/monster-wobble.gif" />
      <p>
        When the monster gets close enough to the player, a jumpscare sequence
        is triggered, signaling that the game is lost.
      </p>
      <img src="/assets/horrorescape/jumpscare.gif" />
      <p>
        To give players a small means of defense, we gave them a flashlight at
        the start of the game. It can stun and slow down the monsters, adding a
        strategic layer to gameplay. Players must decide whether to use the
        flashlight to fend off the monsters, buying time to move to another
        area, or focus the light on the puzzle to finish it quickly and escape!
      </p>
      <p>
        Of course, it is unfair to give the player a constant source of stress.
        Therefore, we established borders on the world map that the monsters
        can’t cross, giving players safe zones where they can collect
        themselves.
      </p>
      <img src="/assets/horrorescape/map-borders.png" style="width: 60%" />
      <p>
        Given the dark environment, it’s easy for players to miss the monster,
        especially when focused on puzzles. To address this, we added a dynamic,
        proximity-based audio system for each monster. When a monster is far
        away, it produces a specific sound:
      </p>
      <audio controls>
        <source src="/assets/horrorescape/far-sound.MP3?url" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p>
        As the player gets within a preset proximity to the monster, the sound
        becomes much more menacing, signaling an imminent threat:
      </p>
      <audio controls>
        <source
          src="/assets/horrorescape/close-sound.MP3?url"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
      <p>
        This gives players another way to sense the monster’s pursuit,
        leveraging the VR medium’s binaural audio to provide crucial information
        while amplifying the fear factor, making every step more intense.
      </p>
      <div class="divider-hor"></div>
      <!-- puzzles-->
      <h2 id="puzzles">Puzzle Design</h2>

      <p>
        Players must collect all four key cards scattered across the research
        vessel to activate the escape protocol, solving a puzzle in each room to
        do so. Each puzzle area is designed to fit the ship's research theme,
        with equipment and elements specific to that room’s purpose. The puzzles
        also incorporate features from their respective environments to maintain
        immersion.
      </p>
      <p>
        Each of the three puzzles is designed to maximize the unique
        capabilities of VR, incorporating interactive elements that take full
        advantage of the medium. To heighten the tension, we've also included
        time-consuming aspects, making every moment feel more intense with the
        relentless monsters on the hunt!
      </p>
      <h3>Bio Lab</h3>
      <p>
        The player begins in the Bio Lab, where the room serves to introduce the
        game’s premise through environmental storytelling while also
        familiarizing them with the core gameplay mechanics.
      </p>
      <img src="/assets/horrorescape/bio-env.png" style="width: 60%" />
      <p>
        In this room, a flashlight is placed right next to the player's spawn
        point, serving as the player’s lifeline and their only defense against
        the monsters. Its bright presence ensures that players can’t miss it,
        even in the dark.
      </p>
      <img src="/assets/horrorescape/flashlight.png" style="width: 60%" />
      <p>
        Upon starting the game, the player's POV UI clearly displays the
        objective: collect all four key cards.
      </p>
      <img src="/assets/horrorescape/ui.png" style="width: 60%" />
      <p>
        To guide the player, we’ve placed the first keycard directly in front of
        them, within clear view, along with a guiding arrow pointing towards it.
        This teaches them what the keycard looks like and how to pick it
        up—simply walking over it adds it to their inventory.
      </p>
      <p>
        The keycard is intentionally placed next to the torn remains of a fellow
        colleague, creating a sense of foreboding. This subtle detail signals to
        the player that the keycards they need to collect once belonged to their
        fallen teammates, adding an eerie layer to the narrative.
      </p>
      <img src="/assets/horrorescape/objective-arrow.png" style="width: 40%" />
      <h3>Physics Lab</h3>
      <p>
        For the Physics Lab, we designed an interaction-based puzzle where
        players must pick up a heavy-duty laser and aim it precisely at a safe.
        This mimics the tactile nature of physical puzzles in real-world escape
        rooms, emphasizing precision and enhancing the immersive experience in
        VR.
      </p>
      <img src="/assets/horrorescape/phys-env.png" style="width: 60%" />
      <p>
        For this puzzle, players must grab the laser and aim it at the safe for
        a total of 10 seconds to break it. The time is cumulative, so they don’t
        need to hold it for 10 seconds straight, but they must contend with the
        constant threat of the monster closing in, ramping up the tension.
      </p>
      <p>
        The safe is positioned in a way that one of the few light sources in the
        vessel highlights it, drawing attention to its importance and guiding
        the player’s focus.
      </p>
      <img src="/assets/horrorescape/phys-puzzle.png" style="width: 60%" />
      <p>
        Once the safe is broken, the key card appears, allowing the player to
        collect it and continue their progress!
      </p>
      <h3>Chemistry Lab</h3>
      <p>
        For the Chem Lab, we made a puzzle based on observation and cognition,
        similar to those in traditional escape rooms. Players must manipulate
        scattered beakers, boxes, and measuring instruments while searching
        their surroundings for clues to the keypad combination. Once the correct
        numbers are identified, they enter them in the right sequence to open a
        cabinet and obtain the key card.
      </p>
      <img src="/assets/horrorescape/chem-env.png" style="width: 60%" />
      <p>
        In this room, players must stay alert to environmental clues left behind
        by their fallen colleague — blood trails scrawled in her final moments.
        The first number is placed beside her prominent body, drawing the
        player's attention and hinting at the objective. The remaining numbers
        are hidden beneath fallen, movable objects, encouraging players to
        interact with their surroundings to uncover them.
      </p>

      <div class="image">
        <img
          src="/assets/horrorescape/chem-blood-1.png"
          style="height: 250px"
        />
        <img
          src="/assets/horrorescape/chem-blood-2.png"
          style="height: 250px"
        />
        <img
          src="/assets/horrorescape/chem-blood-3.png"
          style="height: 250px"
        />
      </div>
      <p>
        Finding all the numbers isn’t enough—players must determine the correct
        sequence by analyzing the positioning of the blood trails or making
        educated guesses. With six possible combinations, this guess-and-check
        element heightens tension, keeping players on edge while the monster
        lurks nearby. It also forces them to remember the numbers in case they
        need to retreat and return later.
      </p>
      <img src="/assets/horrorescape/chem-puzzle.png" style="width: 60%" />
      <p>
        The carnage also serves the narrative, showcasing the final, desperate
        moments of your colleague's life, contributing to the horror and
        immersion of the experience.
      </p>
      <h3>Engine Room</h3>
      <p>
        The final key is located in the engine room, one level below the labs.
        To introduce variety, we designed a randomized puzzle where players must
        interact with a button to shift three pistons blocking a narrow walkway.
      </p>
      <img src="/assets/horrorescape/engine-env.png" style="width: 60%" />
      <p>
        Like in the Chem Lab, we used gore elements to enhance the narrative and
        provide subtle puzzle hints. In this room, the engineer’s blood trail
        tells a story of a desperate crawl to escape the monster, while also
        guiding players to the location of the final keycard.
      </p>
      <img src="/assets/horrorescape/engine-blood.png" style="width: 60%" />
      <p>
        Players must press a button to reconfigure the pistons, each having a
        50% chance of moving up per press. This creates a 1/8 chance of success,
        adding unpredictability and excitement. The ever-present threat of the
        monster intensifies the pressure, making each attempt feel even more
        nerve-wracking.
      </p>
      <img src="/assets/horrorescape/engine-puzzle.png" style="width: 60%" />
      <p>
        The challenge doesn’t end once the path is clear—players must still
        navigate the narrow hallway, making them vulnerable to being cornered by
        the monster. While a wider space at the end allows for strategic kiting,
        it remains a test of their ability to make split-second decisions under
        pressure.
      </p>
      <h3>Control Room</h3>
      <p>
        With all four key cards collected, players must make their way to the
        control room. If they reach it with all key cards in their inventory,
        they successfully escape, marking their victory!
      </p>
      <img src="/assets/horrorescape/control-env.png" style="width: 60%" />
      <div class="divider-hor"></div>

      <h2 id="result">The result</h2>
      <p>
        Here’s some playtest footage showcasing the victory and loss conditions.
        Ignore my narration in the background—I think I was more scared of the
        game than they were :')
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/q7cowiCC4CQ?si=H0OOuPr6aklv2zCm"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div class="divider-hor"></div>
      <p></p>
      <h2>Conclusion</h2>
      <p>
        This project was an incredibly rewarding experience, allowing me to dive
        deep into both VR development and game design. I had a lot of fun
        exploring the challenges of creating an immersive horror experience and
        the thrill of designing interactive environments that keep players
        engaged. It was an exciting opportunity to blend creativity and
        technical skills, and I’m proud of the results!
      </p>
      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
      <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="horrorescape" />
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
  background-image: url("/assets/horrorescape/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  overflow-x: visible;
}
.summary h1 {
  color: white;
  white-space: nowrap;
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
audio {
  display: block;
  margin: auto;
  padding: 10px;
  border-radius: 20px;
}
iframe {
  display: block;
  margin: auto;
  margin-bottom: 20px;
}
</style>
