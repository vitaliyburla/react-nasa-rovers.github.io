function pxToRem(value: number) {
    return `${value / 16}rem`;
}

const typography = {
    fontFamily: 'Rogueland, Arial',
    h1: {
        fontSize: pxToRem(128),
    },
    h2: {
        fontSize: pxToRem(64),
    },
    h3: {
        fontSize: pxToRem(48),
    },
    subtitle1: {
        fontSize: pxToRem(32),
    },
    body1: {
        fontSize: pxToRem(20),
    },
    body2: {
        fontSize: pxToRem(16),
    },
};

export default typography;
