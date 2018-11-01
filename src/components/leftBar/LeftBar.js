import React, {Component} from 'react';
import './styles/index.css'
import {ScrollPanel} from 'primereact/scrollpanel';
import SchoolItem from '../schoolItem/SchoolItem'

const sc = {name: 'Гимназия 7', ip: '127.0.0.1', user: 'ids', password: 'kontroller'}

class LeftBar extends Component {

    constructor(){
        super();

    }


    render() {
        return (
            <div>
                <ScrollPanel style={{width: '100%', height: '200px'}} className='customScrollBar'>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                    <SchoolItem schoolInfo={sc}/>
                </ScrollPanel>
            </div>
        );
    }
}

export default LeftBar;