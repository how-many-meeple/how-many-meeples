import * as headers from '../../../server/controllers/headers';

describe('filterHeaders', () => {

    it('should remove any undefined headers', () => {
        const initalHeaders = {
            [headers.BggFilterPlayerCount]: 5,
            [headers.BggFilterMinDuration]: undefined,
            [headers.BggFilterMaxDuration]: undefined,
            [headers.BggFieldWhitelist]: headers.defaultWhitelist
        };
        const expectedHeaders = {
            [headers.BggFilterPlayerCount]: 5,
            [headers.BggFieldWhitelist]: headers.defaultWhitelist
        };
        const returnedHeaders = headers.filterHeaders(initalHeaders);

        expect(returnedHeaders).toStrictEqual(expectedHeaders);

    });
});