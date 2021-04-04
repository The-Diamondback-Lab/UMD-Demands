/* eslint-disable jsx-a11y/alt-text */

import axios from 'axios';
import { Accordion, Card } from 'react-bootstrap';

import './styles.css';

import { LoremIpsum } from 'lorem-ipsum';
import { Component } from 'react';

const lorem = new LoremIpsum();

export default class DemandList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finishedLoading: false
    }

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSuccess(response) {
    this.setState({
      finishedLoading: true,
      data: response.data
    });
  }

  onError(error) {
    this.setState({
      finishedLoading: true,
      error
    });
  }

  componentDidMount() {
    axios(this.props.resourceUrl).then(this.onSuccess).catch(this.onError);
  }

  render() {
    if (!this.state.finishedLoading) return null;
    else if (this.state.error) {
      console.error(this.state.error);
      return "Error fetching data";
    }

    let listClasses = ['demand-list'];
    let imgPrefix = '';
    if (this.props.theme === 'white') {
      listClasses.push('white');
      imgPrefix = 'alt';
    }
    let listClassNames = listClasses.join(' ');

    let elems = this.state.data.map((o, i) => (
      <div key={`UNDERGRADUATE-DEMAND-${i+1}`} className="item">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${i+1}`} className="title">
              <div style={{ flex: 0.5 }}><img src={`/assets/numbericons/${imgPrefix}${i+1}.png`} style={{ width: '75%' }} /></div>
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

    return (<div className={listClassNames}>{elems}</div>);
  }
}
