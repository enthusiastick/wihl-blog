import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Essays from '../components/Essays';
import { fetchEssays } from '../actions/essays';

class EssaysContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEssays();
  }

  render() {
    let {
      essaysIds, essaysById, essaysIsFetching, params
    } = this.props;

    if (Object.keys(essaysById).length == 0) {
      return <Loading />;
    }

    return (
      <Essays essaysById={essaysById} />
    );
  }
};

let mapStateToProps = ({ essays }) => {
  return {
    essaysIsFetching: essays.isFetching,
    essaysById: essays.byId,
  };
};

export default connect(mapStateToProps, { fetchEssays })(EssaysContainer);
