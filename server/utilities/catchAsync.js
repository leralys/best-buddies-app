export default async (promise, status = 404, msg = 'NOT FOUND') => {
    try {
        const data = await promise;
        return [data, null, status, msg];
    }
    catch (error) {
        console.log(error);
        return [null, error]
    }
}