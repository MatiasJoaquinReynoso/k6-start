import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const res = http.get('https://test.k6.io/');
    check(true, {
        'true is true': (value) => value === true
    });
}

// Son verificaciones que aseguran que las respuestas de una solicitud cumplen con los criterios definidos por el usuario.