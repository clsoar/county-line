'use strict';

const e = React.createElement;

class FaqContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  render() {
    if (this.state.opened) {
      return 'h2', 'Test Heading 1', 'p', 'test question 1'
    }


    return e(
      'h2',
      { onClick: () => this.setState({ opened: true }) },
      'Test Heading 1'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
const domContainer = document.querySelector('.faq-container');
ReactDOM.render(e(FaqContainer), domContainer);
