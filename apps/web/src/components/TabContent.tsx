import { TabPanel, HStack } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';

export default function TabContent(props: any) {
  const { events } = props;
  return (
    <TabPanel>
      <HStack mt={8} gap={8} alignItems={'start'} flexWrap={'wrap'}>
        {events?.map((event: any) => {
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
        })}
      </HStack>
    </TabPanel>
  );
}
