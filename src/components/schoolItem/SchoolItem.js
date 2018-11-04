import React, {Component} from 'react';
import './styles/index.css'

class SchoolItem extends Component {

    constructor(){
        super();
        this.clickItem = this.clickItem.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
        this.copy = this.copy.bind(this)
    }

    clickItem(e){
        e.preventDefault();
        console.log('Click: ', this.props.schoolInfo)
    }

    delete(e){
        e.stopPropagation();
        this.props.delete(this.props.schoolInfo)
    }

    edit(e){
        e.stopPropagation();
        this.props.edit(this.props.schoolInfo)
    }

    copy(e){
        e.stopPropagation();
        this.props.copy(this.props.schoolInfo)
    }

    render() {
        return (
            <div className='itemWraper' onClick={this.clickItem}>
                <div className='itemName'>{this.props.schoolInfo.name}</div>
                <div>
                    <div title='Редактировать' className='itemIcon pi pi-pencil' onClick={this.edit}></div>
                    <div title='Удалить' className='itemIcon pi pi-trash' onClick={this.delete}></div>
                    <div title='Копировать' className='itemIcon pi pi-copy' onClick={this.copy}></div>
                </div>
            </div>
        );
    }
}

export default SchoolItem;