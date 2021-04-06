import { Component, Fragment } from "react";
import { fetchAllData } from '../utils/data-fetcher';

import Biographies from './Biographies';
import LandingPage from './LandingPage';
import DemandList from './DemandList';
import Footer from './Footer';
import LoadingPage from './LoadingPage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);

    this.state = {
      loaded: false,
      startFadeOut: false,
    }
  }

  onSuccess(data) {
    // After main component has finished all async requests, wait 500ms
    // and then change "loaded" and "startFadeOut" to true.
    // This will cause the spinner to start fading out.
    // This setState will call another timeout (750ms later)
    // to change the loaded to true and fade out to false,
    // indicating to the spinner that it should not display

    setTimeout(() => {
      // Indicating spinner to start fading out
      this.setState({
        loaded: true,
        startFadeOut: true,
        data
      }, () => {
        // Eventually tell spinner to never display
        setTimeout(() => {
          this.setState({
            loaded: true,
            startFadeOut: false,
            data
          });
        }, 750)
      })
    }, 500);
  }

  onError(error) {
    this.setState({
      error
    });
  }

  componentDidMount() {
    fetchAllData().then(this.onSuccess).catch(this.onError);
  }

  render() {
    const { loaded, startFadeOut, error, data } = this.state;

    if (error) {
      // TODO return a better error page
      console.error(error);
      return (<p>Something went wrong when fetching data</p>);
    }

    let loadingElement = <LoadingPage
      loaded={loaded}
      startFadeOut={startFadeOut} />;

    if (!loaded) return loadingElement;

    return (
      <Fragment>
        {loadingElement}
        <LandingPage />
        <div id="main-container">
          <div
            className="intro"
            dangerouslySetInnerHTML={{__html: data.intro}} />
          <Biographies data={data.biographies} />
          <DemandList
            data={data.undergraduateDemands}
            header="25 Demands" />
          <DemandList
            data={data.graduateDemands}
            header="UMD BLK Grads For BLK Lives Demands"
            theme="white" />
        </div>
        <Footer credits={data.credits} />
      </Fragment>
    );
  }
}
