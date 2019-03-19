export const BggFilterPlayerCount = 'Bgg-Filter-Player-Count';
export const BggFilterMinDuration = 'Bgg-Filter-Min-Duration';
export const BggFilterMaxDuration = 'Bgg-Filter-Max-Duration';

export function filterHeaders(requestHeaders) {
    return Object.entries(requestHeaders)
        .filter(([ , val]) => val !== undefined) //eslint-disable-line no-unused-vars
        .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
}
