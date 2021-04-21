Ext.define('calculator-2.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  
  tabBarPosition: 'bottom',
  items: [{
    title: "Calculadora",
    xtype:'calculatorview'
}, {
    title: "Historial",
    xtype: 'historyview'
}]
})
