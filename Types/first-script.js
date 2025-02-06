import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '10s',
    cloud: {
        projectID: 3745374
    }
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}

/* k6 cloud ./Types/first-script.js */

/* k6 cloud login TO LOGIN */

/* k6 run first-script.js -o cloud  ESTO ES PARA EJECUTAR TANTO EN TERMINAL COMO REPORTER*/