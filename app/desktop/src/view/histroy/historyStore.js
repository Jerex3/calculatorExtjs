Ext.define('calculator-2.view.history.historyviewstore', {
    extend:'Ext.data.Store',
    alias:'store.historystore',
    storeId:'historystore',
    fields:[
        'calculo', 'resultado'
    ],
    data: [{calculo:"2-1", resultado:'1'}]
})