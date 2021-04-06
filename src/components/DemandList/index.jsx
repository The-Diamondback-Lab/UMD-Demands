/* eslint-disable jsx-a11y/alt-text */

import { Accordion, Card } from 'react-bootstrap';
import { LoremIpsum } from 'lorem-ipsum';
import { Component, Fragment } from 'react';

import './styles.css';

const lorem = new LoremIpsum();

export default class DemandList extends Component {
  render() {
    const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

    let listClasses = ['demand-list'];
    if (this.props.theme === 'white') {
      listClasses.push('white');
    }
    let listClassNames = listClasses.join(' ');

    let elems = this.props.data.map((o, i) => {
      let imgHtml = `<img src="${ASSETS_URL + o.picturePath}"></img>`;
      let bodyHtml = [imgHtml, o.body || lorem.generateSentences(10)].join('');

      return (
        <div key={`demand-list-item-${i+1}`} className="item">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={`${i+1}`} className="title">
                <div className="icon">{i+1}</div>
                <div className="header">{o.header}</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey={`${i+1}`}>
                <Card.Body dangerouslySetInnerHTML={{__html: bodyHtml}}>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      );
    });

    return (
      <Fragment>
        <h1>{this.props.header}</h1>
        <div className={listClassNames}>{elems}</div>
      </Fragment>
    );
  }
}
