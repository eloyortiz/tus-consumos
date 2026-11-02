import { formatSupplyDate, formatSupplyValidity } from '../script.js';

describe('supply validity formatting', () => {
  test('formats API dates as Spanish dates', () => {
    expect(formatSupplyDate('2024/03/03')).toBe('03/03/2024');
  });

  test('identifies a supply without an end date as current', () => {
    expect(formatSupplyValidity('2024/03/03', '')).toBe(
      'Desde 03/03/2024 (suministro actual)'
    );
  });

  test('formats a historical validity interval', () => {
    expect(formatSupplyValidity('2023/12/14', '2023/12/15')).toBe(
      'Desde 14/12/2023 hasta 15/12/2023'
    );
  });
});
