Ext.define('calculator-2.store.history', {
    extend:'Ext.data.Store',
    model:'calculator-2.model.History',
    alias:'store.historystore',
    
    data: [{
        calculo:"2+2",
        resultado:"4"
    },{
        calculo:"3+2",
        resultado:"5"
    }
]
})