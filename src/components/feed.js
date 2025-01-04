'use server';
import BreachCard from '@/modules/BreachCard';

import { Pagination } from '@/modules/Pagination';
import { revalidatePath } from 'next/cache';


const PAGE_SIZE = 40;

const fetchFeed = async ({ take = PAGE_SIZE, skip = 0 },pageNumber,pageQuery) => {
	'use server';
    let results;
    if (pageQuery) {
        results = await (await fetch(`https://api.hackcheck.io/databreaches/list?q=${pageQuery}`)).json()        
    } else {
        results = await (await fetch(`https://api.hackcheck.io/databreaches/list?offset=${pageNumber}`)).json()
    }
	

	// revalidatePath('/');
    const total = results.matches
	return {
		data: results.databreaches.slice(0, 20),
		metadata: {
			hasNextPage: skip + take < total,
			totalPages: Math.ceil(total / take),
		},
	};
};

export const Feed = async (props) => {
	const pageNumber = Number(props?.searchParams?.offset || 0); // Get the page number. Default to 1 if not provided.
	const pageQuery = props?.searchParams?.q || "" // Get the page number. Default to 1 if not provided.
	const take = PAGE_SIZE;
	const skip = (pageNumber - 1) * take; // Calculate skip based on page number.
	const { data, metadata } = await fetchFeed({ take, pageNumber },pageNumber,pageQuery);

	return (
		< >
		
				{data.map((breach, i) => (
                    
					<BreachCard icon={
                        breach.logo !== ""
                          ? breach.logo
                          : "/img/icons/default-breach-icon.svg"
                      }
                      description={breach.description}
                      key={breach.name}
                      title={breach.name}
                      date={breach.date_breached}
                      leaked={breach.compromised_fields} />
				))}
			<Pagination offset={pageNumber} totalPages={10} {...props.searchParams} {...metadata} />
		</>
	);
};