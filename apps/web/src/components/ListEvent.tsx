import {
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Box,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import SimplePagination from './Pagination';
import Card from './Card';
import { getAllEventPagination } from '@/api/event';

export default function ListEvent() {
  const [events, setEvents] = useState([]);
  const [maxPage, setMaxPage] = useState();
  const [page, setPage] = useState(1);

  const getevent = async () => {
    try {
      const response = await getAllEventPagination(page);
      setEvents(response.data.data);
      const maxPage: any = response.data.count / 4;
      setMaxPage(maxPage);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getevent();
  }, [page]);

  return (
    <Box px={{ base: 4, sm: 16 }} py={16}>
      <Select
        borderColor={'#A0153E'}
        color={'#5D0E41'}
        width={200}
        placeholder="Select option"
      >
        <option value="most-update">Most Update</option>
        <option value="most-longest">Most Longest</option>
        <option value="most-expensive">Most Expensive</option>
        <option value="most-low-price">Most Low price</option>
      </Select>
      <Tabs mt={10} color={'#5D0E41'} variant="unstyled" colorScheme="green">
        <TabList flexWrap={'wrap'}>
          <Tab _selected={{ fontWeight: 'bold' }}>
            <Text fontSize="sm">All</Text>
          </Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Upcoming</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Promotion</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Music</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Nightlife</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Performing & Visual Arts</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Holidays</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Hobbies</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Food & Drink</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack mt={8} gap={8} flexWrap={'wrap'}>
              {events.map((event: any) => {
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
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <SimplePagination page={page} setPage={setPage} maxPage={maxPage} />
    </Box>
  );
}
