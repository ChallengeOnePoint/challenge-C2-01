var app = angular.module( 'Application', [ 'ngRoute' ] );

app.config( function( $routeProvider, $locationProvider ) {

    $routeProvider.when( '/', {
        templateUrl: 'templates/home.html'
    } ).otherwise( {
        redirectTo: '/'
    } );

    $locationProvider.html5Mode( {
        enabled: true,
        requireBase: false
    } );

} );

app.factory( 'AppModel', function() {

    return {

        images: [],

        view: 'largegrid'

    };

} );

app.controller( 'exampleCtrl', function( $scope, AppModel, ExampleService ) {

    $scope.test = "Example component";

    $scope.model = AppModel;

    ExampleService.getExample();

} );

app.directive( 'example', function() {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/example/template.html'
    };

} );

app.factory( 'ExampleService', function( $http, AppModel ) {

    return {

        getExample: function() {
            $http.get( '/api/example' ).then( function( resp ) {
                AppModel.example = resp.data.example
            }, function( err ) {
                console.log( err );
            } );
        }

    };

} );

app.controller( 'galleryCtrl', function( $scope, AppModel, GalleryService ) {

    $scope.model = AppModel;
    GalleryService.getImages();

    $scope.zoom = function( image ) {
        $scope.model.zoom = image;
    };

} );

app.directive( 'gallery', function() {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/gallery/template.html'
    };

} );

app.factory( 'GalleryService', function( $http, AppModel ) {

    return {

        getImages: function() {
            $http.get( '/kittenIdentity.json' ).then( function( resp ) {
                console.log( resp );
                AppModel.images = resp.data;
            }, function( err ) {
                console.log( err );
            } );
        }

    };

} );

app.controller( 'zoomCtrl', function( $scope, AppModel ) {

    $scope.model = AppModel;

    $scope.closeZoom = function() {
        $scope.model.zoom = null;;
    };

} );

app.directive( 'zoom', function() {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/zoom/template.html'
    };

} );
