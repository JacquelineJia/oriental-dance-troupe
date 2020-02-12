import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './About.module.scss';

class About extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.aboutUsTitle}>
          <FormattedMessage
            id="components.about.title.aboutUs"
            defaultMessage="About us"
          />
        </span>
        <span className={style.aboutUsContent}>
          <FormattedMessage
            id="components.about.content.aboutUs"
            defaultMessage="The Oriental Dance Troupe of Ottawa was established in 1988 by a group of Chinese dance lovers. The group was registered as a not-for-profit organization in 1994. The initial mandate of the organization was to promote Canadian multiculturalism by oriental dance and arts, and to unite overseas Chinese populations from different regions such as Mainland China, Hong Kong, Taiwan and other parts of Asia like Vietnam, Singapore, Indonesia, Malaysia, etc.; and to let Westerners get to know Chinese culture through oriental movement and dance.{br}Our group has had many performances over the past 30 years: we have performed in the National Capital region, Quebec City, Montreal, Brockville, Bellville, and Toronto. We are active in both the Chinese and other multicultural communities, such as the Canada Day celebration, Tulip Festival, Winterlude, Ukraine Festival, Serbian Festival, Brockville Multicultural Festival, etc. We have performed on big stages such as the National Arts Center, the National Gallery, the History Museum, Centrepointe Theatre, Algonquin Commons Theatre, Ottawa City Hall, Kailash Mital Theatre, etc., and also in more modest surroundings like senior residences.{br}A key part to our children’s outreach is the educational program for children at the Canadian Children’s Museum and at local schools."
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
        {/* <span className={style.ourTeamTitle}>
          <FormattedMessage
            id="components.about.title.ourTeam"
            defaultMessage="Our Troupe"
          />
        </span>
        <span className={style.ourTeamContent}>
        </span> */}
      </div>
    );
  }
}

export default About;
