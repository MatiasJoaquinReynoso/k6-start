import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '10s',
            target: 10
        },
        {
            duration: '30s',
            target: 10
        },
        {
            duration: '10s',
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contact.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}

// 1er Stage: RAMP UP 5min
// 2do Stage: STEADY LOAD 30min en entorno QA
// 3er Stage: RAMP DOWN 5min
// A typical ramp-up time is about 10% of the total duration (give or take), a 5-minute ramp-up and 5-minute ramp-down is more appropriate for a 60-minute test.
// STRESS TESTING APLICA MISMO SCRIPT PERO TARGETS DOBLE DE TIEMPO Q LOAD
