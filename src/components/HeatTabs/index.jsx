import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TodayTab from '@/components/TodayTab';
import RangeTab from '@/components/RangeTab';

const HeatTabs = () => {
	return (
		<Tabs>
			<TabList>
				<Tab>Today</Tab>
				<Tab>Range</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<TodayTab />
				</TabPanel>

				<TabPanel>
					<RangeTab />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default HeatTabs;
