export const getFormatedDate = (date, dateFormat) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return dateFormat.replace('YYYY', year).replace('MM', month).replace('DD', day);
}