import { FileCodeIcon } from '@phosphor-icons/react/dist/ssr/FileCode'

import { useCopyToClipboard } from '~/hooks/use-copy-to-clipboard'
import { cx } from '~/lib/cva'

import { LANGUAGE_FILE_ICONS } from '../icons/language-file-icons'

type Props = React.ComponentProps<'pre'> & {
  'data-code'?: string
  'data-language'?: string
  'data-filename'?: string
  'data-no-copy'?: true
}

export default function CodeBlock({ children, className, ...props }: Props) {
  const code = props['data-code']
  const language = props['data-language']
  const filename = props['data-filename']
  const noCopy = props['data-no-copy']

  const LanguageIcon = language ? (LANGUAGE_FILE_ICONS.get(language) ?? FileCodeIcon) : FileCodeIcon
  const { copiedText, copyToClipboard, idle } = useCopyToClipboard()

  return (
    <figure className='group/code-block offset-border rounded-xl'>
      {filename && (
        <figcaption className='flex items-center justify-between rounded-t-xl bg-neutral-800 px-3 py-2 text-xs text-neutral-400'>
          <div className='flex items-center gap-x-0.5'>
            <span className={cx('inline-flex items-center gap-x-0.5')}>{filename}</span>
          </div>
          {language && <LanguageIcon weight='duotone' size={20} />}
        </figcaption>
      )}
      <div className='relative'>
        <pre
          {...props}
          className={cx(
            className,
            `not-prose relative overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900! px-4 py-3 text-sm ${
              filename ? 'mt-0 rounded-t-none' : ''
            }`
          )}
        >
          {children}
        </pre>
        {code && !noCopy ? (
          <button
            className={`absolute top-2 right-2 rounded-md bg-neutral-800 p-2 py-1.5 text-right font-sans text-xs text-neutral-400 opacity-0 shadow-sm transition-all group-hover/code-block:opacity-100 focus:opacity-100 ${
              idle ? 'cursor-pointer hover:text-neutral-300' : ''
            } active:bg-neutral-700`}
            disabled={!idle}
            onClick={() => copyToClipboard(code)}
            aria-label={idle ? 'Copy code to clipboard' : 'Code copied'}
            title={idle ? 'Copy code to clipboard' : 'Code copied'}
            tabIndex={0}
          >
            {copiedText}
          </button>
        ) : null}
      </div>
    </figure>
  )
}
