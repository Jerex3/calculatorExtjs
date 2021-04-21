Ext.define('calculator-2.view.calculator.calculatorViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.calculatorviewcontroller',


	onClickExp:function(e){
		const Expression = this.getViewModel().get('exp') + e.initialConfig.text;
		console.log(this.getStore('historystore'))
		this.getViewModel().set('exp', Expression)
	},
	
	solve:function(){	
		//this.getViewModel().get('exp') + ' = ' 
		this.getViewModel().set('exp',eval(this.getViewModel().get('exp')))
	},

	reset:function(){
		this.Expression = ''
		this.getViewModel().set('exp', 0)

	}
});
