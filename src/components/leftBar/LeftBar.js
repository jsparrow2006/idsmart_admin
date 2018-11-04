import React, {Component} from 'react';
import './styles/index.css'
import {ScrollPanel} from 'primereact/scrollpanel';
import SchoolItem from '../schoolItem/SchoolItem'
import Dexie from 'dexie';
import ModalWindow from '../modalWindow/ModalWindow'


class LeftBar extends Component {


    constructor(){
        super();
        this.state = {
            schools : [],
            dialog: {
                visible: false,
                type: '',
                data: {name: '', ip: '', user: '', password: ''}
            }
        }
        navigator.storage.persist();
        this.db = new Dexie("IdSdB")
        this.db.version(1).stores({
            schools: '++id,name,ip,user,password,defSettings'
        });
        // this.db.schools.put({name: 'Гимназия 7', ip: '127.0.0.1', user: 'ids', password: 'kontroller'})
        // this.db.schools.put({name: 'Гимназия 8', ip: '127.0.0.1', user: 'ids', password: 'kontroller'})
        // this.db.schools.put({name: 'Гимназия 9', ip: '127.0.0.1', user: 'ids', password: 'kontroller'})
        this.getItemSchool();
        this.getItemSchool = this.getItemSchool.bind(this)
        this.delItem = this.delItem.bind(this)
    }

    getItemSchool(){
        return this.db.schools.toArray().then((sc) => {
            console.log('res: ', sc)
            this.setState({schools: sc})
        })
    }

    delItem(el){
        console.log('del: ', el);
        this.setState({dialog : {visible : true, type: 'del', data: el}})
        // this.db.schools.delete(el.id).then(this.getItemSchool());
    }

    render() {
        return (
            <div>
                <ScrollPanel style={{width: '100%', height: '400px'}} className='customScrollBar'>
                    {this.state.schools.map((sc) => {
                        return <SchoolItem key={sc.id}
                                           schoolInfo={sc}
                                           delete={el => this.setState({dialog : {visible : true, type: 'del', data: el}})}
                                           edit={el => this.setState({dialog : {visible : true, type: 'edit', data: el}})}
                                           copy={(el) => {
                                               el.id = undefined;
                                               this.setState({dialog : {visible : true, type: 'new', data: el}})}
                                           }/>
                    })}
                </ScrollPanel>
                <ModalWindow modalInfo={this.state.dialog}
                             editItem={it => {this.db.schools.put(it)
                                 .then(() => {
                                     this.getItemSchool();
                                     this.setState({dialog : {visible : false}})
                                 })}}
                             delItem={it => {
                                 this.db.schools.delete(it)
                                     .then(() => {
                                         this.getItemSchool();
                                         this.setState({dialog : {visible : false}})
                                     })
                             }}
                             addItem={it => {
                                 this.db.schools.add(it)
                                     .then(() => {
                                         this.getItemSchool();
                                         this.setState({dialog : {visible : false}})
                                     })
                             }}/>
            </div>
        );
    }
}

export default LeftBar;