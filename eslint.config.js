//  @ts-check
import { globalIgnores } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierConfig from 'eslint-config-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginRouter from '@tanstack/eslint-plugin-router'
import noBarrelFiles from 'eslint-plugin-no-barrel-files'

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  globalIgnores(['dist/**', '.output/**', '.wrangler/**']),
  ...tanstackConfig,
  reactHooks.configs.flat['recommended-latest'],
  reactRefresh.configs.recommended,
  { ignores: ['*.config.js'] },
  {
    rules: {
      'react/no-multi-comp': 'off',
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
    },
  },
  ...pluginRouter.configs['flat/recommended'],
  noBarrelFiles.flat,
  prettierConfig,
]
