var init = {
    schools: [
        {name: 'Гимназия 7', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Гимназия 8', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Школа12', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Школа 6', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Гимназия 7', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Гимназия 8', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Школа12', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Школа 6', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Гимназия 7', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Гимназия 8', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Школа12', ip: '127.0.0.1', user: 'ids', password: 'kontroller'},
        {name: 'Школа 6', ip: '127.0.0.1', user: 'ids', password: 'kontroller'}
    ]
};


export default function (state = init, action) {

    switch (action.type) {
        case '':
            return state;
        default:
            return state;

    }
}