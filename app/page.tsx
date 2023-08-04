'use client'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'
import { Text } from '@/components/TamaguiText'

export default function Home() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <main className='bg-white h-screen w-screen flex flex-col items-center justify-center text-black'>
        <Text>Hello from tamagui text</Text>
      </main>
    </TamaguiProvider>
  )
}
