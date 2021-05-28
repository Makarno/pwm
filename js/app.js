function getElement(id) {
    return document.getElementById(id);
}

//fetch('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi', { headers: new Headers({ "X-Requested-With": "jafbjakfb" }) })
//fetch('https://api.kawalcorona.com/indonesia/provinsi')
//http://api-football.azharimm.tk/leagues/eng.1/standings?season=2020&sort=desc
fetch('https://indonesia-covid-19.mathdro.id/api/provinsi/')
    .then(res => res.json())
    .then((res) => {
        const data = res.data;
        /*
        getElement('key').innerHTML = data[0].provinsi;
        getElement('positif').innerHTML = data[0].kasusPosi;
        getElement('sembuh').innerHTML = data[0].kasusSemb;
        getElement('meninggal').innerHTML = data[0].kasusMeni;
        */
        for (var i = 0; i < data.length; i++) {
            getElement('in').innerHTML += "<tr><td>" + (i + 1) + "</td>" + "<td>" + data[i].provinsi + "</td>" + "<td>" + data[i].kasusPosi + "</td>" + "<td>" + data[i].kasusSemb + "</td>" + "<td>" + data[i].kasusMeni + "</td></tr>";
        }
    });