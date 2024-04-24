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
        link="/category/1"
      />
      <IconCategory
        icon={<DiscoBall size={38} weight="fill" />}
        title="Nightlife"
        link="/category/2"
      />
      <IconCategory
        padding={5}
        icon={<Image className="h-12 w-12" src="/performing.svg" />}
        title="Performing & Visual Arts"
        link="/category/3"
      />
      <IconCategory
        icon={<Island size={38} weight="fill" />}
        title="Holidays"
        link="/category/4"
      />
      <IconCategory
        icon={<SoccerBall size={38} />}
        title="Hobbies"
        link="/category/5"
      />
      <IconCategory
        padding={5}
        icon={<Image className="h-12 w-12" src="/food-drink.svg" />}
        title="Food & Drink"
        link="/category/6"
      />
    </HStack>
  );
}
