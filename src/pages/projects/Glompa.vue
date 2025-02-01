<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>Recoded</h1>
        <div class="skills">
          <h3>Role: <br />Game Designer</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Figma, Unity</h3>
        </div>
      </div>
    </div>
    <div class="shortcuts">
      <p>Skip to:</p>
      <a href="#levels" class="shortcut-link">Level Design</a>
      <a href="#mechanics" class="shortcut-link">Mechanic Design</a>
      <a href="#tournament" class="shortcut-link">Tournament System</a>
      <a href="#profile" class="shortcut-link">Player Profile</a>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>
        In August 2024, I joined Recoded as a Game Design Intern, contributing
        to their mobile puzzle game,
        <a
          href="https://play.google.com/store/apps/details?id=com.recoded.monster&hl=en_SG"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >Glompa</a
        >, which has surpassed 10,000 downloads on the Google Play Store.
        Joining during its early access phase, I had the privilege of shaping
        key foundational elements, including puzzle levels, core mechanics, the
        tournament and ranking systems, and a player profile system designed to
        enhance the game's social features. This experience allowed me to make a
        meaningful impact on the game's development while honing my design and
        problem-solving skills!
      </p>

      <div class="divider-hor"></div>
      <!-- Level Design -->
      <h2 id="levels">Level Design</h2>
      <p>
        Glompa stands out among puzzle games with its deceptively simple
        premise. At first glance, it resembles a standard linker game where
        players aim to create the longest possible chain of same-colored
        "Bloblings". However, Glompa introduces an adorable twist: the chain
        must begin with Gerry, the game's mascot character. As players link
        tiles, Gerry moves to the final position in the chain, devouring the
        poor Bloblings along the way.
      </p>
      <img src="/assets/glompa/glompa-intro.gif" />
      <p>
        Add to this unique mechanic a variety of obstacles like bushes to clear,
        ice to crack, and boxes to destroy, and you get an engaging puzzle game
        packed with depth and strategy!
      </p>
      <p>
        As a game designer, I was responsible for crafting levels that fully
        leveraged Glompa's unique gameplay mechanics across varying difficulty
        levels. This involved carefully considering factors such as Gerry's
        starting position, the initial arrangement of Bloblings, level
        objectives, obstacles, and the distribution of Blobling drop rates. My
        goal was to deliver engaging brain teasers that challenged players while
        avoiding repetition or tedium, striking a balance between strategic
        depth and player enjoyment.
      </p>
      <img src="/assets/glompa/levels.png" />

      <p>
        One level I’m particularly proud of is titled “HDB”, currently featured
        as level 297 in the game:
      </p>
      <img src="/assets/glompa/hdb-ss.png" />
      <p>
        This level incorporates the barrel mechanic, a cascading objective where
        players must link the required number of Bloblings before connecting to
        the barrel to clear it. Adding to the challenge, bushes serve as
        obstacles blocking the barrels, which Gerry must clear by gobbling up
        adjacent Bloblings of the corresponding color.
      </p>
      <p>
        For the opening layout, I arranged a neat group of Bloblings to entice
        players into taking the longest possible link as their first move.
        However, with only 8 Bloblings, this move isn't sufficient to clear the
        only reachable barrels. Additionally, the even drop rate causes this
        initial move to reduce the chances of forming long links in subsequent
        turns.
      </p>
      <img src="/assets/glompa/hdb-bad.gif" />
      <p>
        Since the largest-numbered barrel must be cleared first for the smaller
        objectives to cascade downwards into reachable positions, players can
        either hope for a lucky drop or continue clearing upwards to reach the
        easier barrels, potentially wasting precious moves.
      </p>

      <p>With that in mind, the intended optimal first move is:</p>

      <img src="/assets/glompa/hdb-good.gif" />

      <p>
        Which clears some bushes to create space while preserving a chain of
        Bloblings, increasing the chances of clearing the difficult barrel
        sooner.
      </p>
      <p>
        I applied similar thinking to contribute multiple levels of varying
        difficulty, encouraging strategic and forward-thinking gameplay, while
        aiming to provide players with an engaging challenge as they progress
        through the game!
      </p>

      <div class="divider-hor"></div>
      <!-- Mechanics -->
      <h2 id="mechanics">Mechanic Design</h2>
      <p>
        I was also given the daunting task of creating brand-new puzzle
        mechanics to introduce greater variety and challenge to the gameplay.
        This involved analyzing gaps in the current gameplay, brainstorming
        mechanics to address them, and working through the technical
        implementation and art direction with the respective teams.
      </p>
      <p>
        Firstly, I contributed to the design of the Nest and the Barrel,
        cascading variants of the static Bushes and Crates. These mechanics were
        designed with fast implementation in mind, while adding a brand new
        dimension to the gameplay.
      </p>
      <div class="image">
        <img src="/assets/glompa/nest.gif" />
        <img src="/assets/glompa/barrel.gif" />
      </div>
      <p>
        Beyond their in-game behavior, I also carefully considered edge cases
        that could soft-lock players, developing comprehensive design guidelines
        to prevent such scenarios in future levels in order to maintain the
        integrity of the game.
      </p>
      <p>
        However, my most significant contribution was the design of the Conveyor
        Belt and Portal mechanics.
      </p>
      <img src="/assets/glompa/cb.gif" />
      <p>
        One of Glompa's standout features is Gerry, whose position on the board
        plays a pivotal role in player strategy. I wanted to introduce a
        mechanic that would affect his position passively, highlighting this
        unique aspect of Glompa while encouraging players to think even further
        ahead. This led to the creation of the Conveyor Belt, which not only
        shifts Gerry's position, but is also able to alter the placement of most
        other elements on the board. By simply introducing an additional layer
        of unpredictability to the level layout, this mechanic significantly
        enhances the game's complexity and strategic depth.
      </p>

      <p>
        To complement the Conveyor Belt, I added Portals to address the issue of
        belts leading to the edge of the game board. Instead of elements exiting
        the board, Portals allow them to seamlessly re-enter at another starting
        point, ensuring continuity in gameplay and preserving the intended
        challenge.
      </p>

      <img src="/assets/glompa/portal.gif" />

      <p>
        With these Portal and Conveyor Belt mechanics, game designers now have
        more dynamic ways to introduce a variety of challenge types:
      </p>
      <img src="/assets/glompa/cb-levels.png" />
      <p>
        This simple mechanic has the potential to create a wide range of diverse
        challenges across hundreds of levels, adding much depth and variety to
        the gameplay!
      </p>
      <div class="divider-hor"></div>
      <!-- Tourneys -->
      <h2 id="tournament">Tournament System</h2>
      <p>
        Recognizing the lack of key competitive and social elements, I was
        tasked with creating a recurring timed tournament event to keep players
        engaged. This event not only provided an ongoing challenge, but also
        offered rewarding incentives for them to perform at their best.
      </p>
      <img src="/assets/glompa/glompprix.png" />

      <p>
        First and foremost, I outlined the key foundational elements of the
        feature, including its active period, unlock conditions, access points,
        UI elements and overall art direction.
      </p>
      <p>
        I also designed the layout of the tournament leaderboard, which displays
        essential information such as the remaining tournament duration, the
        player's current position, accumulated points, and the rewards they are
        entitled to.
      </p>
      <img src="/assets/glompa/leaderboard.png" />

      <p>
        Next, it was time to dive into the details. I proposed the system by
        which players can earn points, ensuring that the points system rewards
        players proportionally to their achievements while also maintaining a
        level of fairness, so every player has a fighting chance.
      </p>
      <img src="/assets/glompa/points.png" />
      <p>
        Of course, in any game, players want to compete against others of
        comparable skill levels. To address this, I designed a player injection
        and pooling system, ensuring that players compete against real opponents
        as much as possible, while also ensuring that players within the same
        pool are at similar points in their game progression.
      </p>
      <img src="/assets/glompa/poolsys.png" />

      <p>
        Lastly, to ensure every player pool is filled, I outlined the behavior
        and design of bots to effectively mimic real players.
      </p>
      <p>
        By analyzing player data from existing levels—focusing on the time taken
        to clear a specific number of levels in each world region—I identified
        the average points players of three distinct skill levels (Beginner,
        Intermediate, and Expert) could accumulate within a fixed timeframe.
        This data informed the creation of bots with realistic behavior,
        including randomized point increments and varied time intervals between
        those increments, to replicate organic player activity.
      </p>
      <p>
        These bots are injected into player pools based on predetermined logic
        that matches the skill levels within each pool. To further enhance their
        authenticity, bots are assigned artificial player data sourced from a
        database of fabricated player profiles. This data includes a username,
        levels cleared, regions reached, and even a reasonable number of
        cosmetics purchased—all extrapolated from real player data to make the
        bots indistinguishable from actual players.
      </p>
      <p>
        This, along with the Star Ranking System, where players are ranked based
        on the total number of stars they’ve earned across all released levels,
        fuels friendly competition and motivates players to grind through
        levels, earning their hard-fought bragging rights along the way!
      </p>
      <img src="/assets/glompa/star.png" />
      <div class="divider-hor"></div>

      <!-- Player Profile -->
      <h2 id="profile">Player Profile</h2>
      <p>
        To complement the tournament and star ranking features, I designed a
        Player Profile System to foster the game's social aspect. This system
        not only provides game designers with a wider pool of rewards to
        incentivize players and use as montization avenues, but also allows
        players to view profiles of their competitors, adding a personal touch
        to the rankings and encouraging friendly rivalry—or, in other words, to
        find out exactly who managed to beat them!
      </p>
      <img src="/assets/glompa/profile.png" />
      <p>
        I defined a pool of player icons, which were designed to be easy for the
        art team to create using existing assets. These icons serve as rewards
        for in-game progression, allowing players to showcase their
        achievements. Examples include icons representing regions cleared and
        max-level Glompas (collectible in-game creatures), giving players a fun
        way to flaunt their progress.
      </p>
      <img src="/assets/glompa/pfp.gif" />
      <p>
        Along with the player icons, I also requested that the art team design
        bold and creative frames to, well, frame them. These eye-catching frames
        are designed to grab attention, making them the perfect bragging rights
        material. With their amazing designs and prominent display, they serve
        as ideal rewards for tournaments or as exclusive items in paid bundles,
        offering players another way to show off their achievements in style.
      </p>
      <img src="/assets/glompa/frames.png" />
      <p>
        Next, it was time to bring everything together on the Player Profile
        Page. Here, players' achievements and stats—such as levels cleared and
        regions unlocked—are displayed for all to see, alongside their chosen
        icon, frame, and username. All of this is set against the stunning
        profile theme crafted by the art team, offering players a range of
        options from a simple color scheme to a vibrant, animated backdrop,
        allowing them to personalize their profile however they like!
      </p>
      <div class="image">
        <img src="/assets/glompa/bg-1.gif" />
        <img src="/assets/glompa/bg-2.gif" />
        <img src="/assets/glompa/bg-3.gif" />
        <img src="/assets/glompa/bg-4.gif" />
      </div>
      <div class="divider-hor"></div>

      <!-- conclusion -->
      <h2>Conclusion</h2>
      <p>
        My time at Recoded was an incredible learning experience. I am so
        grateful to be given the opportunity to shape key features in Glompa,
        from new puzzle mechanics to tournament systems and player profiles, and
        to see my ideas come to life and to be part of a project that continues
        to grow and engage players was incredible and exciting in ways that can
        hardly describe!
      </p>

      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
       -->
    </div>
    <SeeOthers current="glompa" />
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
  background-color: #f68d2a;
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
  justify-content: center;
  align-items: center;
}

.details h2 {
  font-size: 2rem;
  font-family: "InstrumentSans-Med";
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
