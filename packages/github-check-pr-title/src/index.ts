import * as core from '@actions/core'
import { lintCommit } from '@moon-scripts/commit-lint';
import { renderPrettyJson } from '@moon-scripts/cli-printer';
import { pullRequest } from '@moon-scripts/gha-helper';

// https://stackoverflow.com/a/58799798

(async () => {
    const { title } = pullRequest;

    if(title) {
        core.info(`Title to check: ${title}`);
        const { valid, errors, warnings } = await lintCommit(title);

        if(warnings.length) {
            renderPrettyJson(warnings);
        }

        if(!valid) {
            renderPrettyJson(errors);
            core.setFailed(
                `Pull request title "${title}" not respect pattern.`,
            )
        }

    }else {
        core.error('no title');
    }
})()

