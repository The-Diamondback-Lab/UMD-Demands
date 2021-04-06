import { Component, Fragment } from "react";
import { fetchAllData } from '../utils/data-fetcher';

import Biographies from './Biographies';
import LandingPage from './LandingPage';
import DemandList from './DemandList';

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
    const { finishedLoading, error, data } = this.state;
    if (!finishedLoading) return null; // TODO return loading screen instead
    else if (error) {
      // TODO return a better error page
      console.error(error);
      return (<p>Something went wrong when fetching data</p>);
    }

    return (
      <Fragment>
        <LandingPage />
        <div id="main-container">
          <Biographies data={data.biographies}/>
          <DemandList
            data={data.undergraduateDemands}
            header="Undergraduate Demands"
            resourceUrl="/data/undergraduate-demands.json" />
          <DemandList
            data={data.graduateDemands}
            header="Graduate Demands"
            resourceUrl="/data/graduate-demands.json"
            theme="white" />
        </div>
      </Fragment>
    );
  }
}
