import React from "react";
import cx from "classnames";
import { connect } from 'react-redux';
import { setFilter } from '../actions';


class VisibilityFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleFilter = () => {
    // dispatches actions to add filter keyword
    this.props.setFilter(this.state.input);

  };

  render() {
    return (
      <div className={cx('search-section', 'top-section')}>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-filter" onClick={this.handleFilter}>
          Search Post
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { setFilter }
)(VisibilityFilter);