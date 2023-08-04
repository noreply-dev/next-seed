import {Text as TamaguiText} from 'tamagui'

export function Text ({children}: {children: any}) {
  return <TamaguiText color={'black'}>
    {children}
  </TamaguiText>
}