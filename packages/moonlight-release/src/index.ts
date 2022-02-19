import * as core from '@actions/core'
import { getContext } from '@moon-scripts/gha-helper';
import { renderPrettyJson } from '@moon-scripts/cli-printer';

(() => {


    renderPrettyJson(getContext?.payload?.inputs)

})()
