import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}': ['p(95)<1000'],
        'http_req_duration{status:201}': ['p(95)<1000']
    }
}

export default function () {
    http.get('https://run.mocky.io/v3/cef9ccd3-7768-45f4-ab95-d2edd7f90db6');
    http.get('https://run.mocky.io/v3/92e5fe0a-4cf5-4f1d-9356-65410053a22e?mocky-delay=2000ms');
}

/*
Los tags son pares clave-valor que puedes agregar a tus métricas para proporcionar contexto adicional y facilitar el filtrado y análisis de los resultados. 
Son útiles para categorizar y diferenciar datos en tus pruebas de carga.

Uso de Tags en k6
Agregar Tags a una Métrica Específica: 
Puedes agregar tags a cualquier métrica usando la opción tags en funciones como check, group o incluso al registrar métricas personalizadas.

Beneficios de Usar Tags
Filtrado de datos: Puedes filtrar métricas en tus herramientas de análisis como Grafana, InfluxDB o CloudWatch.
Organización: Ayudan a identificar rápidamente de dónde provienen los datos.
Flexibilidad: Permiten agregar contexto como el entorno (staging, prod), el tipo de prueba (smoke, load), o características específicas (featureA, featureB).

https://designer.mocky.io/
*/