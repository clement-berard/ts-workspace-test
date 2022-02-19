const goodCommits = [
  'chore(actions): add first action',
  'fix(totoCamel): add first action',
  'fix(totoCamel/toto): add first action',
  'refactor(clientSupport2): add first action',
  'ci(scopeCi): subject With Capital allowed ON',
];

const badCommits = [
  'fix(scope):no space after :',
  'feat(Scope): scope with no camelCase',
  'ci(scopeCi): Scope with no camelCase',
];

export default [...goodCommits, ...badCommits];
