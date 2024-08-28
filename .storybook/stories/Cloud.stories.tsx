import * as React from 'react'
import { Vector3 } from 'three'
import { Meta, StoryObj } from '@storybook/react'

import { Setup } from '../Setup'

import { Cloud, OrbitControls } from '../../src'
import { ComponentProps } from 'react'

export default {
  title: 'Staging/Cloud',
  component: Cloud,
  //docs: { source: { code: `whatever you want` } },
  parameters: {
    docs: { story: { autoplay: true } },
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
  },
  decorators: [
    (Story) => (
      <Setup controls={false} cameraPosition={new Vector3(0, 0, 10)}>
        <Story />
      </Setup>
    ),
  ],
  render: (props: ComponentProps<typeof Cloud>) => (
    <>
      <React.Suspense fallback={null}>
        <Cloud {...props} position={[-4, -2, 0]} />
        <Cloud {...props} position={[-4, 2, 0]} />
        <Cloud {...props} />
        <Cloud {...props} position={[4, -2, 0]} />
        <Cloud {...props} position={[4, 2, 0]} />
      </React.Suspense>
      <OrbitControls enablePan={false} zoomSpeed={0.5} />
    </>
  ),
} satisfies Meta<typeof Cloud>

type Story = StoryObj<typeof Cloud>

export const CloudSt = {
  name: 'Default',
  render: (props: ComponentProps<typeof Cloud>) => (
    <>
      <React.Suspense fallback={null}>
        <Cloud {...props} position={[-4, -2, 0]} />
        <Cloud {...props} position={[-4, 2, 0]} />
        <Cloud {...props} />
        <Cloud {...props} position={[4, -2, 0]} />
        <Cloud {...props} position={[4, 2, 0]} />
      </React.Suspense>
      <OrbitControls enablePan={false} zoomSpeed={0.5} />
    </>
  ),
} satisfies Story
