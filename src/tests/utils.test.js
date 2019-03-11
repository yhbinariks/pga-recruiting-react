import { compareByNumField, compareByStringField, getPlayerObj } from '../utils';

describe('utils', () => {
  describe('compareByNumField', () => {
    it('a < b asc', () => {
      const a = 1;
      const b = 2;
      expect(compareByNumField(a, b, true)).toBe(-1);
    });
    it('a < b des', () => {
      const a = 1;
      const b = 2;
      expect(compareByNumField(a, b, false)).toBe(1);
    });
    it('a > b asc', () => {
      const a = 2;
      const b = 1;
      expect(compareByNumField(a, b, true)).toBe(1);
    });
    it('a > b des', () => {
      const a = 2;
      const b = 1;
      expect(compareByNumField(a, b, false)).toBe(-1);
    });
    it('a === b asc', () => {
      const a = 1;
      const b = 1;
      expect(compareByNumField(a, b, true)).toBe(0);
    });
    it('a === b des', () => {
      const a = 1;
      const b = 1;
      expect(compareByNumField(a, b, false)).toBe(0);
    });
  });
  describe('compareByStringField', () => {
    it('a < b asc', () => {
      const a = 'a';
      const b = 'b';
      expect(compareByStringField(a, b, true)).toBe(-1);
    });
    it('a < b des', () => {
      const a = 'a';
      const b = 'b';
      expect(compareByStringField(a, b, false)).toBe(1);
    });
    it('a > b asc', () => {
      const a = 'b';
      const b = 'a';
      expect(compareByStringField(a, b, true)).toBe(1);
    });
    it('a > b des', () => {
      const a = 'b';
      const b = 'a';
      expect(compareByStringField(a, b, false)).toBe(-1);
    });
    it('a === b asc', () => {
      const a = 'a';
      const b = 'a';
      expect(compareByStringField(a, b, true)).toBe(0);
    });
    it('a === b des', () => {
      const a = 'a';
      const b = 'a';
      expect(compareByStringField(a, b, false)).toBe(0);
    });
  });

  it('getPlayerObj', () => {
    const playerEntries = [
      ['firstName', 'petr'],
      ['lastName', 'chu'],
      ['score', 132],
    ];
    expect(getPlayerObj(playerEntries)).toEqual({
      firstName: 'petr',
      lastName: 'chu',
      score: 132,
    });
  });
});
