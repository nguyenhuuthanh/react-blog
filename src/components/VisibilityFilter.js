import React from "react";
import cx from "classnames";

class VisibilityFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleFilter = () => {
    // dispatches actions to add todo
    // sets state back to empty string
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

export default VisibilityFilter;