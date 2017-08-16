angular.module('myApp')
.factory('commonService', function () {
    var listPolice = [
        {
            coordinate: {
                lat: 21.120642,
                lng: 105.826873
            },
            note:"Bắt đè vạch mắt võng chỗ rẽ lên cầu. Nếu bị bắt nộp 1 lít (đủ giấy tờ)"
        },
        {
            coordinate: {
                lat: 21.125094,
                lng: 105.814971
            },
            note: "Công an khu vực, bắt rẽ không xi nhan, không mũ, nothing gương cũng bắt. Cẩn thận, team này hay núp lùm"
        }
    ]
    function getListPolice() {
        return listPolice;
    }
    return {
        myCoordinate: { lat: 21.139425, lng: 105.813909 },
        getListPolice: getListPolice
    }
})