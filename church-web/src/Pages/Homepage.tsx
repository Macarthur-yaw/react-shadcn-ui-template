


import SearchInput from '../Components/SearchInput';
export default function Homepage() {

      
  return (
    <div className='absolute top-20 left-1/2  w-full transform -translate-x-1/2 pt-6'>

     <div className='text-center space-y-2'>
     <span className='flex flex-row justify-center items-center gap-2'> 
      
      <h1 className='md:text-5xl text-4xl mt-10 uppercase font-medium font-serif text-white'>
      DOCTRINES & SERMONS FINDER
     </h1></span>
<h2 className='text-lg text-gray-300'>
      Find sermons, church doctrines, and more
</h2>

     </div>

     <SearchInput/>
    </div>
  )
}