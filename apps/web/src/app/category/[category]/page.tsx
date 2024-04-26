'use client';
import { getAllEventCategory } from '@/api/event';
import Card from '@/components/Card';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import {
  DiscoBall,
  Island,
  MusicNote,
  SoccerBall,
} from '@phosphor-icons/react/dist/ssr';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function page() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const params = useParams<{ category: string }>();
  const { category } = params;

  const getevent = async () => {
    try {
      const response = await getAllEventCategory(parseInt(category), page);
      setEvents(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getevent();
  }, []);
  return (
    <Box
      minH={'100vh'}
      px={{ base: 4, sm: 16 }}
      className=" mt-28 text-redPrimary"
    >
      <HStack>
        <Box padding={4} className="border-2 border-redDark rounded-full">
          {category == '1' ? (
            <MusicNote size={38} weight="fill" />
          ) : category == '2' ? (
            <DiscoBall size={38} weight="fill" />
          ) : category == '3' ? (
            <Image className="h-12 w-12" src="/performing.svg" />
          ) : category == '4' ? (
            <Island size={38} weight="fill" />
          ) : category == '5' ? (
            <SoccerBall size={38} />
          ) : (
            <Image className="h-12 w-12" src="/food-drink.svg" />
          )}
        </Box>
        <Text
          className="text-left"
          width={'fit-content'}
          fontWeight="bold"
          fontSize="3xl"
          pl={4}
        >
          {category == '1'
            ? 'Music'
            : category == '2'
              ? 'Nightlife'
              : category == '3'
                ? 'Performing & Visual Arts'
                : category == '4'
                  ? 'Holidays'
                  : category == '5'
                    ? 'Hobbies'
                    : 'Food & Drink'}
        </Text>
      </HStack>
      <HStack my={20} gap={8} flexWrap={'wrap'}>
        {events.map((event: any) => {
          console.log(event);
          if (event.categoryId == category) {
            return (
              <Card
                key={event.id}
                id={event.id}
                date={event.date}
                name={event.eventName}
                location={event.location}
                description={event.description}
                time={event.time}
              />
            );
          }
          return null;
        })}
      </HStack>
    </Box>
  );
}
