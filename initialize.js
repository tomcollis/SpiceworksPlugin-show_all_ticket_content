/**
* SHOW ALL TICKET CONTENT - SPICEWORKS PLUGIN
* Compatible with Spiceworks 7.3 & higher (using the v2 help desk only)
* @author Tom Collis (tomcollis)
* @version 2.1
* @date 2017-03-01
*/

/* CONFIGURATION OPTIONS  */
plugin.configure({
  settingDefinitions:[
    { name:'show_all_content', label:'Show All Ticket Content', type:'enumeration', defaultValue:'enabled', options:['enabled', 'disabled']},
    { name:'preview_height', label:'Preview Height', type:'string', defaultValue:'150px', example:'Default: 150px&#44; not required if above is enabled'}   
  ]
});

if (plugin.settings.show_all_content=='enabled') {

/* SHOW ALL CODE IN 7.3 AND HIGHER */
SPICEWORKS.utils.addStyle(".sui-opt-in .helpdesk-app .ticket-pane .tab-sections .tab-pane.activity .activity-feed .body { max-height:none; overflow: visible;}");
SPICEWORKS.utils.addStyle(".sui-opt-in .helpdesk-app .ticket-pane .show-more-item.contents-overflows .bottom-mask {background-image:none;}");
SPICEWORKS.utils.addStyle(".sui-opt-in .helpdesk-app .ticket-pane .show-more-item.contents-overflows .show-more-toggle {display: none;}");
SPICEWORKS.utils.addStyle(".sui-opt-in .helpdesk-app .ticket-pane .show-more-item .body-wrapper .body {max-height:none; overflow: visible;}");
  
} else {

/* CHANGE PREVIEW SIZE CODE  */
SPICEWORKS.utils.addStyle(".sui-opt-in .helpdesk-root .ticket-pane .tab-sections .tab-pane.activity .activity-feed .activity-event .body-wrapper p {max-height:" + plugin.settings.preview_height + "; overflow: hidden;}");
SPICEWORKS.utils.addStyle(".sui-opt-in .helpdesk-app .ticket-pane .tab-sections .tab-pane.activity .activity-feed .body { max-height:" + plugin.settings.preview_height + "; overflow: hidden;}");
SPICEWORKS.utils.addStyle(".sui-opt-in .helpdesk-app .ticket-pane .show-more-item .body-wrapper .body {max-height:" + plugin.settings.preview_height + "; overflow: hidden;}");
}
