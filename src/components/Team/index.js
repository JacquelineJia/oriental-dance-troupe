import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Team.module.scss';

class Team extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.title}>
          <FormattedMessage
            id="components.team.title"
            defaultMessage="Our Team"
          />
        </span>
        <span className={style.ourTeamContent}>
          <span className={style.subtitle}>
            <FormattedMessage
              id="components.about.content.ourTeam.director.name"
              defaultMessage="Tao Ding"
            />
          </span>
          <span className={style.content}>
            <FormattedMessage
              id="components.about.content.ourTeam.director"
              defaultMessage="director"
            />
          </span>
          <span className={style.subtitle}>
            <FormattedMessage
              id="components.about.content.ourTeam.artisticDirector.name"
              defaultMessage="Junwei Bao"
            />
          </span>
          <span className={style.content}>
            <FormattedMessage
              id="components.about.content.ourTeam.artisticDirector"
              defaultMessage="Artistic Director"
            />
          </span>
          <span className={style.subtitle}>
            <FormattedMessage
              id="components.about.content.ourTeam.instructor.name.1"
              defaultMessage="Diana Ding"
            />
          </span>
          <span className={style.content}>
            <FormattedMessage
              id="components.about.content.ourTeam.instructor"
              defaultMessage="Instructor"
            />
          </span>
        </span>
      </div>
    );
  }
}

export default Team;
