$(document).ready(function() {
 
  // bind qtip2 event to all future .nd_graphlinkswitch buttons
  $('#ports_pane').on('mouseover', '.nd_graphlinkswitch', function(event) {
    $(this).qtip({
      overwrite: false,
      content: {
        attr: 'data-content'
      },
      show: {
        event: event.type,
        ready: true
      },
      position: {
        my: 'left center',
        at: 'right centre',
        target: 'mouse'
      },
      style: {
        classes: 'qtip-bootstrap nd_graphlinkswitch-style'
      }
    });
  });
 
});
