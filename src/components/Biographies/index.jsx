import BiographyElement from './BiographyElement';

import './styles.css';

export default function Biographies(props) {
  let elems = props.data.map((person, i) => {
    return <BiographyElement
      key={`organizer-biography-${i}`}
      name={person.name}
      picturePath={person.picturePath}
      body={person.body}
      gallery={person.gallery}
    ></BiographyElement>
  });

  return (
    <div id="bio-container">
      <h1>Meet the Organizers</h1>
      <div id="bio-elems">{elems}</div>
    </div>
  );
}
