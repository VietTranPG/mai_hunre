angular.module('MetronicApp').controller('MapController', ['$rootScope', '$scope', 'settings', function ($rootScope, $scope, settings) {
    angular.element(document).ready(function () {
        initAutocomplete();
    });
    function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -33.8688, lng: 151.2195 },
            zoom: 13,
            mapTypeId: 'roadmap'
        });
    }
}]);
