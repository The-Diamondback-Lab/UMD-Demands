import { Component, Fragment } from "react";
import { fetchAllData } from '../utils/data-fetcher';

import Biographies from './components/Biographies';
import LandingPage from './components/LandingPage';
import DemandList from './components/DemandList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);

    this.state = {
      finishedLoading: false
    }
  }

  onSuccess(data) {
    this.setState({
      finishedLoading: true,
      data
    });
  }

  onError(error) {
    this.setState({
      finishedLoading: true,
      error
    });
  }

  componentDidMount() {
    fetchAllData().then(this.onSuccess).catch(this.onError);
  }

  render() {
    if (!this.state.finishedLoading) return null; // TODO return loading screen instead
    else if (this.state.error) {
      // TODO return a better error page
      console.error(this.state.error);
      return (<p>Something went wrong when fetching data</p>);
    }

    return (
      <Fragment>
        <LandingPage />
        <div id="main-container">
          <Biographies />
          <DemandList
            header="Undergraduate Demands"
            resourceUrl="/data/undergraduate-demands.json" />
          <DemandList
            header="Graduate Demands"
            resourceUrl="/data/graduate-demands.json"
            theme="white" />
        </div>
      </Fragment>
    );
  }
}
