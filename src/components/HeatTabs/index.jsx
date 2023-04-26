import React, { useEffect, useState } from 'react';
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Spinner,
} from '@chakra-ui/react';
import TodayTab from '@/components/HeatTabs/TodayTab';
import RangeTab from '@/components/HeatTabs/RangeTab';
import { useRouter } from 'next/router';

const HeatTabs = () => {
	const [tabIndex, setTabIndex] = useState(null);
	const router = useRouter();

	const handleTabsChange = index => {
		if (index === 0) {
			router.push('?tab=today');
		} else {
			router.push('?tab=range');
		}
	};

	useEffect(() => {
		if (!router.isReady) return;
		const query = router.query;
		if (query.tab === 'today') {
			setTabIndex(0);
			return;
		}

		if (query.tab === 'range') {
			setTabIndex(1);
			return;
		}

		router.push('?tab=today');
	}, [router]);

	if (tabIndex === null) return <Spinner />;
	return (
		<Tabs index={tabIndex} onChange={handleTabsChange}>
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
