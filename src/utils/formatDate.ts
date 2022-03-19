import moment from 'moment';

export function formatDate(date: string) {
    return moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY');
}

export function sortDateDESC(a: string, b: string) {
    return moment(b, 'YYYY-MM-DD').diff(moment(a, 'YYYY-MM-DD'));
}
