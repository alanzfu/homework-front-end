const Component = require('react').Component;

class InputBox extends Component {
  componentDidMount() {
      console.log("Mounted");
  }

  render() {
    return (
      <div className='inputBox'>'inputBox'</div>
    );
  }
};

module.exports = InputBox;
