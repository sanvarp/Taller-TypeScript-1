import { Serie } from './serie.js'; 
import { series } from './data.js';

function insertSeries(series: Serie[]): void {
    let tbody: HTMLElement = document.getElementById('series')!;// Nodo tbody que tiene el id="series"
    series.map(s => {
        let tr: HTMLElement = document.createElement('tr');
        let html: string = `<td> <b>${s.id}</b> </td>
                              <td> <a href=${s.link} target="_blank">${s.titulo}</a> </td>
                              <td> ${s.productora} </td>
                              <td> ${s.no_temporadas} </td>`;
        tr.innerHTML = html;
        tbody.appendChild(tr);
        for (let i = 0; i < tbody.children.length; i++) {
            tbody.children[i].classList.add('table-row');
        }
    });
}
function insertPromedio(series: Serie[]): void {
    let total: number = 0;
    series.map(s => {total += s.no_temporadas});
    const avrg: number = total / series.length;
    let promedioContainer: HTMLElement = document.getElementById('promedio-container')!;
    const html: string = '<p>Seasons average: '+avrg+'</p>'
    promedioContainer.innerHTML = html;
}
insertSeries(series);
insertPromedio(series);