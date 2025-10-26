import { createFileRoute } from '@tanstack/react-router'

import { EXPERIENCES } from '~/config/experiences'
import { cx } from '~/lib/cva'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: 'About' },
      {
        name: 'description',
        content:
          'Fullstack engineer with a passion for creating seamless, user-friendly applications. With a solid foundation in both front-end and back-end technologies, I thrives in fast-paced environments, tackling complex problems with innovative solutions.',
      },
    ],
  }),
})

function RouteComponent() {
  return (
    <>
      <div className='container mt-navbar'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex flex-col gap-4'>
            <CardAboutMe />
            <CardExperience />
          </div>
          <div className='flex flex-col gap-4'>
            {/* <HelloAvatar />
            <AboutTools /> */}
            <HelloAvatar />
          </div>
        </div>
      </div>
    </>
  )
}

function Card(props: React.ComponentProps<'div'>) {
  const { className, ...rest } = props
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-lg border border-white/20 bg-white/5 p-2 backdrop-blur-sm',
        className
      )}
      {...rest}
    />
  )
}

function CardAboutMe() {
  return (
    <Card className='p-6 pr-8 text-lg'>
      Fullstack engineer with a passion for creating seamless, user-friendly applications. With a
      solid foundation in both front-end and back-end technologies, I thrives in fast-paced
      environments, tackling complex problems with innovative solutions.
    </Card>
  )
}

function ExperienceItem(props: { start: string; end?: string; position: string; company: string }) {
  const { start, end, position, company } = props

  return (
    <div className='grid grid-cols-6 gap-4'>
      <div className='col-span-2 flex h-min items-start justify-start gap-2 pt-1 text-sm text-gray-400'>
        <p>{start}</p>
        <hr className='my-auto flex-1 border border-white/20' />
        <p>{end}</p>
      </div>
      <div className='col-span-4'>
        <p>{position}</p>
        <p className='text-sm text-gray-400 italic'>{company}</p>
      </div>
    </div>
  )
}

export function CardExperience() {
  return (
    <Card className='p-6 pr-8'>
      <p>EXPERIENCE</p>
      <div className='col-span-full mt-6 flex flex-col gap-4'>
        {EXPERIENCES.map(({ start, end, position, company }, idx) => (
          <ExperienceItem key={idx} start={start} end={end} position={position} company={company} />
        ))}
      </div>
    </Card>
  )
}

export function HelloAvatar() {
  return (
    <Card className='p-0'>
      <div className='absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 p-2 text-sm'>
        <p className='w-min rounded-tl-lg rounded-r-md border border-white bg-gray-400/10 px-2 py-1 whitespace-nowrap backdrop-blur-sm'>
          Hallo 👋🏼
        </p>
        <p className='w-min rounded-r-md border border-white bg-gray-400/10 px-2 py-1 whitespace-nowrap backdrop-blur-sm'>
          My name is Rizqy Prastya Ari Nugroho
        </p>
        <p className='w-min rounded-r-md border border-white bg-gray-400/10 px-2 py-1 whitespace-nowrap backdrop-blur-sm'>
          But you can call me Rizqy
        </p>
        <p className='w-min rounded-r-md rounded-bl-lg border border-white bg-gray-400/10 px-2 py-1 whitespace-nowrap backdrop-blur-sm'>
          Grab my email, and get in touch
        </p>
      </div>
      <div
        className='aspect-w-1 aspect-h-1 relative overflow-hidden object-cover grayscale'
        // style={{
        //   boxShadow: "inset 10px 10px 10px 10px rgb(0 0 0 / 1)",
        // }}
      >
        <img
          className='object-cover'
          alt='rizqynugroho'
          title='rizqynugroho'
          src='https://ik.imagekit.io/connect2203/rdevblog/me_uxL2hLXqt.png?updatedAt=1701761952485'
        />
      </div>
    </Card>
  )
}
