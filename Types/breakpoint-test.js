import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}

// Es un tipo de prueba donde el tiempo es casi infinito es decir ponemos un valor muy alto para ir viendo hasta q punto podemos exigirle a la app
// Recordar q es una prueba que es muy peligrosa por su exigencia a la app por eso es necesario verificar si el entorno de prueba es apto para tal

