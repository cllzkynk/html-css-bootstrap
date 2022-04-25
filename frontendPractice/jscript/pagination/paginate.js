
/*

const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};
export default paginate;
*/

    let pageview=10;

    const paginate = (followers) => {
      const itemsPerPage = pageview;
      const numberOfPages = Math.ceil(followers.length / itemsPerPage);
      const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
      });
    
      return newFollowers;
    
    };
   

    let aaa = document.querySelector("#sec");

    aaa.addEventListener("change",()=>{

    
      pageview = Number(aaa.value);
       
        confirm(pageview+1);
    
        pageview=50;
 
  
       alert(pageview+1);

       paginate1(followers);
    });
     
   
      const paginate1 = (followers) => {
        const itemsPerPage = pageview;
        const numberOfPages = Math.ceil(followers.length / itemsPerPage);
        const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
          const start = index * itemsPerPage;
          return followers.slice(start, start + itemsPerPage);
        });
 
  
      alert(pageview+1);
    };
 

 
 
  

export default paginate ;  paginate1;                                    