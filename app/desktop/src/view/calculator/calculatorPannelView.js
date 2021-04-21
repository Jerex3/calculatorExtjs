
Ext.define('calculator-2.view.calculator.calculatorPannelView', {
    extend: 'Ext.Panel',
    width: 200,
    height: 200,
    controller:'calculatorviewcontroller',
    xtype: 'calculatorpannelview',
    columns:3,
    viewModel: {
        data: {
            exp: '0',
        }
    },

    items: [{
        xtype: 'textfield',
        label: 0,
        readOnly: true,
        bind:'{exp}'
    },
   
        {
            xtype: 'button',
            margin: '2px',
            text: '7',
            handler: 'onClickExp'

            //event to concatenate numbers to display 

        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '8',
            handler:'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '9',
            handler: 'onClickExp'
        },
        {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '/',
            handler: 'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '4',
            handler: 'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '5',
            handler: 'onClickExp'
        },
        {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '6',
            handler: 'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '*',
            handler: 'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '1',
            handler: 'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '2',
            handler: 'onClickExp'
        },
        {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '3',
            handler: 'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '-',
            handler: 'onClickExp'
        }, {
            xtype: 'button',
            columnWidth: 0.23,
            margin: '2px',
            text: '0',
            handler: 'onClickExp'
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
            handler: 'onClickExp'
        }]
})