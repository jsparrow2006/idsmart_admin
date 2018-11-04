import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Test from '../../components/test/Test'
import './style/index.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LeftBar from '../../components/leftBar/LeftBar';


class Main extends Component {

    componentDidMount() {
        window.localStorage.setItem('qqq', 'Hello');
    }


    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col md={3}>
                        <LeftBar schools={this.props.main.schools}/>
                    </Col>
                    <Col md={9}>
                        <Test/>
                        {window.localStorage.getItem('qqq')}
                    </Col>
                </Row>
            </Grid>
        );
    }
}



function mapStateToProps(state) {
    return {
        main: state.main
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

