Ext.define('calculator-2.view.histroy.histroyViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.historyviewcontroller',
    resetGrid:function(){
        this.getView().getStore().removeAll() // Remove all from the grid
    }
})

