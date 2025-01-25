import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';
import exec from 'k6/execution';

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<100'],
        http_req_duration: ['max<2000'],
        http_req_failed: ['rate<0.1'], // ES UN CALCULO Q SE DA ENTRE LA DIVISION DE RQ EXITOSAS Y FALLIDAS
        http_reqs: ['count>20'], // CONTADOR DE CUANTAS RQS SE GENERARON
        http_reqs: ['rate>4'], // CHEQUEA CUANTAS RQS SE MANDAN POR SEG
        vus: ['value>9'],
        checks: ['rate>=0.99']
    }
}

export default function () {
    const res = http.get('https://test.k6.io/' + (exec.scenario.iterationInTest === 1 ? 'foo' : ''));

    check(res, {
        'status is 200': (r) => r.status === 200,
        'page is startpage': (r) => r.body.includes('Collection of simple web-pages')
    });
    sleep(2);
}
/* En performance testing, un threshold (umbral) 
es un límite definido que establece un nivel aceptable de rendimiento para un sistema, aplicación o componente bajo prueba. 
Es un criterio clave que se utiliza para evaluar si el rendimiento cumple con los requisitos esperados o no. */

/* Tipos de metricas: COUNTER, RATE, TREND Y GAUGE */