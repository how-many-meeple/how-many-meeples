export const BggFilterPlayerCount = 'Bgg-Filter-Player-Count';
export const BggFilterMinDuration = 'Bgg-Filter-Min-Duration';
export const BggFilterMaxDuration = 'Bgg-Filter-Max-Duration';

export function filterHeaders(requestHeaders) {
    Object.keys(requestHeaders).forEach(key => requestHeaders[key] === undefined && delete requestHeaders[key]);
    return requestHeaders;
}