import * as React from 'react';
import styled from 'styled-components';

import Background from '../background';

interface Props {
  className?: string;
}

class Home extends React.Component<Props, {}> {
  public render() {
    return (
      <div className={this.props.className}>
        <Background/>
        Home
      </div>
    );
  }
}

export default styled(Home)`
  color: #444;
`