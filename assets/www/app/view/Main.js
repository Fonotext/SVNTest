var panel = Ext.define('senchaTest.view.Main', {
  extend:'Ext.tab.Panel',
  requires: ['Ext.Ajax'],
  xtype:'titleBar',

  config:{
    tabBarPosition:'bottom',
    items:[
      {
        title:'Home',
        iconCls:'home',
        styleHtmlContent:true,
        scrollable: true,
        items:[
          {
            docked:'top',
            xtype:'titlebar',
            title:'herro'
          }
        ],
        listeners: [
          {
              fn: 'onMyPanelActivate',
              event: 'activate'
          }
        ],
        onMyPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        //  Ext.Msg.alert('Erroraa');
          //container.setHtml('New text');
          Ext.Ajax.request({
              //local path of your html file
              url: 'app/view/html/index.html',
              success : function(response) {
                //Ext.Msg.alert('Erroraa', newActiveItem);
                newActiveItem.setHtml(response.responseText);
              },
              failure : function(response) {
                  var text = response.responseText;
                  Ext.Msg.alert('Erroraa', text, Ext.emptyFn);
              }
          });
        }
      }
    ],


  },


});
