import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import icon1 from './Assets/numbericons/1.png';
import icon2 from './Assets/numbericons/2.png';
import icon3 from './Assets/numbericons/3.png';
import icon4 from './Assets/numbericons/4.png';
import icon5 from './Assets/numbericons/5.png';
import icon6 from './Assets/numbericons/6.png';
import icon7 from './Assets/numbericons/7.png';
import icon8 from './Assets/numbericons/8.png';

export class UndergradIssues extends Component {
  render() {
    return (
      <>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon1} style={{ width: '100%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Increase the number of Black faculty, staff, teaching assistants, administrators, and advisors at the university.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  This is second tab body.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Making racial bias training mandatory for all students, faculty, staff, administrators, health professionals, and student organizations. Training should include history of racial bias, impacts of racial trauma, and critical examinations how racism impacts one's life and their counterparts.</div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 0.5 }}><img src={icon2} style={{ width: '100%' }} /></div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black',  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon3} style={{ width: '100%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Reevaluate and reduce the excessive funding to UMPD publicly. Redistribute these funds and resources to Black organizations on campus, Nyumburu Cultural Center, and the African American studies department.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="2">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black',  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Immediate response to hate speech or actions from the university including a consequence (e.g: mark on the transcript or potential suspension)</div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 0.5 }}><img src={icon4} style={{ width: '100%' }} /></div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="3">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black',  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon5} style={{ width: '100%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Increase the number of BIPOC counselors represented within the Counseling Center and Health Center, especially those with experiences with discrimination.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="4">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black',  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Prioritizing minority enrollment by doubling the current enrollment of Black students from Prince George's County and DC by 2025.</div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 0.5 }}><img src={icon6} style={{ width: '100%' }} /></div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="5">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black',  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon7} style={{ width: '100%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Create a Black career center (in Nyumburu or a new center) to better expose Black students to scholarships, conferences, and internships that value Black people.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="6">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7" style={{ borderColor: '#E21833', borderWidth: '10', color: 'black',  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Faculty Retention and Hiring</div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 0.5 }}><img src={icon8} style={{ width: '100%' }} /></div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  The University of Maryland, College Park will make the retention of current Black faculty a priority, ensuring their research is supported with funding for conferences, timely sabbaticals to finish manuscripts, and a reasonable teaching load to begin by Fall 2021.
                  The University of Maryland, College Park will double the number of Black faculty, both tenured and on the tenure track, by 2024 and their hires will encompass the demands for faculty listed above.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </>
    );
  }
}

export default UndergradIssues;