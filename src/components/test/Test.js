import React, {Component} from 'react';
const electron = window.require('electron');
const sql = electron.remote.require('mssql');
console.log(sql)

const config = {
    user: 'ids',
    password: 'kontroller',
    server: '25.54.214.227', // You can use 'localhost\\instance' to connect to named instance
    database: 'uptimedb'
}

class Test extends Component {

    constructor(){
        super();
        // (async function () {
        //     try {
        //         sql.close();
        //         let pool = await sql.connect(config)
        //
        //         const result = await pool.request().query('select Top 50 dbo.Event.EventDate, dbo.Event.EmployeeID, dbo.Employee.FIO, dbo.Event.EventDescription from dbo.Event left join dbo.Employee on dbo.Employee.EmployeeID = dbo.Event.EmployeeID ORDER by EventID DESC')
        //         console.dir(result.recordset)
        //     } catch (err) {
        //         console.error(err)
        //     }
        // })()
    }


    render() {
        return (
            <div>
                <h1>HELLO REACT-REDUX!!</h1>
            </div>
        );
    }
}

export default Test;