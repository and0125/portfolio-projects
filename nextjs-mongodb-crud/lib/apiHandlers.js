export const getTopics = async () => {
    try {
       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
          cache: 'no-store'
        })

      if (!response.ok) {
        throw new Error("failed to fetch topics")
      }

      const data = await response.json();
      return { topics: data.topics || [] };
    } catch (error) {
        console.log("Error loading topics: ", error);
        return { topics: [] };
    }
  }