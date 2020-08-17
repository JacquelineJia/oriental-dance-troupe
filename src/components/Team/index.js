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
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.row}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.director.name"
                    defaultMessage="Tao Ding"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.director"
                    defaultMessage="director"
                  />
                </span>
              </span>
              <div className={style.imageTaoDing}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.director.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.name}>
              <FormattedMessage
                id="components.about.content.ourTeam.artisticDirector.name"
                defaultMessage="Junwei Bao"
              />
            </span>
            <span className={style.role}>
              <FormattedMessage
                id="components.about.content.ourTeam.artisticDirector"
                defaultMessage="Artistic Director"
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.name}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.name.1"
                defaultMessage="Diana Ding"
              />
            </span>
            <span className={style.role}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor"
                defaultMessage="Instructor"
              />
            </span>
          </span>
        </span>
      </div>
    );
  }
}

export default Team;
