export default (date) => {
    let d = new Date(date);
    let h = d.getHours();
    let m = d.getMinutes();
    return (`${h}:${m}`);
}