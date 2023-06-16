import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import { Navbar, NavItem, Icon } from 'react-materialize'
function About() {
  return (
    <div className='about'>
      <Collapsible accordion={false}>
      <CollapsibleItem header="The Team"><Icon left></Icon> 
          <p>Here you can see the player card, which consists of over 50 soccer football players from all over the world.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Nation"><Icon left></Icon>
          <p>We started as a small family-owned business in 1995 and have since grown to become one of the leading providers of eco-friendly products in the industry.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Daliy News"><Icon left></Icon>
          <ul>
            <li><strong>John Doe</strong> - CEO</li>
            <li><strong>Jane Smith</strong> - Sales Manager</li>
            <li><strong>Mike Johnson</strong> - Operations Manager</li>
          </ul>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default About;