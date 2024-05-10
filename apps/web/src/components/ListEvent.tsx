import React, { useEffect, useMemo, useState } from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Box,
  Text,
  Input,
} from '@chakra-ui/react';
import SimplePagination from './Pagination';
import { getAllEvent } from '@/api/event';
import TabContent from './TabContent';
import debouce from 'lodash.debounce';

export default function ListEvent() {
  const [events, setEvents] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<number | undefined>(undefined);
  const [upComing, setUpComing] = useState<number | undefined>(undefined);
  const [promotion, setPromotion] = useState<boolean | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  const getevent = async () => {
    try {
      let response;

      response = await getAllEvent(
        page,
        category,
        searchTerm,
        upComing,
        promotion,
        true,
      );

      const maxPage = Math.ceil(response.data.count / 4);
      setMaxPage(maxPage);
      setEvents(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const tabsHandler = (catId: number | undefined) => {
    setCategory(catId);
    setPromotion(undefined);
    setUpComing(undefined);
    setPage(1);
  };

  const promotionHandler = () => {
    setCategory(undefined);
    setPromotion(true);
    setUpComing(undefined);
    setPage(1);
  };

  const upcomingHandler = () => {
    setCategory(undefined);
    setPromotion(undefined);
    setUpComing(7);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const debouncedHandleSearchChange = useMemo(() => {
    return debouce(handleSearchChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedHandleSearchChange.cancel();
    };
  }, []);

  useEffect(() => {
    debouncedHandleSearchChange(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    getevent();
  }, [page, category, upComing]);

  useEffect(() => {
    if (searchTerm === '') {
      getevent();
    }
  }, [searchTerm]);

  const filteredEvents = useMemo(() => {
    const data = events.filter((event: any) => {
      const eventNameMatches = event.eventName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const locationMatches = event.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return eventNameMatches || locationMatches;
    });
    setEvents(data);
  }, [searchTerm]);

  return (
    <Box px={{ base: 4, sm: 16 }} py={16}>
      <Input
        maxW={420}
        borderColor={'#A0153E'}
        borderStyle={'solid'}
        focusBorderColor={'gray.400'}
        variant="outline"
        placeholder="Search"
        onChange={(e) => debouncedHandleSearchChange(e.target.value)}
      />
      <Tabs mt={10} color={'#5D0E41'} variant="unstyled" colorScheme="green">
        <TabList flexWrap={'wrap'}>
          <Tab
            onClick={() => tabsHandler(undefined)}
            _selected={{ fontWeight: 'bold' }}
          >
            <Text fontSize="sm">All</Text>
          </Tab>
          <Tab onClick={upcomingHandler} _selected={{ fontWeight: 'bold' }}>
            Upcoming
          </Tab>
          <Tab onClick={promotionHandler} _selected={{ fontWeight: 'bold' }}>
            Promotion
          </Tab>
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
