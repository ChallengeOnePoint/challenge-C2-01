app.controller( 'zoomCtrl', function( $scope, AppModel ) {

    $scope.model = AppModel;

    $scope.closeZoom = function() {
        $scope.model.zoom = null;;
    };

} );
