let panorama;
let viewer;

viewer = new PANOLENS.Viewer({
  output:'console', 
  autoHideInfospot:false, 
  cameraFov:'80', 
  controlBar: true,
  enableReticle: true
});

panorama = new PANOLENS.ImagePanorama( 'M3_Watercolor_equirectangular-jpg_a_big_studio_with_1264537915_13711509.jpg' );
//panorama = new PANOLENS.ImagePanorama( 'https://images.blockadelabs.com/images/imagine/Radiant_Realism_equirectangular-jpg_A_professional_engineers_studio_1185582729_10639200.jpg?ver=1' );
viewer.add( panorama );
viewer.setPanorama(panorama);
