import * as core from '@actions/core'
import { inputs } from '@moon-scripts/gha-helper';
import { renderPrettyJson } from '@moon-scripts/cli-printer';

(() => {

    console.log('inputs', inputs());
    console.log('inputsVER', inputs('versionToRelease'));

})()
