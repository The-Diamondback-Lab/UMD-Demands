// import logoPath from '../assets/dbk-logo.png'

import './styles.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="credits"><p>Credits</p></div>
      {props.credits.map((creditLine, idx) => <p key={`credit-${idx}`}>{creditLine}</p>)}
      <a href="https://dbknews.com" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo" src={props.logoPath} alt="The Diamondback Logo"></img>
      </a>
    </footer>
  );
}
