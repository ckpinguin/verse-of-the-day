import * as DateHelper from './DateHelper';
import _ from 'lodash';

describe('DateHelper', () => {
    it('adds zeroes correctly', () => {
        expect(DateHelper._zeroFill(1)).toBe('01');
    });

    it('creates specific random date between 01.01.2014 and 31.12.2017', () => {
        // beware of 0-based month!
        const date = DateHelper._randomDateBetween(new Date(2014, 0, 1), new Date(2017, 11, 31));
        // console.log(DateHelper.getDateObj(date));
        expect(_.isObject(date));
        expect(date.getFullYear()).toBeLessThanOrEqual(2017);
        expect(date.getFullYear()).toBeGreaterThanOrEqual(2014);
    });

    it('creates a random date with min. and max. year', () => {
        const date = new Date(
            DateHelper._minValues['year'],
            DateHelper._minValues['month'],
            DateHelper._minValues['day']
        );
        expect(date.getFullYear()).toBeGreaterThanOrEqual(DateHelper._minValues['year']);        
        expect(date.getFullYear()).toBeLessThanOrEqual(new Date().getFullYear());
    });

    it('returns a date as object literal', () => {
        const date = new Date('2017, 8, 1');
        expect(DateHelper.getDateObj(date)).toEqual({
            'day': 1,
            'month': 8,
            'year': 2017
        });
    });

    it('returns a date object in string form', () => {
        const date = new Date('2017, 8, 13');
        expect(DateHelper.formatDate(date)).toMatch(/2017.08.13/);
    });
});
