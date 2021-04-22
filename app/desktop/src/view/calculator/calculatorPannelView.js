Ext.define('calculator-2.view.calculator.calculatorPannelView', {
    extend: 'Ext.Panel',
    width: 200,
    height: 200,
    controller: 'calculatorpannelviewcontroller',
    xtype: 'calculatorpannelview',
    columns: 3,
    viewModel: 'calculatorpannelviewmodel',

    items: [{  // textfield y botones
        xtype: 'textfield', 
        label: 0,
        readOnly: true,
        bind: '{exp}'
    },

    {
        xtype: 'button',
        margin: '2px',
        text: '7',
        handler: 'addNumber'

    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '8',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '9',
        handler: 'addNumber'
    },
    {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '/',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '4',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '5',
        handler: 'addNumber'
    },
    {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '6',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '*',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '1',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '2',
        handler: 'addNumber'
    },
    {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '3',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '-',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '0',
        handler: 'addNumber'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: 'CE',
        handler: 'reset'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '=',
        handler: 'solve'
    }, {
        xtype: 'button',
        columnWidth: 0.23,
        margin: '2px',
        text: '+',
        handler: 'addNumber'
    }]
})