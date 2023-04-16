import { series } from './data.js';
function insertSeries(series) {
    var tbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
    series.map(function (s) {
        var tr = document.createElement('tr');
        var html = "<td> <b>".concat(s.id, "</b> </td>\n                              <td> <a href=").concat(s.link, " target=\"_blank\">").concat(s.titulo, "</a> </td>\n                              <td> ").concat(s.productora, " </td>\n                              <td> ").concat(s.no_temporadas, " </td>");
        tr.innerHTML = html;
        tbody.appendChild(tr);
        for (var i = 0; i < tbody.children.length; i++) {
            tbody.children[i].classList.add('table-row');
        }
    });
}
function insertPromedio(series) {
    var total = 0;
    series.map(function (s) { total += s.no_temporadas; });
    var avrg = total / series.length;
    var promedioContainer = document.getElementById('promedio-container');
    var html = '<p>Seasons average: ' + avrg + '</p>';
    promedioContainer.innerHTML = html;
}
insertSeries(series);
insertPromedio(series);
