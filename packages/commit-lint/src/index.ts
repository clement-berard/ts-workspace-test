import {merge} from 'lodash';
import {resolve} from 'path';
import lint from '@commitlint/lint';
import load from '@commitlint/load';
import {QualifiedConfig, LintOutcome, LintRuleOutcome} from '@commitlint/types'
import commitExamples from './examples/commitsList';

export enum RULES_TYPES {
    SCOPE_ENUM = 'scope-enum'
}

const loadAllConfig = async (): Promise<QualifiedConfig> => {
    const baseConfig = await load({extends: ['@commitlint/config-angular']});
    const customConfig = await load({extends: [resolve(__dirname, 'rules.js')]});
    return merge({}, baseConfig, customConfig);
};

export const hasRule = (warningsOrErrors: LintRuleOutcome[], ruleType: RULES_TYPES): boolean => {
    return warningsOrErrors.some(ruleOutcome => ruleOutcome.name === ruleType);
}

export const lintCommit = async (commit: string): Promise<LintOutcome> => {
    const { rules } = await loadAllConfig();
    return lint(commit, rules);
}

export const showExamples = async (): Promise<void> => {
    commitExamples.map(async (commit) => {
        const {valid, warnings, errors} = await lintCommit(commit);

        console.log(`"${commit}"`, valid ? '✅' : '🔴', ' warnings', !!warnings.length, ' errors', !!errors.length);

    });
}
