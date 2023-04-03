
export const getServicesData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
            services {
              data {
                attributes {
                  icon {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                  title
                  description
                  link {
                    text
                    url
                  }
                }
              }
            }
          }`,
      }),
      
      cache: 'no-cache',
      next: {
        revalidate: 0,
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch Fun Facts Data');
    }
  
    return await res.json();
  };