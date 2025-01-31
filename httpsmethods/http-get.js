import http from 'k6/http';
import { check } from 'k6';

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/');

    res = http.get('https://test-api.k6.io/public/crocodiles/7/');

    console.log(res.json().name);

    check(res, {
        'status is 200': (r) => r.status === 200,
        'Crocodile is Sobek': (r) => r.json().name === 'Sobek'
    });

}

/* http es un protocolo q permite la comunicacion entre la rq y la rs en el servidor.
Son una serie de reglas q deben cumplirse para la comunicacion en el sv 

una rq contiene: headers, request methods, address y body
una rs contiene: status code, headers y body 

PARA VER EL DEBUG TOTAL DEL CONSOLE LOG
EN LA TERMINAL EJECUTAR:

k6 run --http-debug http-get.js
k6 run --http-debug="full" http-get.js para ver todo

CON ESTO VAMOS A VER QUE CONTIENE TANTO LA RQ COMO RS*/