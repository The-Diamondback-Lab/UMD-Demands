/* eslint-disable jsx-a11y/alt-text */

import { Accordion, Card } from 'react-bootstrap';
import { Component, Fragment, createRef } from 'react';

import './styles.css';

export default class DemandList extends Component {
  constructor(props) {
    super(props);

    /** @type {React.RefObject<HTMLDivElement>[][]} */
    this.flourishRefs = [];
    for (let demandInd = 0; demandInd < props.data.length; demandInd++) {
      let demandObj = props.data[demandInd];
      let { flourishEmbeds } = demandObj;

      if (flourishEmbeds == null || !flourishEmbeds.length) {
        continue;
      }

      this.flourishRefs[demandInd] = [];
      for (let flourishInd = 0; flourishInd < flourishEmbeds.length; flourishInd++) {
        this.flourishRefs[demandInd][flourishInd] = createRef();
      }
    }
  }

  componentDidMount() {
    const { data } = this.props;

    for (let demandInd = 0; demandInd < data.length; demandInd++) {
      let { flourishEmbeds } = data[demandInd];

      if (!flourishEmbeds) continue;

      for (let flourishInd = 0; flourishInd < flourishEmbeds.length; flourishInd++) {
        let ref = this.flourishRefs[demandInd][flourishInd];
        let node = ref.current;

        let scriptElem = document.createElement('script');
        scriptElem.src = 'https://public.flourish.studio/resources/embed.js';
        scriptElem.async = true;
        node.appendChild(scriptElem);
      }
    }
  }

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

      // Creating paragraph elements for body
      let paragraphElems = o.bodyParagraphs.map((x, i) => {
        return <p key={`body-p-${i}`} dangerouslySetInnerHTML={{__html: x}}></p>;
      });
      // Creating flourish embed divs and inserting into paragraphElems
      o.flourishEmbeds.forEach((feObj, flourishInd) => {
        // Flourish embed div
        let flourishElem = <div key={`body-flourish-embed-${flourishInd}`}
          className="flourish-embed flourish-chart"
          data-src={feObj.dataSrc}
          ref={this.flourishRefs[demandInd][flourishInd]} />;
        // Inserting into paragraphElems
        paragraphElems.splice(feObj.index, 0, flourishElem);
      });
      let bodyElem = <div>{paragraphElems}</div>

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
