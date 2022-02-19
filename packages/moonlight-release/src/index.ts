import * as core from '@actions/core'



(() => {
    const myInput = core.getInput('versionToRelease')
    console.log('OUIIIIIIIIII', myInput);
})()
