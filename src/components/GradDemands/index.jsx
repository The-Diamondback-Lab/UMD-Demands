/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import icon1 from '../../Assets/numbericons/1.png';
import icon2 from '../../Assets/numbericons/2.png';
import icon3 from '../../Assets/numbericons/3.png';
import icon4 from '../../Assets/numbericons/4.png';
import icon5 from '../../Assets/numbericons/5.png';
import icon6 from '../../Assets/numbericons/6.png';
import icon7 from '../../Assets/numbericons/7.png';
import icon8 from '../../Assets/numbericons/8.png';
import icon9 from '../../Assets/numbericons/9.png';
import icon10 from '../../Assets/numbericons/10.png';
import icon11 from '../../Assets/numbericons/11.png';
import icon12 from '../../Assets/numbericons/12.png';
import icon13 from '../../Assets/numbericons/13.png';
import icon14 from '../../Assets/numbericons/14.png';
import icon15 from '../../Assets/numbericons/15.png';
import icon16 from '../../Assets/numbericons/16.png';
import icon17 from '../../Assets/numbericons/17.png';
import icon18 from '../../Assets/numbericons/18.png';
import icon19 from '../../Assets/numbericons/19.png';
import icon20 from '../../Assets/numbericons/20.png';
import icon21 from '../../Assets/numbericons/21.png';
import icon22 from '../../Assets/numbericons/22.png';
import icon23 from '../../Assets/numbericons/23.png';
import icon24 from '../../Assets/numbericons/24.png';
import icon25 from '../../Assets/numbericons/25.png';

let accordionPadding = '10%';
let iconWidth = '75%';
const headerStyle = { cursor: 'pointer', backgroundColor: '#E21833', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , fontFamily: 'IBM Plex Sans' }

export class GradIssues extends Component {
  render() {
    return (
      <>
        <h1 style={{ display: 'flex', width: '100%', paddingLeft: '10%', paddingRight: '10%', fontFamily: 'IBM Plex Sans' }}>UNDERGRADUATE LEVEL DEMANDS</h1>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon1} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Increase the number of Black faculty, staff, teaching assistants, administrators, and advisors at the university.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  This is second tab body.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon2} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Making racial bias training mandatory for all students, faculty, staff, administrators, health professionals, and student organizations. Training should include history of racial bias, impacts of racial trauma, and critical examinations how racism impacts one's life and their counterparts.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="2">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon3} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Reevaluate and reduce the excessive funding to UMPD publicly. Redistribute these funds and resources to Black organizations on campus, Nyumburu Cultural Center, and the African American studies department.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="3">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon4} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Immediate response to hate speech or actions from the university including a consequence (e.g: mark on the transcript or potential suspension)</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="4">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon5} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Increase the number of BIPOC counselors represented within the Counseling Center and Health Center, especially those with experiences with discrimination.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="5">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon6} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Prioritizing minority enrollment by doubling the current enrollment of Black students from Prince George's County and DC by 2025.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="6">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon7} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Create a Black career center (in Nyumburu or a new center) to better expose Black students to scholarships, conferences, and internships that value Black people.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="7">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon8} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Memorialize 1st Lt. Richard Collins III with a physical memorial in a visible location where all of the UMD community can participate in his remembrance.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="8">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon9} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Holding the administration accountable and ensuring transparency in following through on these demands along with the initiatives President Pines is taking in order to create equity for our Black community</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="9">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="10" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon10} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Create an oversight committee that evaluates and sanctions faculty members who have allegedly taken part in any discriminatory behavior towards undergraduate and graduate students.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="10">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="11" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon11} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Creating more spaces on campus for Black students (such as the Black Engineers Society Lounge in the Engineering Building) so that they are not only relegated to Nyumburu by default (especially for LGBT Black students). These spaces will be non-discriminatory.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="11">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="12" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon12} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Create partnerships and scholarships with Prince George�s County schools to increase the number of Prince George�s County students accepted and admitted to UMD, especially Black students.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="12">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="13" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon13} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>End the militarization of UMPD and sanctioning safe residential halls and environments by removing armed police & decreasing their presence.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="13">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="14" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon14} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Continuous mandatory training on implicit bias in policing and how to reduce its negative impacts on the UMD community.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="14">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="15" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon15} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>
                  Divest from the Maryland Correctional Enterprises, as well as businesses and companies invested in it, and the prison industrial complex</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="15">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="16" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon16} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Immediate turnaround for the removal of hate speech printed or written on campus property, sidewalks, and boards.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="16">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="17" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon17} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Creating a racial incident hotline through the Counseling Center to cater to the mental health of BIPOC students.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="17">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="18" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon18} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Establish a collaboration between Nyumburu and the Division of Student Affairs to streamline all resources and counseling services that exist to support Black students.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="18">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="19" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon19} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Improving and restoring relations between UMD and Prince George's County through directly partnering with local community leaders/activists and community organizations.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="19">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="20" style={{ cursor: 'pointer', backgroundColor: '#E21833', color: 'white', borderColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 0.5 }}><img src={icon20} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Include teaching about the contributions that Prince George�s County residents have made to UMD, along with the Black history of this institution (ties to slavery, discrimination against Black people to admittance into UMD until the 1936 Murray v Maryland Decision).</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="20">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="21" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon21} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>A land recognition that UMD is built on land stolen from the Piscataway people.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="21">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="22" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon22} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Make continued reference to 1st Lt. Richard Collins' legacy, accomplishments, and the Richard W Collins III Leadership with Honor Scholarship on campus tours and orientation, and in general education courses.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="22">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="23" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon23} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Strengthening the Bias Incident Support Services office with at least 3 more employees to support in responding, educating, and reporting to the campus about hate-bias incidents.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="23">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="24" style={ headerStyle }>
                <div style={{ flex: 0.5 }}><img src={icon24} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>Implementation of evaluations pertaining to diversity and inclusivity for each course to be completed by students every semester. This is in regards to specific colleges and the university as a whole and the results of these evaluations should be published for transparency.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="24">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="25" style={headerStyle}>
                <div style={{ flex: 0.5 }}><img src={icon25} style={{ width: '75%' }} /></div>
                <div style={{ flex: .1 }}></div>
                <div style={{ flex: 8, alignSelf: 'center', fontSize: 20 }}>TerrapinSTRONG (or any other general orientation process that UMD goes with) needs to incorporate the provision of accurate resources to all students on bias incident reporting, counseling services, and other resources for BIPOC students.</div>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="25">
                <Card.Body>This is second tab body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </>
    );
  }
}

export default GradIssues;
