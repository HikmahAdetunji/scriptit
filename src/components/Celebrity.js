import React, { useEffect, useState } from "react";
import "../App.css";
import "../css/Celebrity.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import celebrity from "../images/celebrity9.jpg";
import celebrity1 from "../images/celebrity8.jpg";
import celebrity2 from "../images/celebrity5.jpg";
const Celebrity = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="celebrity">
      <div className={`nav ${isSticky ? "sticky" : ""}`}>
        <div className="navbar">
          <div className="container flex nav-inner">
            <div className="logo">ScriptIt.</div>

            <div
              className={`hamburger ${menuOpen ? "active" : ""} ${
                isSticky ? "sticky" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
              {menuOpen && (
                <div
                  className="menu-overlay"
                  onClick={() => setMenuOpen(false)}
                />
              )}
            </div>

            <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              <ul className="navbar">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item-three">
                  <Link
                    to="/projects"
                    className="nav-link-three"
                    onClick={() => setMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              className="hire mobile-hire"
              onClick={() => setMenuOpen(false)}
            >
              <a href="mailto:scriptithub@gmail.com">Hire Us</a>
            </button>
          </div>
        </div>
      </div>
      <div className="celebritydetails  ">
        <div className=" container grid-celebrity">
          <div className="celebrity-image-container">
            <img
              src={celebrity}
              alt="Celebrity YouTube"
              className="celebrity-image"
            />
            <br /> <br />
            <p className="celebrity-heading">CELEBRITIES</p>
            <br />
            <p className="celebrity-title">
              <b>
                {" "}
                Beyonce Goes Off At Jay-Z For Making Her Look Bad At The Grammy
              </b>
            </p>
            <br />
            <p className="celebrity-info">
              <a
                href="https://youtu.be/HDgHGIhSCYY?si=Qx4Fgbj_U3_KzDah"
                className="celebrity-link"
              >
                (0:12-0:25)
              </a>
              <a
                href="https://youtu.be/1z8gCZ7zpsQ?si=8clh6lmtx8B9mKTk"
                className="celebrity-link"
              >
                (0:45-0:60)
              </a>
              <br></br>
              Beyoncé's explosive reaction to Jay-Z coming to her defense at the
              Grammy has taken the internet by storm. The Grammy night was
              filled with a plethora of events, but the highlight was when the
              Recording Academy ignored Beyonce when it comes to the most
              coveted award of the day. As a result of this, Jay-Z stood up to
              his wife's defense, criticizing Grammy for not doing the right
              thing. However, news on the street is that his action didn't sit
              well with Queen Bey. Join us in this video as we dive into the
              full drama.
              <br /> <br />
              At the 66th Grammy Awards held on February 4 at Crypto.com Arena
              in Los Angeles, a host of awards were given out just as they're
              done every year. But to the dismay of Beyoncé's family and fans,
              the most prestigious award category at the Grammy, the Album of
              the Year award, commonly known as the Big Award, missed her once
              again. Despite her remarkable career and making history by winning
              the most Grammy awards of all time, Beyonce hasn't won any in the
              album of the year category.
              <a
                href="
              
              https://youtu.be/DXnnucnZyek?si=ADuOUwYsoIUctVqi"
                className="celebrity-link"
              >
                {" "}
                (0:00-0:18)
              </a>
              <br /> <br />
              As such, Jay-Z became upset and decided to take it up with the
              Recording Academy when he was called on stage to receive the Mr.
              Dre Global Impact Award. With his daughter, Blue Ivy, by his side,
              Jay-Z began his acceptance speech by thanking Dr. Dre and other
              rap artists who broke the glass ceiling for black artists. He then
              acknowledged that while music and therefore voting on the Grammy
              Awards is "obviously subjective," his wife Beyoncé has never won
              in the album of the year category.
              <br />
              As he puts it,{" "}
              <i>
                {" "}
                “I don’t want to embarrass this young lady, but she has more
                Grammys than everyone and has never won Album of the Year. So
                even by your own metrics, that doesn’t work. Think about that:
                the most Grammys have never won Album of the Year. That doesn’t
                work.”
              </i>
              <a
                href="https://youtu.be/W6dBQ2UM6JI?si=fCCLdihWnUWU8FBz"
                className="celebrity-link"
              >
                {" "}
                (2:17-2:30)
              </a>
              <br /> <br />
              While he didn't mention the “young lady” by name, it's believed
              that Jay-Z was referring to his wife, Beyonce.
              <br /> <br />
              Beyonce has been nominated for album of the year four times but
              has never won. The first time Beyoncé was nominated for album of
              the year was in 2010 for her third studio album, "I Am... Sasha
              Fierce." However, she lost out on it to Taylor Swift's. Since this
              was only her first loss, there was no major backlash.
              <a
                href="https://youtu.be/v5e0eAhpC00?si=t95lfCrW4LUiPdtN"
                className="celebrity-link"
              >
                {" "}
                (0:00-0:13)
              </a>
              <br /> <br />
              Then, ahead of the 57th Grammy Award, there were already concerns
              about the Recording Academy's decision-making process. For
              example, Beyoncé's hit single "Drunk in Love" was not nominated in
              the pop categories or for record of the year. At the awards
              ceremony, she won three awards for best R&B song and best R&B
              performance for "Drunk in Love." Still, the biggest surprise was
              when Beyoncé lost the album of the year award to Beck. Beyonce's
              self-titled album was critically and commercially successful, and
              the singer radically changed the industry with her surprise
              release of the album. Yet it was still not enough.
              <br /> <br />
              In 2017, Beyoncé was up for Grammy awards for her genre album ,
              "Lemonade." While she took home two awards, she lost several major
              category including record of the year, song of the year, and album
              of the year. It was a bitter disappointment for Beyonce who was up
              against Adele for album of the year. After winning, Adele said she
              couldn't accept the award.{" "}
              <i>
                "The artist of my life is Beyonce, and this album for me, the
                'Lemonade' album, was so monumental. Beyonce, so monumental,"
              </i>{" "}
              she said.{" "}
              <a
                href="https://youtu.be/ctuggqUSITM?si=s_LKgUR5JKgA0nkP"
                className="celebrity-link"
              >
                (1:41-2:00)
              </a>{" "}
              But Adele wasn't the only one upset. Critics argued that Adele's
              win over Beyoncé was further evidence of the academy's bias
              against black artists. In the 64 years of the Grammy Awards, only
              11 black artists have won album of the year.
              <br /> <br />
              But it didn't stop there. Again, in 2023, at the 65th Grammy
              Awards, Beyonce was nominated for three major categories: song and
              record of the year for "Break My Soul" and album of the year for
              "Renaissance." Again, the Recording Academy picked another artist
              over her, this time Harry Styles. The 65th Grammy Awards were the
              last straw for many Beyoncé fans since it was the pop star's
              fourth loss for album of the year, and "Renaissance" was a shoo-in
              to win. Not only was "Renaissance" culturally significant for its
              homage to queer culture, but it was also named the best album of
              2022 by several major publications.
              <a
                href="https://youtu.be/Dbo1B9-0Q3Q?si=NJu2gl7ZwPHzKyS1"
                className="celebrity-link"
              >
                {" "}
                (0:11-0:16)
              </a>
              <br /> <br />
              Now, Beyonce wasn't nominated at all this year, and Taylor Swift
              took home album of the year for her album "Midnights," giving her
              four wins in that category over her career, the most for any
              artist.{" "}
              <a
                href="https://youtu.be/Yq-q-ZCZwxc?si=-D0vrhwVu0LOZDEU"
                className="celebrity-link"
              >
                (0:00-0:28)
              </a>{" "}
              <br /> <br />
              These incessant losses opened the door for Jay-Z to criticize the
              recording house. Meanwhile, the rapper's remarks has generated a
              lot of controversy in the entertainment industry, with many
              celebrities weighing in on the matter.
              <br /> <br />
              One of them is Kelly Rowland. During the premiere of Bob Marley:
              One Love in Los Angeles, Kelly Rowland chatted with ET about the
              speech, saying,{" "}
              <i>
                “Shawn Carter is one of the greatest men I know, and his words
                ring so loud to me. I couldn't be more proud of him. And I'm
                just really happy for a lot of things that he said. I think that
                he made a lot of artists feel very seen and very heard in those
                minutes that he took on stage, whether you carried some of that
                for years, or a year, or felt some sort of way about that."
              </i>
              <br /> <br />
              However the View host Alyssa Farah Griffin didn't share the same
              opinion with Rowland. She wasn't impressed with Jay-Z's speech,
              citing that he took away from Taylor Swift's moment that night.
              Griffin, who is a Swift fan said{" "}
              <i>
                “I just don't like it. It feels like taking away from artists
                who are winning that night." “Beyoncé has been such a support
                system to Taylor Swift. She showed up to the opening of her Eras
                Tour movie; Taylor went to hers, and it felt like it was taking
                away from her making history that night by winning the most
                Albums of the Year.”
              </i>
              <br /> <br />
              In addition to Griffin, entertainment legend and The View co-host,
              Whoopi Goldberg had some very pointed thoughts on the “99
              Problems” rapper’s speech. Goldberg said Bey not having an Album
              of the Year award is not a big deal considering the Renaissance
              artist already has 32 Grammys.{" "}
              <i>
                {" "}
                “Well, she's got 38. So I kind of appreciate all of that. And
                they’re not for just one thing. So, for me, she is—it doesn’t
                matter if they give her that album. I mean, and listen, it’s
                subjective. People are voting. You can’t determine who’s doing
                it unless you’re the person voting. So, I think 38 [sic] is kind
                of not a terrible number!”
              </i>
              <a
                href="https://twitter.com/TheView/status/1754549840594255929?t=HvVXX69dgba-9qSrlsXhZQ&s=19"
                className="celebrity-link"
              >
                {" "}
                (5:09-5:19)
              </a>
              <br /> <br />
              However, this isn't the first time someone else has acted as the
              mouthpiece for Beyonce. If you can recall the 2009 incident when
              Kanye West controversially stole the spotlight from Taylor Swift.
              The country superstar has won the MTV Music Video Award and was
              given her acceptance speech when an apparently drunk Kanye stormed
              onto the stage, stole the microphone, and dissed Swift's winning
              song, declaring that Beyoncé’s “Single Ladies [Put a Ring On It]”
              should have won.{" "}
              <i>“Beyoncé had one of the best videos of all time." </i> The rap
              star blathered as boos filled the hall.{" "}
              <i> “One of the best videos of all time!”</i>
              <a
                href="https://youtu.be/RvaakT52RjQ?si=pTsi01SIc63vYyuY"
                className="celebrity-link"
              >
                (1:05-1:14)
              </a>
              <br /> <br />
              But in the midst of all this is Beyonce, and reportedly, it seems
              the singer didn't appreciate her husband standing up for her.
              According to body language expert Judi James, Beyonce was
              initially looking at her husband with an expression of delight and
              devotion, and she kept smiling even after he started to reference
              boycotts. But that frozen-looking, symmetric smile showed she was
              uncomfortable.
              <a
                href="https://www.google.com/amp/s/www.mirror.co.uk/3am/us-celebrity-news/beyonce-mortified-jay-zs-dangerous-32047869.amp"
                className="celebrity-link"
              >
                {" "}
                (0:00-0:28)
              </a>
              <br /> <br />
              Some fans are also of the opinion that despite Jay-Z's intentions
              to defend and honor his partner, they believe Beyoncé actually
              looked 'embarrassed' by it all.
              <br /> <br />
              One X user said:{" "}
              <i>
                "Jay-Z is literally the WORST speech giver in life. Beyoncé
                literally looks embarrassed."{" "}
              </i>
              <i> "Beyoncé was so embarrassed, omg,"</i> another added, and a
              third cited that Beyonce not making and writing her albums herself
              could be a cause. Conversely, the BeyHive is spilling a load of
              praise for Jay-Z's speech. One fan said,{" "}
              <i>"Man’s just laying down facts." "Jay-Z spoke REAL,"</i> another
              added.
              <br /> <br />
              <i>
                Over to you viewers, what's your take on Jay-Z standing up for
                his wife? And do you think Beyonce is embarrassed by it? Let's
                know in the comment section. Kindly like and subscribe to this
                channel for more hot piping tea in the entertainment industry.
              </i>
            </p>
          </div>
        </div>

        <div className="container grid-celebrity m-4 ">
          <div className="celebrity-image-container">
            <img
              src={celebrity1}
              alt="Celebrity YouTube"
              className="celebrity-image"
            />

            <br />
            <p className="celebrity-title">
              <b>
                {" "}
                Justin Baldoni’s Website EXPOSES Blake Lively’s DARK SIDE, Can
                She Recover?
              </b>
            </p>

            <br />

            <p className="celebrity-info">
              Hey, I’m back with new updates on the Justin Baldoni and Blake
              Lively case, and wow, this case keeps getting messier by the day.
              This time, Justin Baldoni isn’t playing the usual Hollywood game
              of keeping things hush-hush. Nope—he’s gone full transparency mode
              by launching an entire website dedicated to his side of the story.
              So, what's the content of this website? What exactly is the actor
              trying to prove? And how is Blake Lively handling this? Let’s get
              into it!
              <br /> <br />
              <b>CHAPTER 1 - THE SHOCKING WEBSITE</b>
              <br />
              But before we dive into the deep matter, let’s rewind a bit and
              refresh our memory on this messy feud.
              <br></br>
              It all started with rumors of tension between Blake Lively and
              Justin Baldoni while filming their domestic abuse drama. And let’s
              just say, things didn’t exactly get better when the movie hit
              theaters last August. Things got so bad that both lead actors
              allegedly didn't see eye to eye during the film’s premiere. As
              seen in this clip, Lively posed on the red carpet without Baldoni,
              which isn't the norm{" "}
              <a
                href="
              https://youtu.be/PAJVPHtSoFs?si=kXRUZVh9Oxq1iq3m&t=35s"
                className="celebrity-link"
              >
                {" "}
                (play video 0:35-1:03)
              </a>
              <br /> <br />
              Then, in December, the whole situation exploded into a full-blown
              legal war. Lively hit Baldoni with a lawsuit, accusing him of
              sexual harassment. And just as that news was making waves, The New
              York Times ran a piece based on Lively’s filing, claiming Baldoni
              was orchestrating a smear campaign against her. Naturally, Baldoni
              wasn’t having any of it—so he turned around and sued the Times for
              defamation. And just when we thought it couldn’t get any wilder,
              he also sued Lively and Ryan Reynolds, claiming they used their
              Hollywood power to hijack his film and try to ruin his career.
              <br /> <br />
              But things got interesting when raw footage from the set - the
              same footage tied to Lively’s harassment claims - became released.
              And, oh boy, this footage blew holes in her story.
              <br />
              Remember that claim about Baldoni “nuzzling” Lively’s neck and
              whispering, “It smells so good” in some creepy, intimate way?
              Well, turns out, the full, uncut tapes paint a very different
              picture. The mics were on, and the whole thing was caught on
              tape—including the context that completely changes the narrative.
              <br /> <br />
              It was literally just part of the scene. They were filming a
              romantic montage, and the behind-the-scenes clips show them
              laughing, joking about Baldoni’s nose, and even casually chatting
              about their spouses between takes. Let's have a look at the scenes
              here.{" "}
              <a
                href="
             https://youtu.be/8ZIQQGbMDiQ?si=6kFN1k5wHl3APS-W&t=301s "
                className="celebrity-link"
              >
                {" "}
                (play video 5:01-5:33)
              </a>
              <a
                href="
              
             https://youtu.be/8ZIQQGbMDiQ?si=6kFN1k5wHl3APS-W&t=389s "
                className="celebrity-link"
              >
                (Play video 6:29-6:39){" "}
              </a>
              <a
                href="
              https://youtu.be/8ZIQQGbMDiQ?si=6kFN1k5wHl3APS-W&t=488s"
                className="celebrity-link"
              >
                (Play video 8:08-8:33){" "}
              </a>
              <br />
              But the video evidence didn't make Lively’s lawyers back down,
              instead they doubled down on their claims.
              <br /> <br />
              Her lawyers fired back,
              <a
                href="
              https://www.buzzfeed.com/natashajokic1/blake-lively-justin-baldoni-video#:~:text=Blake%27s%20legal%20team%20told%20Deadline%20in%20a%20statement%20following%20the%20release%20of%20the%20footage%2C%20%22Justin%20Baldoni%20and%20his%20lawyer%20may%20hope%20that%20this%20latest%20stunt%20will%20get%20ahead%20of%20the%20damaging%20evidence%20against%20him%2C%20but%20the%20video%20itself%20is%20damning.%22"
                className="celebrity-link"
              >
                saying
              </a>
              {""} that every single frame of the released footage actually
              supports what Lively described in her lawsuit—to the letter. Yep,
              according to them, there’s nothing in the tape that contradicts
              her version of events.
              <br /> <br />
              And they didn't stop there. Lively’s attorneys also
              {""}
              <a
                href="
              https://www.usatoday.com/story/entertainment/celebrities/2025/01/22/blake-lively-ryan-reynolds-gag-order-justin-baldoni/77888098007/#:~:text=In%20a%20letter,by%20USA%20TODAY"
                className="celebrity-link"
              >
                pushed
              </a>{" "}
              for media restrictions against Baldoni’s lawyer, Bryan Freedman.
              They argued that his public statements could prejudice the case,
              and they want the judge to put a stop to it. Basically, they’re
              trying to keep this fight inside the courtroom and out of the
              headlines (good luck with that). According to them, this is just
              another chapter in Baldoni’s alleged retaliation campaign ever
              since Lively decided to speak up.
              <br /> <br />
              And as for Baldoni’s lawsuit, Lively’s team made it clear that
              they plan to shut it down before it even gets off the ground.
              They’re gearing up to file a motion to dismiss, meaning they want
              the judge to throw the case out completely.
              <br /> <br />
              So, now Baldoni has taken things to the next level.
              <br />
              On January 31, days before the first trial hearing, Baldoni’s
              legal team{" "}
              <a
                href="
              
              https://www.jdsupra.com/legalnews/it-ends-with-us-but-continues-in-court-4149111/#:~:text=Additionally%2C%20a%20day%20after%20amending%20his%20New%20York%20complaint%20on%20January%2031%2C%202025%2C%20Baldoni%E2%80%99s%20legal%20team%20launched%20a%20website%2C%20featuring%20the%20amended%20complaint%20and%20a%20detailed%20timeline%20of%20events"
                className="celebrity-link"
              >
                dropped
              </a>{" "}
              a bombshell of a public website named Lawsuitinfo dedicated
              entirely to his legal battle with Blake Lively. Yep, you heard
              that right.
              <br /> <br />
              Earlier, Baldoni’s legal team had {""}
              <a
                href="
              https://www.hindustantimes.com/entertainment/hollywood/justin-baldoni-launches-new-website-to-expose-blake-livelys-claims-emails-texts-go-live-101738456709443.html#:~:text=Earlier%20Baldoni%27s%20legal,quash%20her%20claims"
                className="celebrity-link"
              >
                hinted
              </a>{" "}
              {""}
              at the launch of the website,{" "}
              <i>
                “Justin and team have the right to defend themselves with the
                truth. And this is what we will be continuing to show with the
                upcoming website containing all correspondence as well as
                relevant videos that directly quash her claims.”
              </i>
              <br /> <br />
              Now, with the website live, Baldoni is making good on that
              promise—putting his side of the story out for the world to see.
              <br /> <br />
              So, what’s on this website? Well, for starters, it already{" "}
              <a
                href="
              https://variety.com/2025/film/news/justin-baldoni-lawsuit-blake-lively-ryan-reynolds-nicepool-new-york-times-metadata-1236293856/#:~:text=Baldoni%E2%80%99s%20lawyers%20filed%20an%20amended%2C%20224%2Dpage%20lawsuit%20on%20Friday%20night%2C%20and%20launched%20a%20website%20to%20host%20the%20complaint%20along%20with%20an%20accompanying%20168%2Dpage%20timeline"
                className="celebrity-link"
              >
                features
              </a>{" "}
              two major court documents: Baldoni’s amended $400 million lawsuit
              against Lively and Ryan plus a 168-page “timeline of relevant
              events” that supposedly lays out everything that went down. And
              according to his lawyer, this is just the beginning.
              <br /> <br />
              According to Freedman, the lawsuit was amended because of the
              “overwhelming amount of new proof” that has come to light. And
              now, they’re putting it all out there—emails, text messages,
              behind-the-scenes communications between Baldoni’s production
              company, Wayfarer Studios, and other cast members.
              <br /> <br />
              The 168-page document include a meticulous timeline stretching all
              the way from January 1, 2019, when Baldoni first emailed It Ends
              With Us author Colleen Hoover, to January 29, 2025, when a deeper
              analysis of metadata allegedly{" "}
              <a
                href="
             https://www.rollingstone.com/tv-movies/tv-movie-news/justin-baldoni-amended-lawsuit-blake-lively-new-york-times-ryan-reynolds-1235253992/#:~:text=It%20alleges%20that%20the%20paper%20had%20access%20to%20Lively%E2%80%99s%20civil%20rights%20complaint%20at%20least%2011%20days%20prior%20to%20The%20Times%20report%20entitled%20%E2%80%9CWe%20Can%20Bury%20Anyone%E2%80%99%3A%20Inside%20a%20Hollywood%20Smear%20Machine%2C%E2%80%9D%20published%20on%20Dec.%2021 "
                className="celebrity-link"
              >
                {" "}
                revealed{" "}
              </a>{" "}
              when The New York Times began working on its explosive December 21
              article accusing Baldoni of harassment.
              <br /> <br />
              Besides the whole metadata drama, there are also a few gushing
              texts that have raised some eyebrows, including one that appears
              to be between Ryan Reynolds and Baldoni. In it, Reynolds{" "}
              <a
                href="
              https://www.joblo.com/justin-baldoni-launches-website/#:~:text=One%20text%20concludes%2C%20%E2%80%9CI%E2%80%99m%20excited%20for%20you%20to%20work%20together.%20I%E2%80%99m%20excited%20for%20Blake%20to%20crack%20open%20her%20creative%20piggy%20bank%20with%20someone%20as%20dynamic%20as%20you%20%E2%80%A6%20I%20happen%20to%20adore%20you%2C%20Justin.%E2%80%9D"
                className="celebrity-link"
              >
                says
              </a>
              :{" "}
              <i>
                {" "}
                "I’m excited for you to work together. I’m excited for Blake to
                crack open her creative piggy bank with someone as dynamic as
                you … I happen to adore you, Justin.”
              </i>
              <br /> <br />
              In another alleged text exchange from April 2023, Lively
              supposedly messaged Baldoni about tweaking the rooftop scene. She
              allegedly{" "}
              <a
                href="
              https://www.dailymail.co.uk/tvshowbiz/article-14352739/justin-baldoni-fan-reactions-website-truth-blake-lively-lawsuit.html#:~:text=In%20one%20of,never%20with%20teeth...%27"
                className="celebrity-link"
              >
                {" "}
                wrote
              </a>{" "}
              <i>
                {" "}
                “If you knew me (in person) longer you'd have a sense of how
                flirty and yummy the ball-busting will play. It's my love
                language. Spicy and playfully bold, never with teeth…”
              </i>{" "}
              That definitely raised some eyebrows.
              <br /> <br />
              But why go public with all of this, right? According to sources,
              Baldoni’s motivation is simple—he wants to clear his name. His
              team insists they’re not making money off this website; they just
              want people to see the documents for themselves and form their own
              opinions.
              <br /> <br />
              It’s a bold move—and one that pretty much guarantees this legal
              battle will be fought in both the courtroom and the court of
              public opinion.
              <br /> <br />
              And given the timing of the website launch so close to the
              pre-trial conference, which took place on February 3, it looks
              like a classic case of Baldoni and his team getting ahead of the
              game—almost like he’s trying to beat a potential gag order to the
              punch. By putting everything out there online, he’s not just
              telling his side of the story—he’s making sure it sticks in the
              public eye. And let’s be real, if all the details are already out
              there for everyone to see, wouldn’t that make it harder to justify
              shutting him up in court?
              <br /> <br />
              The evidence on the website is seemingly meant to paint Baldoni as
              the sole victim here, although whether or not any of these
              receipts will hold will come down to the courts.
              <br /> <br />
              <b>Chapter 2 - The Nicepool Controversy</b>
              <br />
              But wait, there’s more. The amended complaint also{" "}
              <a
                href="
              https://www.hollywoodreporter.com/movies/movie-news/how-deadpool-justin-baldoni-blake-lively-nicepool-1236110331/#:~:text=Freedman%E2%80%99s%20legal%20hold,to%20mock%20Baldoni"
                className="celebrity-link"
              >
                brings
              </a>{" "}
              up an evidence preservation letter that was sent to Disney CEO Bob
              Iger and Marvel boss Kevin Feige by Baldoni’s lawyer and its
              assertion that the "Nicepool" character in Deadpool & Wolverine
              was a last-minute addition—an inside joke meant to mock Baldoni
              and his signature man bun.
              <br /> <br />
              Okay, that's a lot of information in one breath, so let me break
              it down.
              <br /> <br />
              The legal drama between It Ends With Us co-stars doesn't end with
              them because they're dragging other projects into it as well,
              including Marvel Studios' Deadpool & Wolverine for the creation of
              the character Nicepool.
              <br /> <br />
              The billion-dollar superhero film Deadpool & Wolverine is packed
              with Deadpool variants, some pulled straight from the comics and
              others newly created for the movie such as Nicepool. Baldoni’s
              lawyer alleges that Ryan Reynolds, the producer and co-writer of
              the movie, specifically created Nicepool to mock Baldoni, pointing
              to the character’s man bun and mannerisms as a deliberate jab.
              <br /> <br />
              While Nicepool was initially developed before the fallout between
              Blake Lively and Justin Baldoni, new details suggest that scenes
              featuring the character were shot much later—right when tensions
              between the two stars were at their peak. In{" "}
              <a
                href="
              https://www.hollywoodreporter.com/movies/movie-news/how-deadpool-justin-baldoni-blake-lively-nicepool-1236110331/#:~:text=In%20November%202023%2C%20Baldoni%20and%20his%20Wayfarer%20producing%20partner%20Jamey%20Heath%20signed%20an%20agreement%20put%20forward%20by%20Lively%20outlining%20alleged%20bad%20behaviors%20the%20men%20would%20no%20longer%20engage%20in%20as%20part%20of%20an%20accord%20for%20her%20to%20return%20to%20work%20following%20the%20strike"
                className="celebrity-link"
              >
                November 2023
              </a>
              , Baldoni and his Wayfarer Studios partner, Jamey Heath, had
              signed an agreement addressing Lively’s complaints about their
              behavior.
              <br /> <br />
              By{" "}
              <a
                href="
              
              https://www.hollywoodreporter.com/movies/movie-news/how-deadpool-justin-baldoni-blake-lively-nicepool-1236110331/#:~:text=In%20January%202024%2C%20the%20group%C2%A0%E2%80%94%20including%20Reynolds%2C%20there%20to%20support%20Lively%20%E2%80%94%20met%20in%20person%20at%20Lively%20and%20Reynolds%E2%80%99%20loft%20in%20lower%20Manhattan%20to%20discuss%20a%20return%20to%20set.%20That%20meeting%20grew%20heated%2C%20according%20to%20lawsuits%20filed%20by%20Baldoni"
                className="celebrity-link"
              >
                January{" "}
              </a>{" "}
              2024, the drama escalated with Lively, Reynolds, Baldoni, and
              others meeting in Lively and Reynolds' Manhattan loft to discuss
              her return to set—but according to Baldoni’s lawsuits, the meeting
              became heated.
              <br /> <br />
              Now,{" "}
              <a
                href="
              https://variety.com/2025/film/news/justin-baldoni-lawsuit-blake-lively-ryan-reynolds-nicepool-new-york-times-metadata-1236293856/#:~:text=%E2%80%9CReynolds%20portrayed%20Nicepool,perception%20of%20Baldoni"
                className="celebrity-link"
              >
                {" "}
                according{" "}
              </a>{" "}
              to the suit, Nicepool wasn’t just a random Deadpool variant—he was
              a “vicious caricature of a ‘woke’ feminist” that was meant to be a
              transparent and mocking portrayal of Reynolds’ “warped perception”
              of Baldoni. The lawsuit further claims that Nicepool’s arc was
              deliberately humiliating, ending with his violent death at the
              hands of ‘Ladypool,’ a character voiced by none other than Blake
              Lively.
              <br /> <br />
              However, one thing is noticeably missing from the updated lawsuit.
              Unlike the original letter, this one makes zero mention of asking
              Disney to keep records of{" "}
              <i>
                “all documents and communications relating to complaints of
                sexual or other harassment asserted against Ryan Reynolds by any
                person.”{" "}
              </i>
              <br /> <br />
              <b>CHAPTER 3 - Lively's Team Attempts</b>
              <br />
              As with anything Baldoni hits them with, Lively and Reynolds{" "}
              <a
                href="
              https://www.hindustantimes.com/entertainment/hollywood/justin-baldoni-launches-new-website-to-expose-blake-livelys-claims-emails-texts-go-live-101738456709443.html#:~:text=According%20to%20TMZ%2C%20Lively%20and%20Reynolds%20had%20attempted%20to%20secure%20a%20court%20order%20to%20prevent%20the%20website%E2%80%99s%20launch%2C%20arguing%20that%20it%20was%20a%20form%20of%20harassment%20and%20retaliation.%20However%2C%20their%20efforts%20were%20unsuccessful%2C%20and%20the%20site%20remains%20accessible"
                className="celebrity-link"
              >
                {" "}
                attempted
              </a>{" "}
              to secure a court order to block the website’s launch, arguing
              that it constituted harassment and retaliation. However,
              obviously, their efforts were unsuccessful, and the site remains
              accessible.
              <br /> <br />
              Earlier, Lively’s legal team{" "}
              <a
                href="
              https://www.hindustantimes.com/entertainment/hollywood/justin-baldoni-launches-new-website-to-expose-blake-livelys-claims-emails-texts-go-live-101738456709443.html#:~:text=Earlier%20Lively%E2%80%99s%20legal%20team%20has%20dismissed%20the%20website%20as%20an%20attempt%20to%20silence%20and%20intimidate%20her.%20In%20a%20statement%2C%20they%20compared%20Baldoni%E2%80%99s%20actions%20to%20DARVO%20(Deny%2C%20Attack%2C%20Reverse%20Victim%20and%20Offender)%20a%20common%20tactic%20used%20by%20those%20accused%20of%20wrongdoing"
                className="celebrity-link"
              >
                {" "}
                dismissed{" "}
              </a>{" "}
              the website as an attempt to silence and intimidate her. In a
              statement, they compared Baldoni’s actions to DARVO short for
              (Deny, Attack, Reverse Victim and Offender). You know, that
              classic playbook where the accused flips the script, denies
              everything, goes on the attack, and tries to paint the actual
              victim as the bad guy.
              <br /> <br />
              According to{" "}
              <a
                href="
              https://www.hindustantimes.com/entertainment/hollywood/justin-baldoni-launches-new-website-to-expose-blake-livelys-claims-emails-texts-go-live-101738456709443.html#:~:text=%E2%80%9CThis%20is%20an%20age%2Dold%20story%3A%20A%20woman%20speaks%20up%20with%20evidence%2C%20and%20the%20accused%20tries%20to%20flip%20the%20narrative%2C%E2%80%9D%20Lively%E2%80%99s%20lawyers%20stated.%20They%20also%20claim%20that%20Baldoni%20is%20using%20the%20vast%20resources%20of%20his%20production%20company%20to%20wage%20a%20media%20war%20against%20her"
                className="celebrity-link"
              >
                them
              </a>
              , Baldoni isn’t just defending himself—he’s using the full power
              of his production company to launch a full-blown media war against
              her.
              <br /> <br />
              During the pretrial conference, the presiding judge, Judge Lewis
              J. Liman{" "}
              <a
                href="
              https://www.jdsupra.com/legalnews/it-ends-with-us-but-continues-in-court-4149111/#:~:text=.%20At%20a%20hearing%20in%20Manhattan%20on%20February%203%2C%202025%2C%20Judge%20Lewis%20J.%20Liman%20ordered%20both%20legal%20teams%20to%20limit%20their%20out%2Dof%2Dcourt%20commentary%2C%20citing%20a%20New%20York%20rule%20(Rule%203.8)%20designed%20to%20prevent%20public%20statements%20that%20could%20prejudice%20legal%20proceedings"
                className="celebrity-link"
              >
                made it known
              </a>{" "}
              to both parties that he has had enough with the public
              back-and-forth. His message to them was to keep it down. Citing
              New York’s Rule 3.8—which basically says lawyers shouldn’t be out
              here making statements that could sway a legal case—he ordered
              both sides to chill with the public mudslinging.
              <br />
              The Judge{" "}
              <a
                href="
              https://www.jdsupra.com/legalnews/it-ends-with-us-but-continues-in-court-4149111/#:~:text=In%20a%20major%20update%20from%20New%20York%2C%20federal%20judge%20Lewis%20J.%20Liman%20has%20scheduled%20a%20trial%20date%20for%20March%209%2C%202026%2C%20marking%20the%20next%20chapter%20in%20this%20high%2Dprofile%20legal%20battle"
                className="celebrity-link"
              >
                also set
              </a>{" "}
              the big date for the case, locking in March 9, 2026, as the
              official trial date for the Lively vs. Baldoni showdown. That
              means we’ve got more than a year before this legal drama truly
              unfolds in court.
              <br /> <br />
              <b>CHAPTER 4 - Public Reactions</b>
              <br />
              As expected, the entertainment industry erupted once Baldoni’s
              website went public, and his fans wasted no time weighing in. Many
              are convinced the evidence on the site vindicates him.
              <br />
              One fan, clearly shook,{" "}
              <a
                href="
              https://www.dailymail.co.uk/tvshowbiz/article-14352739/justin-baldoni-fan-reactions-website-truth-blake-lively-lawsuit.html#:~:text=JUSTIN%20BALDONI%20DROPPED%20THAT%20WEBSITE%20AND%20JUST%20READ%20THE%20WHOLE%20THING%20%5Bsobbing%20emoji%5D%20BLAKE%20GIRL%20HE%20GOT%20YOU%20AND%20YOU%20BETTER%20RUN%20GURL%2C%27%20one%20wrote.%C2%A0"
                className="celebrity-link"
              >
                {" "}
                wrote
              </a>
              :
              <i>
                "JUSTIN BALDONI DROPPED THAT WEBSITE AND JUST READ THE WHOLE
                THING [sobbing emoji] BLAKE GIRL HE GOT YOU AND YOU BETTER RUN
                GURL."{" "}
              </i>
              <br /> <br />
              Another seemed stunned after reading the timeline,{" "}
              <a
                href="
              https://www.dailymail.co.uk/tvshowbiz/article-14352739/justin-baldoni-fan-reactions-website-truth-blake-lively-lawsuit.html#:~:text=Another%20wrote%3A%20%27Reading%20the%20Justin%20Baldoni%20lawsuit%20website%20timeline.%20Just%2C%20wow!%20It%27s%20a%20lot%20and%20Lively%2C%20girl%2C%20it%20ain%27t%20looking%20goof%20for%20you.%27%C2%A0"
                className="celebrity-link"
              >
                saying
              </a>
              :{" "}
              <i>
                "Reading the Justin Baldoni lawsuit website timeline. Just, wow!
                It's a lot and Lively, girl, it ain't looking good for
                you."{" "}
              </i>
              <br /> <br />
              And then there’s this person who{" "}
              <a
                href="
              
             https://www.dailymail.co.uk/tvshowbiz/article-14352739/justin-baldoni-fan-reactions-website-truth-blake-lively-lawsuit.html#:~:text=Justin%20Baldoni%27s%20lawyer%20was%20not%20joking%20when%20he%20said%20he%20was%20going%20to%20sue%20Blake%20and%20Ryan%20into%20oblivion...%20wow...%2C%27%20a%20third%20wrote.%20%27I%20saved%20both%20PDF%20files%20just%20in%20case%20Blake%27s%20team%20gets%20his%20website%20taken%20down%20before%20I%20finish%20reading%20the%20392%20pages%20in%20total.%27%C2%A0 "
                className="celebrity-link"
              >
                came{" "}
              </a>
              prepared for battle:{" "}
              <i>
                "Justin Baldoni's lawyer was not joking when he said he was
                going to sue Blake and Ryan into oblivion... wow... I saved both
                PDF files just in case Blake's team gets his website taken down
                before I finish reading the 392 pages in total."
              </i>
              <br /> <br />
              And then there’s one fan that had a takeaway from the drama and{" "}
              <a
                href="
             https://www.dailymail.co.uk/tvshowbiz/article-14352739/justin-baldoni-fan-reactions-website-truth-blake-lively-lawsuit.html#:~:text=If%20there%20is%20one%20thing%20I%27ve%20learned%20from%20the%20Justin%20Baldoni%20and%20Blake%20Lively%20saga%20it%20is%20this%20%2D%20never%20delete%20a%20single%20email%20or%20text%20if%20you%20are%20basically%20behaving%20above%20board.%20Not%20a%20single%20one.%20Save%20them%20all%20for%20your%20future%20lawyer%27s%20timeline%20website%2C%27%20a%20fourth%20added.%C2%A0 "
                className="celebrity-link"
              >
                that's
              </a>{" "}
              <i>
                "never delete a single email or text if you are basically
                behaving above board. Not a single one. Save them all for your
                future lawyer's timeline website.”{" "}
              </i>
              <br /> <br />
              Whew! The fans are invested, and if nothing else, Baldoni’s legal
              team has certainly made sure their side of the story is out there
              for the world to see, but with Lively and her team counterattack,
              it's sure they're not going down without a serious fight.
            </p>
          </div>
        </div>

        <div className="container grid-celebrity m-4">
          <div className="celebrity-image-container">
            <img
              src={celebrity2}
              alt="Celebrity YouTube"
              className="celebrity-image"
            />
            <br /> <br />
            <p className="celebrity-title">
              <b> YIKES… Did Kim Kardashian Just Get PUBLICLY REJECTED?!</b>
            </p>
            <br />
            <p className="celebrity-info">
              Kim Kardashian, known for being the queen of confidence and making
              headlines, may have just experienced one of her most awkward
              moments yet. Imagine putting yourself out there, only to get shut
              down in front of millions. That’s exactly what happened to the
              business woman, and it’s causing a stir online. So, what went
              down? Let’s dive into the details of this surprising public
              rejection and why it’s got people talking. You won’t believe who
              was involved!
              <br /> <br />
              <b>Chapter 1: The Unexpected Rejection</b>
              <br />
              Kim Kardashian is no stranger to attention, but this time, she got
              it for all the wrong reasons. It all started when she posted on
              her Instagram Stories, casually mentioning that she wanted to meet
              him and watch him play on his new team. Okay, fine, no big
              deal—until she took it a step further. When the Lakers officially
              announced Luka’s arrival on Instagram, Kim didn’t hold back. She
              dropped a lip-biting emoji (yes, that one), and then followed up
              with, <i>“I want to learn how to speak Slovenian.”</i>
              <br /> <br />
              Now, if you know anything about social media flirting, this was a
              bold move. Kim was making it very clear that she had her eyes on
              Luka. But here’s the real question—did he take the bait?
              <br /> <br />
              Not quite. Slovenian-born Luka’s response was short, unexpected,
              and instantly viral. He said , <i>“No, please don’t,” </i>in
              response to Kim’s comment. It wasn’t just a simple reply; it was a
              statement. Fans quickly took this as Luka politely shutting down
              any potential flirtation. Social media wasted no time reacting.
              Memes flooded Twitter and Instagram, with people joking about how
              Luka gave Kim the hardest rejection of 2025 because “he was not
              falling for that trap.”
              <br /> <br />
              One user was shook, questioning the legitimacy of the screenshot
              with <i>"I'm dead IS THIS FR?"</i> Another quickly confirmed it
              before adding that Kim deleted the comment right after, to which a
              third user reacted{" "}
              <i>
                "Omg did she really??!! Lol that makes it even more embarrassing
                for her!"
              </i>
              <br /> <br />
              Then came the savage reactions. Another user couldn’t get over
              Luka’s bluntness:{" "}
              <i>"The way Luka said ‘no’ straight up lmao."</i>
              Meanwhile, a fifth user didn’t hold back, writing:{" "}
              <i>"She is such a clown LOL."</i> And an entirely different user
              sealed the deal with:
              <i>"He’s also 25 lol."</i>
              <br />
              <br />
              Yikes. The internet really had time for this one.
              <br />
              <br />
              Interestingly, Luka himself is in a long-term relationship with
              Anamaria Goltes—his childhood sweetheart from Slovenia—for years.
              Their relationship is solid, and many fans think his quick, blunt
              response was his way of shutting down any potential speculation
              before it could even start. Basically, a polite but firm "I'm
              good, thanks."
              <br /> <br />
              But here’s the real tea—Kim deleting her comment just made
              everything ten times messier. Like, if it was just a harmless
              joke, why erase it? Did she realize how it looked? Was she
              embarrassed by Luka’s public shutdown? Whatever the reason, fans
              were not letting it slide.
              <br /> <br />
              At the end of the day, Kim’s love life has always been a hot
              topic, and this little Instagram moment? Just another headline in
              the Kardashian dating chronicles.
              <br /> <br />
              <b>Chapter - 2: Kim Kardashian’s history with athletes </b>
              <br />
              This isn’t the first time Kim has been linked to an athlete. In
              fact, her history of dating sports stars goes all the way back to
              the early 2000s.
              <br /> <br />
              Her first high-profile sports romance was with Reggie Bush. The
              NFL star and Kim started dating in 2007, and their relationship
              was basically reality TV gold. Fans got a front-row seat on
              Keeping Up with the Kardashians as the two tried to make things
              work despite their crazy schedules. By 2008, Kim was already
              dropping hints that Reggie might be the one.
              <br /> <br />
              But, as with most celeb relationships, the long distance took its
              toll. They split in 2009, only to get back together a few months
              later, this time even house hunting together. It seemed like they
              were serious about making it work.
              <br /> <br />
              But by 2010, Reggie was juggling football commitments, and Kim was
              diving deeper into her rising fame. The busy schedules won in the
              end, and they officially called it quits. It was the first, but
              definitely not the last time Kim’s love life was tied to the
              sports world.
              <br /> <br />
              By the summer of 2010, she was linked to Dallas Cowboys wide
              receiver Miles Austin. This time, things seemed a little
              different. Kim was often spotted cheering him on from the
              sidelines, and the couple even went on double dates with her
              sisters. According to sources, what really drew them together was
              their shared understanding of demanding schedules. They both knew
              what it was like to juggle careers in the spotlight.
              <br /> <br />A source even told PEOPLE that Kim was “really
              supportive of him,” and the two were keeping things low-key—which,
              let’s be real, is not something we usually associate with Kim’s
              relationships.
              <br /> <br />
              By September 2010, reports said their relationship was “stronger
              than ever.” But just like that, they were done shortly after.
              <br /> <br />
              After dating some non-athletes in the subsequent months, she
              started dating NBA player Kris Humphries in December 2010, and
              things escalated fast. In just six months, Kris proposed in a
              grand moment that was filmed for Keeping Up with the Kardashians.
              He filled their bedroom with roses, got down on one knee, and
              popped the question.
              <br /> <br />
              By August 2011, they had a massive fairytale wedding in Montecito,
              California, attended by Hollywood’s elite. The photos were
              stunning, but behind the scenes? Not so much.
              <br /> <br />
              Kim later admitted that even on their honeymoon, she knew the
              marriage was doomed. And just 72 days later, she filed for
              divorce, citing “irreconcilable differences.”
              <br /> <br />
              She later opened up about the whirlwind marriage and divorce,
              admitting that she didn’t handle it the right way. Looking back,
              she wished she had been more mature and gone through with an
              annulment instead of a publicized legal battle.
              <br /> <br />
              She also revealed that she felt pressured to go through with the
              wedding—especially since it was being filmed for KUWTK. In fact,
              her mom, Kris Jenner, even offered her an out the night before the
              ceremony. But with so much attention on the event, Kim felt like
              she couldn’t back out.
              <br /> <br />
              And as for claims that the wedding was just for TV? Kim shut that
              down real quick. She explained that she used her entire filming
              fee—and likely Kris’ too—just to make the wedding bigger than what
              production was willing to cover. If it was all just for show, she
              joked, she would have saved her money!
              <br /> <br />
              To this day, her infamously short marriage is one of the biggest
              pop culture moments of the 2010s.
              <br /> <br />
              And just when we thought Kim might be done with her athlete phase,
              enter Odell Beckham Jr. In September 2023, reports surfaced that
              Kim was casually hanging out with the Baltimore Ravens wide
              receiver. This came shortly after his split from Lauren Wood, the
              mother of his son. By November 2023, Kim even attended Odell’s
              31st birthday party, which only fueled more speculation. But
              despite the buzz, sources claimed they were keeping things
              low-key.
              <br /> <br />
              Fast forward to April 2024, and just like that—their rumored
              romance fizzled out. Whether it was just a casual fling or
              something more, Kim’s track record with athletes remained
              undefeated.
              <br /> <br />
              <b>Chapter 3 : Kim wanted an Athlete again?</b>
              <br />
              Maybe that’s exactly why she tried to shoot her shot with Luka
              Dončić—sticking to a pattern she knows all too well.
              <br /> <br />
              But here’s where things get interesting. After her split from
              Odell Beckham Jr., Kim had publicly vowed to stay single for two
              years. Back in 2023, Kim Kardashian made it clear that she was in
              no rush to jump into another relationship. Speaking on the On
              Purpose With Jay Shetty podcast, she opened up about her approach
              to love, calling herself a hopeless romantic who enjoys sharing
              her life with someone. However, she also acknowledged that dating
              as a mother comes with added responsibilities.
              <br /> <br />
              Kim emphasized the importance of taking her time, learning from
              past mistakes, and being mindful of who she allows into her life.
              <i>
                “There’s so many factors, especially when you have kids,”
              </i>{" "}
              she said, stressing that she wanted to avoid repeating past
              relationship missteps.
              <br /> <br />
              At the time, she seemed content, stating,{" "}
              <i>
                “There’s so much going on that I’m not lonely, and I think that
                is really important.”
              </i>{" "}
              She remained optimistic about love but insisted she wouldn’t rush
              into anything.
              <br /> <br />
              Well… it looks like that plan didn’t last long. Now, she’s singing
              a completely different tune. Let's roll the clip.{" "}
              <a
                href="
              https://youtu.be/mBaH5r4asNk?si=LitbITBMZOvhmzfs&t=251s"
                className="celebrity-link"
              >
                {" "}
                (play video 4:11-4:43)
              </a>
              <br /> <br />
              With her recent flirty comment on Luka Dončić’s post, it seems
              like Kim might just be taking their advice. Whether it was playful
              banter or a genuine attempt at flirting, it’s clear she’s stepping
              back into the dating world.
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="celebrity-other ">
        <h3 className="celebrityother-heading">Read More</h3>

        <div className=" container flex-5 m-3">
          <div className="celebrity-other1">
            <img src={celebrity2} alt="" className="celebrity-image2" />

            <p className="celebrity-title2">
              <b>50 Cent Exposes All The Rappers Diddy Slept With.</b>
            </p>
          </div>

          <div className="celebrity-other1">
            <img
              src={celebrity2}
              alt="Tyler Perry"
              className="celebrity-image2"
            />

            <p className="celebrity-title2">
              <b>Did Tyler Perry Just Out Himself As Gay?</b>
            </p>
          </div>

          <div className="celebrity-other1">
            <img src={celebrity2} alt="Jacky Oh" className="celebrity-image2" />

            <p className="celebrity-title2">
              <b>Was Jacky Oh's Death A Setup?</b>
            </p>
          </div>

          <div className="celebrity-other1">
            <img src={celebrity2} alt="Jacky Oh" className="celebrity-image2" />

            <p className="celebrity-title2">
              <b>Was Jacky Oh's Death A Setup?</b>
            </p>
          </div>
          <div className="celebrity-other1">
            <img src={celebrity2} alt="Jacky Oh" className="celebrity-image2" />

            <p className="celebrity-title2">
              <b>Was Jacky Oh's Death A Setup?</b>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Celebrity;
