const findId = (locId, arr) => {
    return (arr.find(el => el.location_id === locId));
}

export default findId;