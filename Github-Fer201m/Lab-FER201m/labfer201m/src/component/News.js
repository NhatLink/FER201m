import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import { Navbar, NavItem, Icon } from 'react-materialize'
function About() {
  return (
    <div className='about'>
      <Collapsible accordion={false}>
      <CollapsibleItem header="Sony is developing live-action films"><Icon left></Icon> 
          <p>Sony is developing a number of live-action films based on Marvel characters, with scheduled releases for Kraven the Hunter in 2023, and Madame Web and the untitled Venom: Let There Be Carnage sequel in 2024. Several more films are in various stages of development, and Sony Pictures Television is developing several live-action television series set in the same shared universe, which include Silk: Spider Society and an untitled Spider-Man Noir series.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Marvel Cinematic Universe and animated Spider-Verse connections"><Icon left></Icon>
          <p>Feige stated in June 2017 that because Venom was solely a Sony project, Marvel Studios had no plans to have it crossover with the MCU.However, producer Amy Pascal soon clarified that Sony intended to have their new Marvel-based films take place in "the same world" as Spider-Man: Homecoming, describing them as "adjunct" to that world. She said that Venom would have connections with the next planned film in Sony's shared universe, Silver & Black, and that there was potential for Tom Holland's Spider-Man to crossover from the MCU films to the films in Sony's universe.[34] Holland was not contracted to appear outside of a trilogy of Spider-Man films and several other MCU films, but Sony intended to have the actor appear in their other Marvel films eventually.According to several reports, Holland spent several days during Venom's production filming a cameo appearance as Peter Parker / Spider-Man for the film,[35][36] but Marvel Studios asked Sony to exclude the scene from the final film. By August 2018, Sony was actively planning to crossover Spider-Man with their own Marvel films, describing the character and Venom as "already in the same universe... we are looking forward to the two of them eventually facing off in the future".Sony was also open to more of their characters appearing in MCU films in exchange for more MCU characters appearing in their own films.In December, Venom writer Jeff Pinkner was asked if that film was set in the same universe as Holland's Spider-Man films, and he said, "without revealing anything that I'm not allowed to reveal, it is not impossible that in a future/upcoming Venom movie, Spider-Man will play a significant role".Pascal added, in reference to a crossover between the MCU Spider-Man films, Sony's own shared universe films, and Sony's animated Spider-Verse films, that "there's a world in which everything comes together", but Holland was restricted by his contract with Marvel Studios at that time.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Future"><Icon left></Icon>
          <h4>Kraven the Hunter (2023) </h4>
          <p>Main article: Kraven the Hunter (film) Richard Wenk was hired to write a screenplay based on Kraven the Hunter in August 2018.Art Marcum and Matt Holloway had re-written the script by August 2020, and J. C. Chandor entered talks to direct;he was confirmed in May 2021 when Aaron Taylor-Johnson was cast in the title role.Filming began in late March 2022 in London, and concluded by mid-June.Kraven the Hunter is set to be released on October 6, 2023.</p>
          <h4>Madame Web (2024)</h4>
          <p>Main article: Madame Web (film)
After their work on Morbius, Sony hired Matt Sazama and Burk Sharpless in September 2019 to write a script centered around Madame Web.[97] In May 2020, S. J. Clarkson was hired to develop and direct Sony's first female-centric Marvel film, which was reported to be the Madame Web film.[96][106] The studio was looking to attach a prominent actress such as Charlize Theron or Amy Adams to the project, before hiring a new writer to craft the film with an actress in mind.[96] By February 2022, Dakota Johnson was in talks to portray the lead character,[107] and was confirmed to be starring that April.[108] Filming began in mid-July,[109][110] occurring in Boston and throughout Massachusetts until that September,[110][111] before shooting in New York City by mid-October.[112] Filming completed before the end of 2022.[113][114] Madame Web is set to be released on February 16, 2024.[93]</p>
          <h4>Untitled Venom: Let There Be Carnage sequel (2024)</h4>
          <p>Main article: Untitled Venom: Let There Be Carnage sequel
In August 2018, Hardy confirmed that he had signed on to star in three Venom films.[115] Andy Serkis expressed interest in returning to direct another Venom film in September 2021,[116] and that December, Pascal said they were in the "planning stages" of a third Venom film.[117] Sony confirmed the film was in development at CinemaCon in April 2022.[118] In June, Hardy revealed that Kelly Marcel was writing the script and that he was co-writing the story with her,[119] and Marcel was set to direct that October.[101] Filming began in late June 2023 in Spain,[120][121] and will also take place in London.[122] The film is set to be released in October 2024.[100]</p>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default About;