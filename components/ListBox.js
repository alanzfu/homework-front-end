const React = require('react');

class ListBox extends React.Component {
  componentDidMount() {
      console.log("Mounted");
  }

  render() {
    return (
      <div className='ListBox'></div>
    );
  }
}


module.exports = ListBox;
