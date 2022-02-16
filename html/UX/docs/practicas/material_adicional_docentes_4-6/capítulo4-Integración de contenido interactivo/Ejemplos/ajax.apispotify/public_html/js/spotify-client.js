//Creamos la clase Spotify con la API a la que hacer la llamada
function Spotify() {
    this.apiUrl = 'https://api.spotify.com/';
}

//Busca información de un artista
Spotify.prototype.getArtist1 = function (artist) {

    $.get(this.apiUrl + 'v1/search?type=artist&q=' + artist, function (response) {
        var result = "";
        var artists = response.artists.items;

        if (artists && artists.length > 0) {
            $.each(artists, function (index, artist) {
                result += '<h1>' + artist.name + '</h1>' + '<h2>Popularity:' + artist.popularity + '</h2>';
                if (artist.images.length > 0) {
                    result += '<img src=' + artist.images[0].url + ' width="250"/>';
                }
            });
        } else {
            result = 'No se han encontrado artistas con ese nombre';
        }

        $('#results').html(result);
    });
};

//Busca información de un artista, añadiendo la posibilidad de obtener sus álbumes
Spotify.prototype.getArtist2 = function (artist) {

    $.get(this.apiUrl + 'v1/search?type=artist&q=' + artist, function (response) {
        var result = "";
        var artists = response.artists.items;

        if (artists && artists.length > 0) {
            $.each(artists, function (index, artist) {
                result += '<h1><a href="#" class="artistId" data-id="' + artist.id + '">' + artist.name + '</a></h1>' + '<h2>Popularity:' + artist.popularity + '</h2>';
                if (artist.images.length > 0) {
                    result += '<img src=' + artist.images[0].url + ' width="250"/>';
                }
            });
        } else {
            result = 'No se han encontrado artistas con ese nombre';
        }

        $('#results').html(result);
    });
};

//Busca información de un artista, añadiendo la posibilidad de obtener sus álbumes
Spotify.prototype.getArtistById = function (artistId) {

    $.get(this.apiUrl + 'v1/artists/' + artistId + '/albums', function (response) {
        var result = "";
        var albums = response.items;

        if (albums && albums.length > 0) {
            $.each(albums, function (index, album) {
                result += '<h1>' + album.name + '</h1>';
                if (album.images.length > 0) {
                    result += '<img src=' + album.images[0].url + ' width="250"/>';
                }
            });
        } else {
            result = 'No se han encontrado albumes para ese artista';
        }

        $('#results').html(result);

    });
};


//Este fragmento es lo primero que se carga, cuando el $(document).ready
$(function () {
    var spotify = new Spotify();

    $('#bgetArtist').on('click', function () {
        spotify.getArtist2($('#artistName').val());
    });


    $('#results').on('click', '.artistId', function () {
        spotify.getArtistById($(this).attr("data-id"));
    });

});