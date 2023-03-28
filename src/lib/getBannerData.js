
export const getBannerData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
            bannerPage{
              data{
                id
                attributes{
                  bannerPage{
                    description
                    button{
                      url
                      btnImage{
                        data{
                          attributes{
                            url
                          }
                        }
                      }
                    }
                    image{
                      data{
                        attributes{
                          url
                        }
                      }
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