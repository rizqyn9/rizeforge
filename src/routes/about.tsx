import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { LightStick } from '~/components/ui/light-stick'

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
    <div className='relative container mt-navbar flex-col pt-16 pb-16'>
      <div className='grid grow grid-cols-2 gap-y-20'>
        <div className='order-2 col-span-full lg:order-1 lg:col-span-1'>
          <section id='about'>
            <h1 className='font-serif text-2xl font-semibold lg:text-4xl'>About me.</h1>
            <div className='mt-6 flex flex-col gap-4 text-[#cccccc] [&_b]:text-white'>
              <p>
                Hello! I&apos;m a fullstack engineer with over <b>five years of experience</b> in
                building scalable web and backend systems. My work spans various industries,
                including fintech, edtech, gaming, and logistics, where I&apos;ve focused on
                creating seamless, user-friendly applications.
              </p>
              <p>
                I have a strong foundation in both <b>front-end</b> and <b>back-end</b>{' '}
                technologies, such as React, Next.js, Golang, Node.js, and Spring Boot. I&apos;m
                also skilled in <b>cloud infrastructure</b>, using tools like the HashiCorp stack
                (Nomad, Consul, Vault, Terraform), Kubernetes, AWS, GCP, and Alibaba Cloud.
                Additionally, I&apos;ve integrated Web3 features, including wallet connectivity with
                Wagmi and RainbowKit for blockchain staking, and worked with databases like MongoDB,
                PostgreSQL, FaunaDB, and Redis.
              </p>
              <p>
                Throughout my career, I&apos;ve led teams, modernized legacy systems, and optimized
                architectures for cost-efficiency and performance from AI-powered LMS platforms to
                high-traffic internal banking tools. I thrive in fast-paced environments, tackling
                complex problems with innovative solutions, and I&apos;m always eager to collaborate
                on projects that push technological boundaries.
              </p>
            </div>
          </section>
        </div>
        <div className='order-1 col-span-full mx-auto max-w-sm pt-0 pl-0 lg:order-2 lg:col-span-1 lg:max-w-none lg:pt-16 lg:pl-16'>
          <HelloAvatar />
        </div>
      </div>
      <div className='mt-16 flex h-28 items-center justify-center'>
        <LightStick direction={'y'} className='' />
      </div>
      <div className='mx-auto mt-24 max-w-2xl'>
        <SectionExperience />
      </div>
    </div>
  )
}

function SectionExperience() {
  return (
    <section id='experiences' className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold'>Experiences</h2>
      <div className='mt-8 flex flex-col gap-12'>
        {EXPERIENCES.map(({ start, end, role, company, achievements, tech_stack }, idx) => (
          <div key={idx} className='grid gap-x-4 gap-y-2.5 md:grid-cols-[130px_auto]'>
            <div className='flex h-min items-start justify-start gap-2 pt-0.5 font-serif text-sm font-medium text-gray-200'>
              <p>{start}</p>
              <hr className='my-auto flex-1 border border-white/20' />
              <p>{end}</p>
            </div>
            <div className=''>
              <p className='font-serif font-semibold text-pretty text-gray-200'>{role}</p>
              <p className='mt-2.5 text-gray-300 italic'>@{company}</p>
              <ul className='mt-2 ml-5 list-disc space-y-0.5'>
                {achievements.map((achievement, idx) => (
                  <li key={idx} className='list-item'>
                    <p className='text-sm text-pretty'>{achievement}</p>
                  </li>
                ))}
              </ul>
              {tech_stack.length && (
                <div className='mt-2.5'>
                  <ul className='flex flex-wrap gap-1.5'>
                    {tech_stack.map((tech, idx) => (
                      <li
                        key={idx}
                        className='list-item rounded-md border border-sky-400/50 bg-sky-800/30 px-2 py-0.5'
                      >
                        <p className='text-xs font-semibold text-pretty'>{tech}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
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

// function CardAboutMe() {
//   return (
//     <Card className='p-6 pr-8 text-lg'>
//       Fullstack engineer with a passion for creating seamless, user-friendly applications. With a
//       solid foundation in both front-end and back-end technologies, I thrives in fast-paced
//       environments, tackling complex problems with innovative solutions.
//     </Card>
//   )
// }

// function ExperienceItem(props: { start: string; end?: string; position: string; company: string }) {
//   const { start, end, position, company } = props

//   return (
//     <div className='grid grid-cols-6 gap-4'>
//       <div className='col-span-2 flex h-min items-start justify-start gap-2 pt-1 text-sm text-gray-400'>
//         <p>{start}</p>
//         <hr className='my-auto flex-1 border border-white/20' />
//         <p>{end}</p>
//       </div>
//       <div className='col-span-4'>
//         <p>{position}</p>
//         <p className='text-sm text-gray-400 italic'>{company}</p>
//       </div>
//     </div>
//   )
// }

// export function CardExperience() {
//   return (
//     <Card className='p-6 pr-8'>
//       <p>EXPERIENCE</p>
//       <div className='col-span-full mt-6 flex flex-col gap-4'>
//         {EXPERIENCES.map(({ start, end, position, company }, idx) => (
//           <ExperienceItem key={idx} start={start} end={end} position={position} company={company} />
//         ))}
//       </div>
//     </Card>
//   )
// }

function HelloAvatar() {
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
