test('Debe ser una prueba', () => {
    const isActive = true;

    if (isActive) {
        throw new Error('No esta activo');
    }
});

