document.addEventListener('DOMContentLoaded', () => {
    const rightFaceElements = [
        'rightFace1',
        'triangle1',
        'triangle2',
        'triangle3',
        'triangle4',
        'triangle5',
        'triangle6',
        'triangle7',
        'triangle8',
        'triangle9',
        'triangle10',
        'triangle11',
        'triangle12',
        'triangle13',
        'triangle14',
        'triangle15'
    ];

    rightFaceElements.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add('glow');
        }
    });
});
