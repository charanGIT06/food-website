export default function PostsPage() {
  return (
    <main>
      <div className='posts-container grid grid-cols-4 gap-4 mt-4 overflow-y-auto'>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>1</div>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>2</div>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>3</div>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>4</div>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>5</div>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>6</div>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>7</div>
        <div className='post-card border rounded-3xl h-80 hover:border-sky-500 hover:shadow-md p-5'>8</div>
      </div>
    </main>
  );
}
