
Ext.define('calculator-2.view.history.histroyView', {
extend: 'Ext.grid.Grid',
layout: 'hbox',
xtype:'historyview',
id:'historyview',
controller:'historyviewcontroller',
selectable: {
    mode: 'single'
},
 
title: 'Calculos',

columns: [{
    text: 'Calculo',
    dataIndex: 'calculo',
    flex:2,
    
},{
    text:'Resultado',
    dataIndex:'resultado',
    flex:1,

}],

store : {type:'historystore'},

items :[
    {
        xtype:'button',
        handler:'resetGrid',
        text:'reset'
    }
]
 
});
