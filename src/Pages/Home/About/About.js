import { Container } from "@mui/material";
import React from "react";
import "./About.css";
import about1 from "../../../Images/about-pics/about-1.jpg";
import about2 from "../../../Images/about-pics/about-2.jpg";
import about3 from "../../../Images/about-pics/about-3.jpg";
import about4 from "../../../Images/about-pics/about-4.jpg";
import about5 from "../../../Images/about-pics/about-5.jpg";

const About = () => {
  return (
    <div>
      <Container>
        <section id="about">
          <div className="img">
            <img src={about4} alt="" />
          </div>
          <div className="article">
            <article>
              Scholars have speculated that the metaverse will alter the way in
              which the hospitality and tourism industry operates. Efforts to
              understand this new phenomenon in both academia and industry are
              at a crossroads. In this opinion piece, we first attempt to
              explain the concept of the metaverse in general and in the context
              of the hospitality and tourism industry. Next, we propose a
              conceptual framework for creating metaverse experiences,
              identifying research gaps, and proposing agenda items with the
              potential to significantly benefit hospitality and tourism
              industry players. Finally, we classify future research agendas
              into three broad categories: staging experiences in the metaverse,
              understanding possible changes in the consumer behavior, and
              marketing and operations strategies in the metaverse.
            </article>
          </div>
        </section>
        <section id="about">
          <div className="article">
            <article>
              In areas where the virus that causes COVID-19 is circulating,
              staff aged 60 or over, or who have any underlying health
              conditions such as heart disease, diabetes or lung cancer, should
              wear a medical mask because of their higher risk of getting
              seriously ill from COVID-19. Staff under the age of 60 and who are
              in general good health can wear fabric masks when they cannot
              guarantee at least a 1 metre distance from others. This is
              particularly important for staff who are in close contact or
              potential close contact with others. Everyone should follow local
              policies and regulations.
            </article>
          </div>
          <div className="img">
            <img src={about2} alt="" />
          </div>
        </section>
        <section id="about">
          <div className="img">
            <img src={about1} alt="" />
          </div>
          <div className="article">
            <article>
              As fever, dry cough or tiredness, staff at the accommodation
              establishment should contact the local health authority and follow
              their instructions. The sick person should be isolated in a room,
              alone, or at least 1 metre away from others, according to local
              health authorities instructions. No visitors should be permitted
              to enter the room occupied by the affected guest. Staff should
              also move people traveling with the sick person to a different
              room, if possible. It is usually the relevant public health
              authority, not the management of the hotel and accommodation
              establishment, which has the authority to demand sick guests to
              temporarily remain in their room or to prevent them from receiving
              visits from other guests. National law will guide the rights of
              the guests to refuse or not the recommended measures. Staff
              entering the room of an ill person should maintain at least a 1
              metre distance from the ill person, and request that the ill
              person put on a medical mask.
            </article>
          </div>
        </section>
        <section id="about">
          <div className="article">
            <article>
              The aim of this paper is to estimate households’ willingness to
              pay (WTP) for the development of community based tourism (CBT)
              around Alelo Bad hot spring water. To achieve the stated
              objective, relevant data was collected from a total of 157 sample
              respondents through questionnaires, interviews and field
              observation techniques. In this study, both descriptive and
              econometric models (Seemingly Unrelated Bivariate Probit and
              Probit models) were used to analyze the collected data. The
              descriptive statistics clearly shows that 66.24% of the
              respondents were willing to pay for the existence of the proposed
              project while 33.76% were not willing to pay.
            </article>
          </div>
          <div className="img">
            <img src={about3} alt="" />
          </div>
        </section>
        <section id="about">
          <div className="img">
            <img src={about5} alt="" />
          </div>
          <div className="article">
            <article>
              Being green has become a focus in hospitality as evidenced by the
              rise of sustainable tourism in general and green hotels in
              particular. The current research examines the impact of
              willingness to sacrifice for the environment on green hotel
              evaluations and demonstrates that consumers high in willingness to
              sacrifice are more likely to embrace green hotels (Study 1).
              However, this effect is moderated by a green hotel’s positioning
              strategy (i.e., underdog versus top dog), which signals
              quality-based information (Study 2), and its green advertising
              appeals (i.e., competence versus warmth), which signal both
              quality-based and intent-based information (Study 3). Our research
              offers a theoretical framework for hotels to develop proper market
              signals to promote their green focus and it provides guidance for
              effective brand positioning and advertising strategies.
            </article>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
