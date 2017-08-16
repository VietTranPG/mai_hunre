var app = angular.module('myApp', []);
app.controller('CardCtrl', function ($scope, $http, commonService) {
    var map;
    var iconParty = '../images/party.png';
    var iconDanger = '../images/danger.png';
    var listPolice = commonService.getListPolice();
    window.setTimeout(function () {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: commonService.myCoordinate,
            mapTypeId: 'roadmap'
        });
        var marker = new google.maps.Marker({
            position: commonService.myCoordinate,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'This is NHÀ VIỆTTTTTTTTTTTTT',
            icon: iconParty
        });
        for (var i = 0; i < listPolice.length; i++) {
            var content = '<div id="iw-container">' +
                    '<div class="iw-title">' + listPolice[i].note + '</div>' +                    
                  '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: content,
                maxWidth: 350
            });
            var marker = new google.maps.Marker({
                position: listPolice[i].coordinate,
                map: map,
                animation: google.maps.Animation.DROP,
                title: listPolice[i].note,
                icon: iconDanger
            });
            google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
                return function () {
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                };
            })(marker, content, infowindow));
            google.maps.event.addListener(map, 'click', function () {
                infowindow.close();
            });
        }
    }, 1000)
});