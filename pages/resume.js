
export default function resume() {
  return (
    <>
    <div className="text-neutral-400 font-serif text-5xl text-center pt-4">RESUME</div>
    <div className="pt-10 flex flex-col">
    <div className='flex justify-center'>
      <img src="/images/resume.png" className="border-zinc-600 border-4 h-auto w-1/2" alt="HTML5"/>
    </div>
    <div  className='flex justify-center pt-4'>
    <a href="/images/resume.png" download>
    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-500 hover:to-sky-500 rounded-lg">Download Resume</button>
    </a>

    </div>

    </div>
    </>
  )
}
