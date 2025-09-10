import { describe, it, expect } from 'vitest';
import ordinal from '../src';

describe('ordinal', () => {
    it('handles basic ordinals', () => {
        expect(ordinal(1)).toBe('1st');
        expect(ordinal(2)).toBe('2nd');
        expect(ordinal(3)).toBe('3rd');
        expect(ordinal(4)).toBe('4th');
    });

    it('handles teens correctly', () => {
        expect(ordinal(11)).toBe('11th');
        expect(ordinal(12)).toBe('12th');
        expect(ordinal(13)).toBe('13th');
        expect(ordinal(111)).toBe('111th');
        expect(ordinal(112)).toBe('112th');
        expect(ordinal(113)).toBe('113th');
    });

    it('handles zero and negatives', () => {
        expect(ordinal(0)).toBe('0th');
        expect(ordinal(-1)).toBe('-1st');
        expect(ordinal(-2)).toBe('-2nd');
        expect(ordinal(-3)).toBe('-3rd');
        expect(ordinal(-11)).toBe('-11th');
    });

    it('handles large numbers (bigint)', () => {
        expect(ordinal(12345678901234567890n)).toBe('12345678901234567890th');
        expect(ordinal(12345678901234567891n)).toBe('12345678901234567891st');
    });

    it('handles numeric strings', () => {
        expect(ordinal('1')).toBe('1st');
        expect(ordinal('02')).toBe('2nd');
        expect(ordinal('-003')).toBe('-3rd');
        expect(ordinal('11')).toBe('11th');
    });

    it('stringifies non-numeric inputs', () => {
        // @ts-expect-error testing runtime behaviour
        expect(ordinal('foo' as any)).toBe('foo');
        // @ts-expect-error
        expect(ordinal(undefined as any)).toBe('undefined');
        // @ts-expect-error
        expect(ordinal(null as any)).toBe('null');
    });
});



