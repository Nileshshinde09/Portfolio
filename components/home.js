const bg={
    background:"url('/images/face.jpg') no-repeat",
    backgroundPosition:"right"
}
export default function home() {
    return (
        <div className="grid bg-zinc-950">
        <div className="sm:grid-rows-1 h-full sm:h-96 sm:px-10" style={bg}>
            
            <div className="pt-96 sm:pt-10 grid-cols-none grid sm:grid-cols-2 gap-4 place-content-stretch py-4 bg-blend-darken">
                <div className="space-y-5 tracking-wide pb-16 lg:py-8 px-4 text-5xl font-extralight font-serif rounded-sm bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    <p>Welcome to my</p> <p>portfolio website!</p>
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-neutral-700 text-3xl pl-20">About Myself</h1>
        </div>
        <div class="grid-rows-2 py-7 font-serif px-20 justify-center space-y-5">
            <p className="text-neutral-400">I am a computer science student with a passion for analyzing and interpreting complex data sets to derive insights that can drive meaningful impact. Through this website, I aim to showcase my portfolio of data-driven projects that highlight my skills and expertise in the field of data science.</p><p className="text-neutral-400">With a solid foundation in statistical modeling, machine learning, and data visualization, I have worked on a diverse range of projects, including predictive modeling, natural language processing, and image classNameification. My work has been driven by a desire to explore new and innovative ways of leveraging data to solve real-world problems.</p>
        </div>
        
        </div>
        
    )
}
