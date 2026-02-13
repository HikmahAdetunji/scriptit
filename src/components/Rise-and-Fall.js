import React, { useEffect, useState } from "react";
import "../App.css";
import "../css/Celebrity.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import celebrity from "../images/celebrity9.jpg";
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
                Inside the Rise and Fall: The Untold Story of SunnyV2's YouTube
                Empire
              </b>
            </p>
            <br />
            <p className="celebrity-info">
              SunnyV2 is one of the YouTubers who rose to fame by airing the
              dirty laundry of celebs and fellow creators alike. Given his focus
              on exposing others, one might expect Sunny to maintain a spotless
              reputation. But recently SunnyV2 has found himself in the position
              of his victims as a bunch of creators and fans started expressing
              their disdain for Sunny labelling him a hypocrite, racist, and
              even transphobic. So what went wrong with SunnyV2 and what's up
              with the controversies surrounding him? <br />
              But before we talk about his fall from grace, let's first talk
              about SunnyV2's rise to fame.
              <br /> <br />
              It all started on June 4th, 2015 when an unknown Youtuber named
              <i>Might Of Sun</i> uploaded his first video focused on RuneScape.
              Nothing groundbreaking, nothing flashy, just him casually talking
              while playing the game. It was the kind of content that was easily
              overlooked at the time; little did anyone know that the voice
              behind the mic would eventually become a pacesetter in YouTube
              commentary and documentary.
              <br /> <br />
              Over the next year and a half, <i>Might Of Sun</i> uploaded a
              total 29 videos and he decided to quit. While his style was
              undoubtedly unique with the trademark humor, wit, and quirk, the
              results were underwhelming. He managed to pull in 400 subscribers
              which is a respectable number but not enough to make a career out
              of it.
              <br /> <br />
              However, the break didn't last forever. On January 22nd 2019,
              Sunny returned to YouTube, rebranding himself as a Fortnite
              streamer. This was back when Fortnite was dominating the internet,
              so it seemed like a smart move. But unfortunately, the strategy
              flopped. His Fortnite videos barely pulled any views and were met
              with high dislike ratios.
              <br /> <br />
              SunnyV2's rise to fame on YouTube eventually began on March 8th,
              2020 after he rebranded himself as the now-SunnyV2. It all began
              with a video where he deep-dived into the downfall of YouTuber
              Boogie2988. Sure, the video was mostly criticising Boogie, but
              Sunny's personality and sharp commentary made it entertaining. It
              didn't just perform well - it absolutely blew up, racking up 1.7
              million views, despite Sunny having just 4,000 subscribers at the
              time.
              <br /> <br />
              Realizing he was onto something, Sunny ditched Fortnite and fully
              began making this type of documentary videos. He explored internet
              culture, controversies, and the rise and fall stories of creators.
              Fans couldn't get enough, with some praising him for being{" "}
              <i>
                “the only person who could make them watch a full documentary
                about someone they didn't care about.”
              </i>
              <br /> <br />
              In just three years, Sunny went from a modest 1,000 subscribers to
              over 3 million, amassing a whopping 700+ million views.
              <br /> <br />
              So, with everything that Sunny has achieved, you might be
              wondering - how could there possibly be any criticism? Well,
              buckle up, because there are definitely some controversial points
              to unpack.
              <br /> <br />
              Starting from November 29, 2020, when SunnyV2 uploaded a video
              titled <i>“Every Commentary Channel Videos.”</i> In it, he mocked
              commentary YouTubers, calling them out for being annoying and for
              exaggerating dramas. Fast forward a few years, though, and Sunny
              seems to have become the very thing he was criticising.
              <br /> <br />
              For instance, in that video, he pointed out how commentary
              channels often twist scenarios to make them seem much worse than
              they actually are - yet, this is now exactly how many people
              describe his content.
              <br /> <br />
              His video about Dream face reveal, for example, was dramatic, to
              say the least. In the video, he opens with,{" "}
              <i>
                “Dream’s face reveal could qualify as the worst mistake made by
                a content creator ever.”
              </i>{" "}
              Like, really? The worst mistake ever? All the guy did was show his
              face. Sure, the reveal sparked a lot of memes and jokes, but
              Sunny’s narrative made it seem like this single moment was the
              sole reason for Dream’s decline in popularity.
              <br /> <br />
              But let’s be real—Dream’s fade from the spotlight had way more to
              do with a variety of factors, such as the natural decline in
              Minecraft’s popularity and shifting trends on YouTube. Sunny,
              however, zeroed in on the face reveal, framing it as the ultimate
              downfall moment. It’s this over-simplification that makes people
              roll their eyes at some of his content.
              <br /> <br />
              Now, the video about the Kris Tyson situation takes the
              sensationalism up a notch. Sunny essentially claims that Kris
              coming out as trans could be a
              <i> “complete disaster for MrBeast’s brand.” </i> He even compares
              Kris’s real-life transition to the trope of how forced LGBT
              representation in Hollywood ruins movies.
              <br /> <br />
              That’s where a lot of people went, “Wait, what?” First off,
              MrBeast has over 300 million subscribers—Kris’s transition isn’t
              going to destroy his empire. And honestly, most fans don’t care
              about Kris’s personal journey because they’re there for the
              content, not to scrutinize the crew’s lives. Sunny trying to
              connect this situation to some larger “LGBT characters ruin
              everything” narrative felt like a reach.
              <br /> <br />
              But moving on to another criticism surrounding SunnyV2, which is
              that his videos often rely on surface-level research. Instead of
              diving into the real facts of his subjects, he uses anecdotal
              quotes, hate comments, and selectively presented data to back up
              his claims. For example, in his video about the supposed downfall
              of YouTuber Ninja, Sunny claimed that the streamer’s career was
              “dead.” Yet, this conclusion ignored the fact that Ninja was still
              earning millions, playing Fortnite professionally, and thriving in
              his own lane. The framing made it seem like Sunny was trying to
              fit Ninja into his "downfall" narrative, regardless of the facts.
              <br /> <br />
              SunnyV2’s take on Ninja’s declining viewership got strange when he
              blamed it on Ninja’s support for the Black Lives Matter (BLM)
              movement in 2021. He made this claim without offering any real
              evidence to back it up, which made it feel more like an
              unnecessary jab than an actual argument.
              <br /> <br />
              The BLM movement was massive during that time, with support from
              people all over the world, including gamers. So, trying to say
              that Ninja’s support hurt his audience just doesn’t make sense.
              <br /> <br />
              Even other gamers haven’t been spared from SunnyV2’s relentless
              critiques, including Minecraft YouTuber Skeppy. In his video about
              the death of Skeppy’s career, Sunny starts by listing several
              reasons he believes Skeppy’s views have declined in recent years,
              including his "72 Pizzas" video. In this video, Skeppy claimed to
              have ordered 72 pizzas to prank fellow YouTuber BadBoyHalo. Sunny
              nitpicks that Skeppy didn’t show the full phone call of the order,
              questions why only 37 boxes were visible, and implies that Skeppy
              might have stacked empty boxes to fake the prank.
              <br /> <br />
              But really, who cares? Why would anyone want to sit through a
              drawn-out phone call ordering pizzas just to prove a point? And is
              it realistic to expect all 72 boxes to be opened and inspected on
              camera for authenticity? These claims are not only trivial and
              nitpicky but also borderline absurd. It feels like Sunny is
              grasping at straws to paint Skeppy in a negative light without
              realizing how petty and ridiculous it comes across.
              <br /> <br />
              In 2021, SunnyV2 targeted another popular Youtuber, Ali-A in a
              video titled “Ali-A has fallen towards irrelevancy.” SunnyV2
              argued that Ali-A’s overly happy personality was the reason for
              his supposed decline. He compared Ali-A’s upbeat demeanor to
              Ninja’s more “authentic” emotional reactions, suggesting that
              viewers found Ali-A fake and unlikable. But this comparison feels
              unfair—Ali-A’s content is designed to be entertaining for younger
              audiences, not deep reflections of his personal emotions. Ali-A
              himself responded in a video titled “Ali-A Is Now Irrelevant:
              Ali-A Reacts,” reiterating that he’s simply a positive person who
              enjoys creating fun gaming content.
              <br /> <br />
              Sunny also criticized Ali-A’s expressive thumbnails, dismissing
              them as clickbait. However, those thumbnails are a key part of
              Ali-A’s brand, helping him stand out in a crowded space.
              Ironically, using eye-catching thumbnails is a strategy many
              YouTubers, including Sunny himself, rely on.
              <br /> <br />
              He brought up Ali-A’s video titled “Opening the Secret Bunker
              (What’s Inside?),” claiming it was clickbait because the bunker
              didn’t contain much. But here’s the kicker: Ali-A did reveal what
              was inside, even if the outcome wasn’t particularly exciting. This
              raised questions about whether Sunny had even watched the video he
              was criticizing.
              <br /> <br />
              SunnyV2 claimed that Ali-A’s switch from Call of Duty to Fortnite
              caused his “downfall.” But this argument ignores the context of
              the gaming world at the time. Call of Duty was losing popularity,
              and viewers were moving toward newer, more exciting games like
              Fortnite. Ali-A’s decision to adapt was a smart move that kept his
              content relevant. In fact, after switching to Fortnite, his
              viewership tripled.
              <br /> <br />
              While die-hard Call of Duty fans may have been upset by the
              switch, Ali-A’s willingness to switch ensured his long-term
              success. Sunny’s claim that the switch led to a decline in Ali-A’s
              career doesn’t hold up when you consider the growth that followed.
              Despite all the backlash, SunnyV2 never addresses any, which
              raises an important question: how credible is his content if he
              never defends it? It seems like Sunny operates with the mindset
              that any publicity is good publicity. If his controversial takes
              and misinformed claims get people talking—even negatively—it still
              draws attention to his channel.
              <br /> <br />
              <i>
                {" "}
                With all these criticisms, do you think the end is near for
                SunnyV2 on YouTube? Or will he evade the cancel culture? Let us
                know your thoughts in the comment section. Thanks for watching
                this video. See you in the next one!
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebrity;
