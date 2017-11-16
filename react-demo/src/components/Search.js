import React, {Component} from 'react';

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      query: ""
    }

    this.filterNames = this.filterNames.bind(this);
  }

  filterNames (event) {
    const {currentTarget} = event;

    this.setState({
      query: currentTarget.value
    })
  }

  render() {
    const {
      names = []
    } = this.props;

    return (
      <div className="Search">
        <input
          type="text"
          onChange={this.filterNames}
          value={this.state.query}
        />
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
        {
          names
          .filter(name => name.toLowerCase().includes(this.state.query.toLowerCase()))
          .map((name, index) => (
            <div key={index}>{name}</div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default Search;
