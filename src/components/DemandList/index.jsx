/* eslint-disable jsx-a11y/alt-text */

import { Accordion, Card } from 'react-bootstrap';
import data from '../../data/undergraduate-demands.json';

import './styles.css';

import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export default function DemandList() {
  let elems = data.map((o, i) => (
    <div key={`UNDERGRADUATE-DEMAND-${i+1}`} className="demand-list item">
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={`${i+1}`} className="title">
            <div style={{ flex: 0.5 }}><img src={`/assets/numbericons/${i+1}.png`} style={{ width: '75%' }} /></div>
            <div style={{ flex: .1 }}></div>
            <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>{o.header}</div>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey={`${i+1}`}>
            <Card.Body dangerouslySetInnerHTML={{__html: o.body || lorem.generateSentences(10)}}>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  ));

  return elems;
}
