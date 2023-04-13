import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TodayTab from '@/components/HeatTabs/TodayTab';
import RangeTab from '@/components/HeatTabs/RangeTab';

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
