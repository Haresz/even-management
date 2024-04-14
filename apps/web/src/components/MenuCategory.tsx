import React from 'react';
import { HStack, Image } from '@chakra-ui/react';
import {
  DiscoBall,
  Island,
  MusicNote,
  SoccerBall,
} from '@phosphor-icons/react/dist/ssr';
import IconCategory from '@/components/IconCategory';

export default function MenuCategory() {
  return (
    <HStack
      justifyContent={'space-between'}
      alignItems={'start'}
      flexWrap={'wrap'}
      py={16}
      px={{ base: 4, sm: 16 }}
      className="text-redPrimary border-b-2 border-redDark"
    >
      <IconCategory
        icon={<MusicNote size={38} weight="fill" />}
        title="Music"
      />
      <IconCategory
        icon={<DiscoBall size={38} weight="fill" />}
        title="Nightlife"
      />
      <IconCategory
        padding={5}
        icon={<Image className="h-12 w-12" src="/performing.svg" />}
        title="Performing & Visual Arts"
      />
      <IconCategory
        icon={<Island size={38} weight="fill" />}
        title="Holidays"
      />
      <IconCategory icon={<SoccerBall size={38} />} title="Hobbies" />
      <IconCategory
        padding={5}
        icon={<Image className="h-12 w-12" src="/food-drink.svg" />}
        title="Food & Drink"
      />
    </HStack>
  );
}
