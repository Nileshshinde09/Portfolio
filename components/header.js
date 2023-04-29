export default function header() {
    return (
    <nav className="h-12 overflow-hidden">
        <ul className="flex space-x-5 py-2 text-2xl font-bold">
            <li></li>
            <li className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-500 hover:to-sky-500">
            <a href="/">Home</a></li>
            <li
            className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-500 hover:to-sky-500">
            <a href="/projects">Projects</a></li>
            <li
            className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-500 hover:to-sky-500">
            <a href="/blog">Blogs</a></li>
            <li
            className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-500 hover:to-sky-500">
            <a href="/resume">Resume</a></li>
        </ul>
        <hr className="drop-shadow-2xl  shadow-red-800"></hr>
    </nav>
    )
}
