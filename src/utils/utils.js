 export  const filteredProducts = (products , searchTerm, sortOrder) =>
    products      
    .filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )   
    .sort((a, b) => {
      if (sortOrder === 'low-high') return a.price - b.price;
      if (sortOrder === 'high-low') return b.price - a.price;
      return 0;
    });   


export const filteredSuggestions = (products, value, setSuggestions) => {  
       const filtered = products
      .map(product => product.title)
      .filter(title => title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
    setSuggestions(filtered);
      };
