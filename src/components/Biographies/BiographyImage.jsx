/* eslint-disable jsx-a11y/alt-text */

/**
 * Returns an image element representing a profile picture for a person.
 *
 * The properties are just attributes for the `img` tag.
 *
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} props
 */
export default function BiographyImage(props) {
  return (
    <div className="picture-container">
      <img {...props}></img>
      <p onClick={props.onClick} className="text-overlay">Read More</p>
    </div>
  );
}
