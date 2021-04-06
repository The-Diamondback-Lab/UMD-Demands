import BiographyElement from './BiographyElement';

import './styles.css';

export default function Biographies(props) {
  const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

  let elems = props.data.map((person, i) => {
    let resolvedPicturePath = ASSETS_URL + person.picturePath;
    let resolveGallery = person.gallery
      ? person.gallery.map(x => ASSETS_URL + x)
      : null;

    return <BiographyElement
      key={`organizer-biography-${i}`}
      name={person.name}
      picturePath={resolvedPicturePath}
      body={person.body}
      gallery={resolveGallery}
    ></BiographyElement>
  });

  return (
    <div id="bio-container">
      <h1>Meet the Organizers</h1>
      <div id="bio-elems">{elems}</div>
    </div>
  );
}
