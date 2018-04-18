// APPLICATION IOS<->INTERFACE METHOD
function nativeExtensions(device, activeSession) {
  // Native Methods
  function AVSession(caller) {
    window.location = 'interface!AVSession!'+caller.sessionType+'!'+caller.hostURL+'!';

    // if (device.android && ('nativeExt' in window)) {
    //   window.nativeExt.startStream(isBroadcast, url);
    // } else {
    //   window.location = 'interface!CallStreamView!host!'+url+'!';
    // }
    console.log('nativeExtensions.streamSession('+JSON.stringify(caller)+') forDevice: '+device);
  }
  // End Native Methods

  function startStream(isBroadcast, url) {  // begin user video stream
    if(device.android && ('nativeExt' in window)) {
      window.nativeExt.startStream(isBroadcast, url);
    } else if(device.ios) {
      // window.location = 'interface!CallStreamView!join!'+streamURL+'!';
    }
    console.log('nativeExtensions('+device+').startStream('+isBroadcast+',' +url+')');
  }

  function stopStream() { // end user video stream
    if(device.android && ('nativeExt' in window)) {
      window.nativeExt.stopStream();
    } else {
      console.info('native method stopStream() called');
    }
    console.log('nativeExtensions('+device+').stopStream()');
  }
  // End Live Stream Control Methods
  return {
    AVSession: AVSession,
    startStream: startStream,
    stopStream: stopStream
  };
}
module.exports = nativeExtensions;

/* native->webapp interface methods */

/* End native->webapp interface methods */
