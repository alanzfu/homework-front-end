const React = require('react');

class InputBox extends React.createClass {
  componentDidMount() {
      console.log("Mounted");
  }

  render() {
    return (
      <div className='InputBox'></div>
    );
  }
};

module.exports = InputBox;
