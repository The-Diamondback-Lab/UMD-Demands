/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import icon1 from '../../Assets/numbericons/alt1.png';
import icon2 from '../../Assets/numbericons/alt2.png';
import icon3 from '../../Assets/numbericons/alt3.png';
import icon4 from '../../Assets/numbericons/alt4.png';
import icon5 from '../../Assets/numbericons/alt5.png';
import icon6 from '../../Assets/numbericons/alt6.png';
import icon7 from '../../Assets/numbericons/alt7.png';
import icon8 from '../../Assets/numbericons/alt8.png';

const headerStyle = {
  cursor: 'pointer',
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'IBM Plex Sans'
};

let someDivStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  paddingLeft: '10%',
  paddingRight: '10%'
};

export class UndergradIssues extends Component {
  render() {
    return (
      <>
        <h1 style={{ display: 'flex' , width: '100%' , paddingLeft: '10%', paddingRight: '10%' , fontFamily: 'IBM Plex Sans' }}>GRADUATE LEVEL DEMANDS</h1>
        <div style={someDivStyle}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" style={headerStyle}>
                <div style={{ flex: 0.5 }}><img src={icon1} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Honoring Black Life</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  The University of Maryland, College Park will establish a memorial for 2nd Lieutenant Richard Collins III at the bus stop where his murder took place. This is in order to honor Lieutenant Collins’s life and memory.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={someDivStyle}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" style={headerStyle}>
                <div style={{ flex: 0.5 }}><img src={icon2} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Divestment and Transparency</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  The University of Maryland, College Park will divest from the Maryland Correctional Enterprisesand other forms of prison labor. We recognize, however, that this process will require further action than the University’s calls to end their contact; therefore, we are calling for Ross Stern, Executive Director of the UMD Government Relations, to actively lobby for state legislation to end this contract, in order to uphold the University’s “high ethical standards.”
                  &nbsp;
                  The University of Maryland, College Park will not renew its contract with ICE when it expires in 2022 and officially commit to becoming a sanctuary campus, increasing greater protections for undocumented and international students.
                  &nbsp;
                  The University of Maryland, College Park will divest from policing. This includes ending the “concurrent” contracts with the Prince George’s County Police Department and disbanding the University’s own police department.
                  &nbsp;
                  The University of Maryland, College Park will release a university-wide audit on the University’sfinancial, intellectual, and spatial relationships to the institutions of violence  outlined in this letter (policing, ICE, military, prisons, etc.). (Note: This is not an exhaustive list due to the lack oftransparency; therefore, we are calling for this information to be made publicly available and accessible.) Specifically, the University will be transparent with regards to what falls under “counterrorism” (besides the SMART program) and the allocation of $625,000 toward that effort.
                  &nbsp;
                  The University of Maryland, College Park will fund holistic, care-filled and community led alternatives to the current system of policing in order to ensure the safety of all members of our community. This includes hiring and training staff people in mental health emergency protocols, de-escalation tactics, conflict mediation, non-violent communication, and other transformative justice strategies for addressing harm that may emerge in our community.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={someDivStyle}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3" style={headerStyle}>
                <div style={{ flex: 0.5 }}><img src={icon3} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Admission and Recruitment</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  The University of Maryland, College Park will increase Black graduate enrollment by 8%, bringing the total to 16% and effectively doubling its current enrollment of 8%, by 2022.16 This includes redirecting funding to recruitment efforts for Black students.
                  <div> &nbsp;</div>
                  The University of Maryland, College Park will provide fee waivers to all Black prospective students who wish to apply for graduate school by 2021.
                  <div> &nbsp;</div>
                  The University of Maryland, College Park will not require the GRE exam for graduate admission.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={someDivStyle}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4" style={headerStyle}>
                <div style={{ flex: 0.5 }}><img src={icon4} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Funding</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  The University of Maryland, College Park will issue and increase the number of full assistantships for all current and incoming Black graduate students by 2021. As it currently stands, 4.9% of Black graduate students hold assistantships, approximately half the number of those enrolled.
                  &nbsp;
                  The University of Maryland, College Park will provide full assistantships to all currently unfunded Black graduate students by 2021.
                  &nbsp;
                  The University of Maryland, College Park will offer each current Black graduate student an additional year of funding in recognition of anti-blackness as an impediment to research and time-to-degree.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={someDivStyle}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5" style={headerStyle}>
                <div style={{ flex: 0.5 }}><img src={icon5} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Teaching and Research</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  The University of Maryland, College Park will never allow any graduate student to teach more than one class (including discussion sections and multiple sections of one course) per semester and one of their funded years must be a fellowship year in order for them to pursue their research and scholarship with relative safety and comfort.
                  &nbsp;
                  The University of Maryland, College Park will eradicate the use of teaching evaluations, as they are often used as vehicles for expressions of bigotry, specifically due to anti-blackness and patriarchy.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={someDivStyle}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6" style={headerStyle}>
                <div style={{ flex: 0.5 }}><img src={icon6} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Faculty Retention and Hiring</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  The University of Maryland, College Park will make the retention of current Black faculty a priority, ensuring their research is supported with funding for conferences, timely sabbaticals to finish manuscripts, and a reasonable teaching load to begin by Fall 2021.
                  <div> &nbsp;</div>
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
