import redLogoImg from '../../Assets/red-logo.jpg';
import './styles.css';

export default function LoadingPage(props) {
  const dontShow = props.loaded && !props.startFadeOut
  const wrapperClasses = ['spinner-wrapper']

  if (props.startFadeOut) {
    wrapperClasses.push('animated')
    wrapperClasses.push('fadeOut')
  }

  return (
    <div style={dontShow ? { display: 'none' } : {}}>
      <div className={wrapperClasses.join(' ')}>
        <div className="spinner-container">
          <center>
            <img className="spinner-image"
              src={redLogoImg}
              alt="A loading animation"
            />
            <div className="preload"> <span></span> <span></span> <span></span></div>
          </center>
        </div>
      </div>
    </div>
  )
}
