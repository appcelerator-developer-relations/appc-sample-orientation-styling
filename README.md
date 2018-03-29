# App styling based on Orientation

This demo is intented to demonstrate how to handle dynamic styling based on the device orientation using built in methods.

## How does it work?

In `alloy.js` the orientationchange event is monitored. Based on the the orientation 2 globals are set, one for landscape and one for portrait. These 2 variables can then be used in any tss property to add dynamic styling.

In `index.tss` you see 2 definitions of the same class

```
".DynamicLabel[if=Alloy.Globals.isPortrait]": {}
".DynamicLabel[if=Alloy.Globals.isLandscape]": {}
```

This will make sure the window is correctly styled when opening up the window because only one of the two class definitions is applied according to the rules in `alloy.js`.

The only thing left to do, if you want to dynamically change styling while a window is actually opened, is to monitor the custom generated backbone event to reset the classes as shown in `index.js`

```Alloy.Globals.events.on('orientationchange', () => {
  // Reset the class here, Alloy handles tss if rules
  $.resetClass($.DynamicLabel, 'DynamicLabel');
});
```
When resetting a class with the 2 definitions specified as above, the rules will trigger again and the right definition is chosen. Don't monitor the `Ti.Gesture` event manually from this point on, as the globals might not have updated already in `alloy.js`, using the backbone event that is fired from `alloy.js` makes sure you always know for certain the globals are updated.
