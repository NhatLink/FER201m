import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import { Navbar, NavItem, Icon } from 'react-materialize'
function About() {
  return (
    <div className='about'>
      <Collapsible accordion={false}>
      <CollapsibleItem header="Sony's Spider-Man Universe (SSU)"><Icon left></Icon> 
          <p>Sony's Spider-Man Universe (SSU) is an American media franchise and shared universe centered on a series of superhero films produced by Columbia Pictures in association with Marvel Entertainment. Distributed by Sony Pictures Releasing, the films are based on various Marvel Comics characters and properties commonly associated with Spider-Man.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Name"><Icon left></Icon>
          <p>Sony officially announced their new shared universe—based on various Marvel Comics properties and characters commonly associated with Spider-Man—in May 2017, with the title "Sony's Marvel Universe".By August 2018, it was being referred to as "Sony's Universe of Marvel Characters" internally at the company.In March 2019, a Sony Pictures Entertainment presentation referred to the "Sony Pictures Universe of Marvel Characters" (SPUMC),and Sony later confirmed that this was the official name for its shared universe. The presentation applied the title to Marvel Studios' Spider-Man films and the animated Spider-Verse films as well as Sony's own live-action Marvel adaptations.The title was widely criticized, with commentators mocking its length compared to shorter franchise names like the Marvel Cinematic Universe (MCU) and DC Extended Universe (DCEU),as well as the acronym "SPUMC".James Whitbrook of io9 questioned why the term "Spider-Verse" was not being used.Columbia Pictures president Sanford Panitch stated that Sony did not want to refer to their shared universe as the "Spider-Verse" since it encompassed many characters separate from Spider-Man.Despite this, Sony announced in August 2021 that the franchise had been renamed "Sony's Spider-Man Universe" (SSU).</p>
        </CollapsibleItem>
        <CollapsibleItem header="Sony's Spider-Man Universe Manager"><Icon left></Icon>
          <ul>
            <li><strong>Based on</strong> - Marvel Comics</li>
            <li><strong>Produced by</strong> - Avi Arad - Matt Tolmach - Amy Pascal</li>
            <li><strong>Starring</strong> - 2018–present</li>
            <li><strong>Production</strong> - Columbia Pictures</li>
            <li><strong>companies</strong> - Marvel Entertainment</li>
            <li><strong>Distributed by</strong> - Sony Pictures Releasing</li>
          </ul>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default About;