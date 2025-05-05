let panorama;
let viewer;

viewer = new PANOLENS.Viewer({
  output:'console', 
  autoHideInfospot:true, 
  cameraFov:'90', 
  autoRotate: false,
  controlBar: true,
  controlButtons: ['fullscreen', 'setting', 'video']
});
  
let pano_name = "Pen__Ink_equirectangular-jpg_A_professional_visual_designers_933137893_10347490.jpg"; 
let pano_url = "https://images.blockadelabs.com/images/imagine/"+pano_name;

panorama = new PANOLENS.ImagePanorama( pano_name );  
//panorama = new PANOLENS.ImagePanorama( pano_url );
viewer.add( panorama );
viewer.setPanorama(panorama);

function setGyro() {
  if (typeof DeviceOrientationEvent !== 'function') {
    return console.log('DeviceOrientationEvent not detected')
  }
  if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
    return console.log('DeviceOrientationEvent.requestPermission not detected')
  }
  DeviceOrientationEvent.requestPermission().then(function(result) {
    $("button").hide();
		
  });
}







