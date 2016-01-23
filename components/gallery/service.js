app.factory( 'GalleryService', function( $http, AppModel ) {

    return {

        getImages: function() {
            $http.get( '/kittenIdentity.json' ).then( function( resp ) {
                AppModel.images = resp.data;
            }, function( err ) {
                console.log( err );
            } );
        }

    };

} );
