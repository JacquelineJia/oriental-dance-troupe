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
              <span className={style.column}>
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
              <div className={`${style.image} ${style.imageTaoDing}`}/>
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
            <span className={style.column}>
              <span className={style.column}>
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
              <div className={`${style.image} ${style.imageJunweiBao}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.artisticDirector.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.1.name"
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
              <div className={`${style.image} ${style.imageDianaDing}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.1.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.2.name"
                    defaultMessage="Ping Feng"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.2"
                    defaultMessage="Guest Ballet instructor"
                  />
                </span>
              </span>
              <div className={`${style.image}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.2.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
        </span>
      </div>
    );
  }
}

export default Team;
