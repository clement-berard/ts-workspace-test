import * as github from '@actions/github'

export const getContext = github?.context;
export const getPullRequest = () => {
    const rawPullRequest = getContext?.payload?.pull_request;
    const baseBranch: string = rawPullRequest?.base?.ref;
    return {
        raw: rawPullRequest,
        title: rawPullRequest?.title,
        baseBranch,
        isDevelopBaseBranch: baseBranch === 'develop-front',
    }
}

export const inputs = (key?: string) => {
    const allInputs = getContext?.payload?.inputs || [];
    return key ? allInputs?.[key] : allInputs;
}

export const pullRequest = getPullRequest();
