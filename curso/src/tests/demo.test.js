describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser una iguales los string', () => {
        // const isActive = true;

        // if (isActive) {
        //     throw new Error('No esta activo');
        // }

        //1. Inicialización
        const mensaje = 'Hola mundo';

        //2. estímulo
        const mensaje2 = `Hola mundo`;

        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});


