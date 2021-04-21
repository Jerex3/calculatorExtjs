
Ext.define('calculator-2.view.history.histroyView', {
extend: 'Ext.grid.Grid',
layout: 'hbox',
xtype:'historyview',
listeners: {
    select: function(grid, record) {
        Ext.toast('You selected ' + record.data.name + '!');
    }
},
 
selectable: {
    mode: 'single'
},
 
title: 'Pokemon List',
columns: [{
    text: 'Calculo',
    dataIndex: 'calculo'
},{
    text:'Resultado',
    dataIndex:'resultado'
}],

store : {type:'historystore'}

 
});
