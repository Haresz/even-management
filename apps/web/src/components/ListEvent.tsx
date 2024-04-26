import {
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Box,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import SimplePagination from './Pagination';
import Card from './Card';
import { getAllEvent, getAllEventCategory } from '@/api/event';
import TabContent from './TabContent';

export default function ListEvent() {
  const [events, setEvents] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<number | null>(null);

  const getevent = async () => {
    try {
      let response;
      if (category !== null) {
        response = await getAllEventCategory(category, page);
      } else {
        response = await getAllEvent(page);
      }
      setEvents(response.data.data);
      const maxPage = Math.ceil(response.data.count / 4);
      setMaxPage(maxPage);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const tabsHandler = (catId: number | null) => {
    setCategory(catId);
    setPage(1);
  };

  useEffect(() => {
    getevent();
  }, [page, category]);

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
          <Tab
            onClick={() => tabsHandler(null)}
            _selected={{ fontWeight: 'bold' }}
          >
            <Text fontSize="sm">All</Text>
          </Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Upcoming</Tab>
          <Tab _selected={{ fontWeight: 'bold' }}>Promotion</Tab>
          <Tab
            onClick={() => tabsHandler(1)}
            _selected={{ fontWeight: 'bold' }}
          >
            Music
          </Tab>
          <Tab
            onClick={() => tabsHandler(2)}
            _selected={{ fontWeight: 'bold' }}
          >
            Nightlife
          </Tab>
          <Tab
            onClick={() => tabsHandler(3)}
            _selected={{ fontWeight: 'bold' }}
          >
            Performing & Visual Arts
          </Tab>
          <Tab
            onClick={() => tabsHandler(4)}
            _selected={{ fontWeight: 'bold' }}
          >
            Holidays
          </Tab>
          <Tab
            onClick={() => tabsHandler(5)}
            _selected={{ fontWeight: 'bold' }}
          >
            Hobbies
          </Tab>
          <Tab
            onClick={() => tabsHandler(6)}
            _selected={{ fontWeight: 'bold' }}
          >
            Food & Drink
          </Tab>
        </TabList>
        <TabPanels>
          <TabContent events={events} />
          <TabContent events={events} />
          <TabContent events={events} />
          <TabContent events={events} />
          <TabContent events={events} />
          <TabContent events={events} />
          <TabContent events={events} />
          <TabContent events={events} />
          <TabContent events={events} />
        </TabPanels>
      </Tabs>
      <SimplePagination page={page} setPage={setPage} maxPage={maxPage} />
    </Box>
  );
}
