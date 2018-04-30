
// mapping pairs of: visible names to pairs of lengths and 

var arr = [];

arr.push(['PublishedInDistrictTuition', { mask: 'CHG1ATZ', len: 4, schar: 'Z' } ])
arr.push(['PublishedInDistrictFees', { mask: 'CHG1AFZ', len: 4, schar: 'Z' } ])
arr.push(['PublishedInStateTuition', { mask: 'CHG2ATZ', len: 4, schar: 'Z' } ])
//arr.push(['PublishedInStateFees', { mask: 'CHG2AFZ', len: 4, schar: 'Z' } ])
//arr.push(['PublishedOutOfStateTuition', { mask: 'CHG3ATZ', len: 4, schar: 'Z' } ])
//arr.push(['PublishedOutOfStateFees', { mask: 'CHG3AFZ', len: 4, schar: 'Z' } ])
// arr.push(['OnCampusRoomAndBoard', { mask: 'CHG5AYZ', len: 4, schar: 'Z' } ])
// arr.push(['OffCampusRoomAndBoard', { mask: 'CHG7AYZ', len: 4, schar: 'Z' } ])

export default new Map<string, any>(arr); 