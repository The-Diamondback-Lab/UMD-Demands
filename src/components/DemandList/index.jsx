/* eslint-disable jsx-a11y/alt-text */

import axios from 'axios';
import { Accordion, Card } from 'react-bootstrap';

import './styles.css';

import { LoremIpsum } from 'lorem-ipsum';
import { Component } from 'react';
import { Fragment } from 'react';

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
    if (this.props.theme === 'white') {
      listClasses.push('white');
    }
    let listClassNames = listClasses.join(' ');

    let elems = this.state.data.map((o, i) => (
      <div key={`UNDERGRADUATE-DEMAND-${i+1}`} className="item">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${i+1}`} className="title">
              <div className="icon">{i+1}</div>
              <div className="header">{o.header}</div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={`${i+1}`}>
              <Card.Body dangerouslySetInnerHTML={{__html: o.body || lorem.generateSentences(10)}}>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    ));

    return (
      <Fragment>
        <h1>{this.props.header}</h1>
        <div className={listClassNames}>{elems}</div>
      </Fragment>
    );
  }
}
