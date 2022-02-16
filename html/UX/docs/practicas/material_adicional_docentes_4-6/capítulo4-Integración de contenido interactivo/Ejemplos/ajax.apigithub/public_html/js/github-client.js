//Creamos la clase Github con dos atributos, la URL a la API y la cabecera de la tabla para mostrar la info.
function Github() {
    this.apiUrl = 'https://api.github.com/';
    this.tableHeader = '<table><thead><tr><th>Usuario</th><th>Descripción</th><th class="url">URL</th></thead><tbody>';
}

//Obtiene errores detectados (issues) en el repositorio jQuery de Github
Github.prototype.getJqueryIssues = function() {
    var that = this;
    
    $.get(this.apiUrl + 'repos/jquery/jquery/issues', function(issues) {
        var result;

        if (issues && issues.length > 0) {
            result = that.tableHeader;
            $.each(issues, function(index, issue) {
                result += '<tr><td>' + issue.user.login + '</td><td>' + issue.title + 
                        '</td><td><a target="_blank" href="' + issue.html_url + 
                        '">Ver más</a></td></tr>'
            });
            result += '</tbody></table>';
        } else {
            result = 'No se han encontrado issues en el repositorio de jQuery';
        }

        $('#results').html(result);
    });
};

//Obtiene los commits realizados en el repositorio de jQuery en Github
Github.prototype.getJqueryLatestCommits = function() {
    var that = this;
    
    $.get(this.apiUrl + 'repos/jquery/jquery/commits', function(commits) {
        var result;

        if (commits && commits.length > 0) {
            result = that.tableHeader;
            $.each(commits, function(index, commit) {
                result += '<tr><td>' + commit.commit.author.name+ '</td><td>' + commit.commit.message + 
                        '</td><td><a target="_blank" href="' + commit.html_url + 
                        '">Ver más</a></td></tr>'
            });
            result += '</tbody></table>';
        } else {
            result = 'No se han encontrado commits en el repositorio de jQuery';
        }

        $('#results').html(result);
    });
};

//Este fragmento es lo primero que se carga, cuando el $(document).ready
$(function() {
    var githubClient = new Github();

    $('#get-issues').on('click', function() {
        githubClient.getJqueryIssues();
    });
    
    $('#get-commits').on('click', function() {
        githubClient.getJqueryLatestCommits();
    });
});