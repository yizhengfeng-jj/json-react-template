module.exports = {
    roots: ['<rootDir>/src'],
    setupFiles: [],
    clearMocks: true,
    collectCoverage: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    // 1：解决Jest: a transform must export a `process` or `processAsync` function.
    moduleNameMapper: {
        '^.+\\.(css|less)$': './jest/style.transform.js'
    },
    transformIgnorePatterns: ['\\\\node_modules\\\\'],
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.json'
        }
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
