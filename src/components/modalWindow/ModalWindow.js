import React, {Component} from 'react';
import './styles/index.css'
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

class ModalWindow extends Component {

    constructor(){
        super();
        this.state = {
            visible: false,
            type: '',
            data: {name: '', ip: '', user: '', password: ''}
        };
        this.modalContentRender = this.modalContentRender.bind(this)
        this.modalFooterRender = this.modalFooterRender.bind(this)
        this.closeWindow = this.closeWindow.bind(this)
        this.newItem = this.newItem.bind(this)
        this.editItem = this.editItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.modalInfo)
    }

    closeWindow(){
        this.setState({visible: false})
    }

    newItem(){
        this.props.addItem(this.state.data);
    }

    editItem(){
        // this.setState({data: Object.assign({}, this.state.data,{id: 999})})
        this.props.editItem(this.state.data);
    }

    deleteItem(){
        this.props.delItem(this.state.data.id);
    }

    modalContentRender(){
        switch (this.state.type) {
            case 'del':
                return (<h3>Удалить {this.state.data.name}?</h3>);
            default:
                return (
                    <div>
                        <span className="p-float-label">
                            <InputText id="in" value={this.state.data.name}
                                       onChange={(e) => this.setState({data: Object.assign({}, this.state.data,{name: e.target.value})})} />
                            <label htmlFor="in">Имя:</label>
                        </span>
                        <span className="p-float-label">
                        <InputText id="in" value={this.state.data.ip}
                                   onChange={(e) => this.setState({data: Object.assign({}, this.state.data,{ip: e.target.value})})} />
                        <label htmlFor="in">Ip адрес:</label>
                        </span>
                        <span className="p-float-label">
                        <InputText id="in" value={this.state.data.user}
                                   onChange={(e) => this.setState({data: Object.assign({}, this.state.data,{user: e.target.value})})} />
                        <label htmlFor="in">User:</label>
                        </span>
                        <span className="p-float-label">
                        <InputText id="in" value={this.state.data.password}
                                   onChange={(e) => this.setState({data: Object.assign({}, this.state.data,{password: e.target.value})})} />
                        <label htmlFor="in">Password:</label>
                        </span>
                    </div>
                );

        }
    }

    modalFooterRender(){
        return (
            <div>
                <Button
                    label={this.state.type == 'del' ? 'Удалить' : 'Сохранить'}
                    icon="pi pi-check"
                    onClick={this.state.type == 'del' ? this.deleteItem : this.state.type == 'edit' ? this.editItem : this.newItem} />
                <Button label="Отмена" icon="pi pi-times" onClick={this.closeWindow} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <Dialog
                    header={this.state.type == 'del' ? 'Удаление...' : this.state.type == 'new' ? 'Дабавление...' : 'Редактирование...'}
                    footer={this.modalFooterRender()}
                    visible={this.state.visible}
                    width="350px"
                    modal={true}
                    onHide={this.closeWindow}>
                    {this.modalContentRender()}
                </Dialog>
            </div>
        );
    }
}

export default ModalWindow;