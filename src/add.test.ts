import add from './add';

describe('测试文件', () => {
    test('renders learn react link', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('add', () => {
        expect(add(1, 2)).toBe(9);
    });
})