import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    }
  }

  render() {
    let { params } = this.props;

    return (
      <Essay
        essay={essay}
        essaySlug={params.slug}
      />
    );
  }
};

let mapStateToProps = ({ essays }) => {
  return {
    isFetchingEssay: essays.isFetchingEssay
  };
};

export default connect(mapStateToProps, { fetchEssay })(EssayContainer);
