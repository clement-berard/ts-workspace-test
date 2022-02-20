import semver from 'semver';
import { inputsGhaParams } from '@moon-scripts/gha-helper';

(async () => {
    console.log('inputsVER', inputsGhaParams('versionToRelease'));
    const inputVersion = inputsGhaParams('versionToRelease');

    const isValid =  semver.valid(inputVersion);

    if(isValid){
        process.exit(0);
    } else {
        process.exit(1);
    }

})()
