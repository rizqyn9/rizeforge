// @ts-check

import path from 'path'
import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
// import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import reactPlugin from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore')

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      formComponents: ['Form'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    rules: {
      'object-shorthand': ['error', 'always'],
      'no-useless-rename': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }
  // {
  //   files: ['**/*.{jsx,tsx}'],
  //   languageOptions: {
  //     parserOptions: {
  //       ecmaFeatures: {
  //         jsx: true,
  //       },
  //     },
  //   },
  //   plugins: {
  //     'better-tailwindcss': eslintPluginBetterTailwindcss,
  //   },
  //   rules: {
  //     ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
  //     'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 120 }],
  //     'better-tailwindcss/no-unregistered-classes': [
  //       'error',
  //       {
  //         detectComponentClasses: true,
  //       },
  //     ],
  //   },
  //   settings: {
  //     'better-tailwindcss': {
  //       entryPoint: 'app/styles/tailwind.css',
  //     },
  //   },
  // }
)
