module.exports = {
    parser: '@typescript-eslint/parser', // typescript解析器
    extends: '@ecomfe/eslint-config',
    plugins: [
        '@typescript-eslint', // 增加一些typescript语法检查
        'react-hooks' // hooks语法检查
    ],
    rules: {
        'indent': ['error', 4], // 强制4格风格
        'no-unused-vars': 'off', // 关掉eslint no-unused-vars默认配置
        '@typescript-eslint/no-unused-vars': ['warn', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false
        }], // 使用@typescript-eslint/no-unused-vars配置
        'import/no-unresolved': 'off',
        'import/order': 'off', // 不需要引入顺序验证
        'max-params': ['warn', 8], // 方法最多8个参数
        'comma-dangle': ['error', 'never'], // 不允许最后多余的逗号
        '@typescript-eslint/consistent-type-definitions': [
            'error',
            'interface'
        ], // 优先使用 interface 而不是 type
        'react-hooks/rules-of-hooks': 'error', // 检查Hook的规则
        'react-hooks/exhaustive-deps': 'warn', // 检查effect的依赖
        'no-console': ['error', {allow: ['warn', 'error']}]
    }
};