export function getFomrattedDate(createdAt:Date){
    const date= new Date(createdAt); 
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();  
    const formattedDate= day +' '+month+ ', ' + year

      return formattedDate;
}