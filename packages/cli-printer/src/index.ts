import prettyjson from 'prettyjson';

export const renderPrettyJson = (jsonObject: object): void => {
    console.log(prettyjson.render(jsonObject));
}
