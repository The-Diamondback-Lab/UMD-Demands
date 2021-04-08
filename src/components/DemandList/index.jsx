/* eslint-disable jsx-a11y/alt-text */

import { Accordion, Card } from 'react-bootstrap';
import { Component, Fragment } from 'react';
import InnerHTML from 'dangerously-set-html-content';

import './styles.css';

export default class DemandList extends Component {
  render() {
    let listClasses = ['demand-list'];
    if (this.props.theme === 'white') {
      listClasses.push('white');
    }
    let listClassNames = listClasses.join(' ');

    let elems = this.props.data.map((o, demandInd) => {
      let illustration = <div className="illustration-container">
        <img src={o.picturePath} />
        <p className="caption">{o.caption}</p>
      </div>;

      let bodyElem = <InnerHTML html={o.body} />

      return (
        <div key={`demand-list-item-${demandInd+1}`} className="item">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={`${demandInd+1}`} className="title">
                <div className="icon">{demandInd+1}</div>
                <div className="header">{o.header}</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey={`${demandInd+1}`}>
                <Card.Body>
                  {illustration}
                  {bodyElem}
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
