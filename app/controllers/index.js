Alloy.Globals.events.on('orientationchange', () => {
  // Reset the class here, Alloy handles tss if rules 
  $.resetClass($.DynamicLabel, 'DynamicLabel');
});

$.getView().open();