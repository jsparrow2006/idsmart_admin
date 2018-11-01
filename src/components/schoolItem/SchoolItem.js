import React, {Component} from 'react';
import './styles/index.css'

class SchoolItem extends Component {

    constructor(){
        super();
        this.clickItem = this.clickItem.bind(this)
    }

    clickItem(){
        console.log('Click: ', this.props.schoolInfo)
    }


    render() {
        return (
            <div className='itemWraper' onClick={this.clickItem}>
                <div className='itemName'>{this.props.schoolInfo.name}</div>
                <div>
                    <div title='Редактировать' className='itemIcon pi pi-pencil'></div>
                    <div title='Удалить' className='itemIcon pi pi-trash'></div>
                    <div title='Копировать' className='itemIcon pi pi-copy'></div>
                </div>
            </div>
        );
    }
}

export default SchoolItem;