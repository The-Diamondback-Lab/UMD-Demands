import BiographyElement from './BiographyElement';

import "bootstrap/dist/css/bootstrap.min.css";
import biographyData from '../../data/biographies.json';
import './styles.css';

export default function Biographies() {
  let elems = biographyData.map((person, i) => {
    return <BiographyElement
      key={`organizer-biography-${i}`}
      {...person}
    ></BiographyElement>
  });

  return (
    <div id="bio-container">
      <h3>Meet the Organizers</h3>
      <div id="bio-elems">{elems}</div>
    </div>
  );
}
