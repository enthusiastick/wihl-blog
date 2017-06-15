import React, { Component } from 'react';
import { connect } from 'react-redux';
import Essay from '../components/Essay';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
import { fetchEssay } from '../actions/essays';

class EssayContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { slug } = this.props.params;
    this.props.fetchEssay(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      let { slug } = nextProps.params;
      this.props.fetchEssay(slug);
      window.scrollTo(0, 0);
    }
  }

  render() {
    let { essaysById, essaysBySlug, essaysIsFetching, essaysNotFound, params } = this.props;
    let { slug } = params;

    let essay = essaysBySlug[slug];

    if (!essay) {
      if (essaysNotFound) {
        return <NotFound />;
      } else {
        return <Loading />;
      }
    }

    return (
      <Essay essay={essay} params={params} />
    );
  }
};

let mapStateToProps = ({ essays, routing }) => {
  return {
    essaysIsFetching: essays.isFetching,
    essaysById: essays.byId,
    essaysBySlug: essays.bySlug,
    essaysNotFound: essays.notFound
  }
};

export default connect(mapStateToProps, { fetchEssay }) (EssayContainer);
