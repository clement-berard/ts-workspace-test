import * as core from '@actions/core'
import { inputsGhaParams } from '@moon-scripts/gha-helper';
import { renderPrettyJson } from '@moon-scripts/cli-printer';


export const getVersionToRelease = () => {
    inputsGhaParams('versionToRelease');
}

(() => {

    console.log('inputs', inputsGhaParams());
    console.log('inputsVER', inputsGhaParams('versionToRelease'));

})()
