import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../Artis.css';

export default class Music extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well><h1>Content coming soon.</h1></Well>
          </Col>
          <Col xsHidden md={4}></Col>          
        </Grid>
      </div>
    );
  }
}