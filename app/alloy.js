// Globals to specify orientation to be used in tss
Alloy.Globals.isLandscape = false;
Alloy.Globals.isPortrait = true;

// Create Backbone event handler
Alloy.Globals.events = _.clone(Backbone.Events);

// Monitor orientationchange constantly
Ti.Gesture.addEventListener('orientationchange', (e) => {
  if ([Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT].indexOf(e.orientation) > -1) {
    Alloy.Globals.isLandscape = true;
    Alloy.Globals.isPortrait = false;
  } else {
    Alloy.Globals.isLandscape = false;
    Alloy.Globals.isPortrait = true;
  }
  // trigger event to watch for in the app globally
  Alloy.Globals.events.trigger('orientationchange');
});

// check on load if the pre-defined orientation is set correctly
(() => {
  if ([Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT].indexOf(Ti.Gesture.orientation) > -1){
    Alloy.Globals.isLandscape = true;
    Alloy.Globals.isPortrait = false;
  }
})()