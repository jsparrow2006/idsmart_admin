import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Button} from 'primereact/button';
import './styles/index.css'
const remote = window.require('electron').remote;

class Menu extends Component {

    constructor(){
        super()
        this.state = {
            visibleSidebar: true
        }
    }

    closeWindow(){
        remote.getCurrentWindow().close()
    }

    maxWindow(){
        remote.getCurrentWindow().maximize()
    }

    minWindow(){
        remote.getCurrentWindow().minimize()
    }

    render() {
        return (
                <Row className='mainMenu'>
                    <Col md={3} className='logo'>
                        IDSMART
                    </Col>
                    <Col md={7}>
                    </Col>
                    <Col md={2} className='systemButton'>
                        <Button icon="pi pi-cog" className="p-button-rounded p-button-success settings" />
                        <Button icon="pi pi-chevron-down" className="p-button-rounded p-button-success" onClick={this.minWindow} />
                        <Button icon="pi pi-chevron-up" className="p-button-rounded p-button-success" onClick={this.maxWindow} />
                        <Button icon="pi pi-power-off" className="p-button-rounded p-button-success" onClick={this.closeWindow} />
                    </Col>
                </Row>
        );
    }
}

export default Menu;