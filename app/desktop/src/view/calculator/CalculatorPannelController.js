Ext.define('calculator-2.view.calculator.calculatorViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.calculatorpannelviewcontroller',




	addNumber:function(e){ // Funcion que agrega en la expression el caracter presionado.
		const Expression = this.getViewModel().get('exp') + e.initialConfig.text;
		this.getViewModel().set('exp', Expression)
	},
	
	solve:function(){ // resuelve la expression y guarda en la historystore 

		Ext.getCmp('historyview').getStore().add({calculo:this.getViewModel().get('exp'), resultado:eval(this.getViewModel().get('exp'))})
		this.getViewModel().set('exp',eval(this.getViewModel().get('exp')))
	},

	reset:function(){ // resetea la expression
		this.Expression = ''
		this.getViewModel().set('exp', 0)

	}
});
