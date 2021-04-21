Ext.define('calculator-2.Application', {
  extend: 'Ext.app.Application',
  name: 'calculator',
  requires: ['calculator-2.*'],
 
  
  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
