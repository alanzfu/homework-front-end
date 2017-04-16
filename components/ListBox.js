const Component = require('react').Component;

class ListBox extends Component {
  componentDidMount() {
      console.log("Mounted");
  }

  render() {
    return (
      <div className='listBox'>'ListBox'</div>
    );
  }
}


module.exports = ListBox;
