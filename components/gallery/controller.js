app.controller( 'galleryCtrl', function( $scope, AppModel, GalleryService ) {

    $scope.model = AppModel;
    GalleryService.getImages();

    $scope.zoom = function( image ) {
        $scope.model.zoom = image;
    };

} );
