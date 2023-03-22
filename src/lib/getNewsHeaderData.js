
export const getNewsHeaderData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          newsHeader{
            data{
              id
              attributes{
                NewsHeader{
                  heading1
                  heading2
                  description
                  button{
                    btnTxt
                    url
                  }
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