import * as core from '@actions/core'



(() => {
    const myInput = core.getInput('versionToRelease') || 'yaR';
    console.log('OUIIIIIIIIII', myInput);
})()
