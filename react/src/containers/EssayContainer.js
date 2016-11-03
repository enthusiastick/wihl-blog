import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Essay from '../components/Essay';
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
    let { essaysById, essaysBySlug, essaysIsFetching, params } = this.props;
    let { slug } = params;

    let essay = essaysBySlug[slug];

    if (!essay) {
      return <Loading />;
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
    essaysBySlug: essays.bySlug
  }
};

export default connect(mapStateToProps, { fetchEssay }) (EssayContainer);
