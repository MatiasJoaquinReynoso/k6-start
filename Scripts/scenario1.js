import http from 'k6/http';

export default function () {
    const res = http.get('https://test.k6.io/');
    console.log(res.status)
}

// SABER Q DESPUES DEL HTTP. PONEMOS QUE TIPO DE RQ HTTP ES
// DECLARAMOS UNA VARIABLE EN EL CASO Q QUERRAMOS VERIFICAR ALGO EN LA SOLICITUD
// EJ CONSOLE.LOG(RES.STATUS)