export default function PostsPageLayout({ children }) {
  return (
    <main className='container w-11/12 mx-auto p-5'>
      <div className='top flex flex-row items-center place-content-between'>
        <h4 className='text-xl font-bold'>My Posts</h4>
        <button className='bg-sky-500 rounded-full px-5 py-3 text-white hover:bg-sky-700'>
          New Post
        </button>
      </div>
      <div className='posts-placeholder h-50'>{children}</div>
    </main>
  );
}
