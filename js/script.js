/**
 * Created by nhatnk on 6/28/17.
 */

var app = angular.module('musicApp', []);

app.controller('musicCtrl', function($scope){
    $scope.songs = [
        {title: 'Bài Ca Tuổi Trẻ', url: 'http://data3.chiasenhac.com/downloads/1755/3/1754294-56edd089/128/Bai%20Ca%20Tuoi%20Tre%20-%20JGKiD_%20KraziNoyze_%20Emc%20[MP3%20128kbps].mp3'},
        {title: 'Cho Tôi Lang Thang', url: 'http://data3.chiasenhac.com/downloads/1774/3/1773435-efa435fc/128/Cho%20Toi%20Lang%20Thang%20-%20Ngot_%20Den%20[MP3%20128kbps].mp3'},
        {title: 'Loving you', url: 'http://data3.chiasenhac.com/downloads/1783/3/1782120-44fb8c73/128/Loving%20You%20-%20Kimmese_%20Den%20[MP3%20128kbps].mp3'},
        {title: 'Mày Đang Giấu Cái Gì', url: 'http://data05.chiasenhac.com/downloads/1688/3/1687719-872ffd84/128/May%20Dang%20Giau%20Cai%20Gi%20-%20Andree%20Right%20Hand%20[MP3%20128kbps].mp3'},
        {title: 'Từ Bỏ', url: 'http://data3.chiasenhac.com/downloads/1784/3/1783047-af015d9a/128/Tu%20Bo%20-%20Erik%20[MP3%20128kbps].mp3'},
        {title: 'Con Tim Tao Đau Quá Man', url: 'http://data3.chiasenhac.com/downloads/1791/3/1790507-9415ec9c/128/Con%20Tim%20Tao%20Dau%20Qua%20Man%20-%20Sol_%20Yuno_%20Kak%20[MP3%20128kbps].mp3'},
    ];

    $scope.selectedSong = $scope.songs[0];

    $scope.select = function(song){
        $scope.selectedSong = song;
        var player = document.getElementById('player');
        player.load();
        player.play();
    }
});