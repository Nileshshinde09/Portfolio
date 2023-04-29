import Image from 'next/image'
import { useRouter } from 'next/router';
import project_img from '@/images/project.png';
import Link from 'next/link';

export default function projects() {
  return (
    <div className='space-y-10'>
      <section class="text-gray-600 body-font">
        <div class="pl-14 container mx-auto flex px-4 pt-12 md:flex-row flex-col items-center">
          <div class="order-2 sm:order-none lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600 pt-5">Web Devlopment project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
          <div class="order-1 sm:order-none lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Link href='project1'><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-4 py-5 md:flex-row flex-col pl-9">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 container mx-auto">
            <Link href="project10"><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600">Data Science project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="pl-14 container mx-auto flex px-4 pt-12 md:flex-row flex-col items-center">
          <div class="order-2 sm:order-none lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600 pt-5">Web Devlopment project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
          <div class="order-1 sm:order-none lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Link href='project1'><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-4 py-5 md:flex-row flex-col pl-9">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 container mx-auto">
            <Link href="project10"><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600">Data Science project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="pl-14 container mx-auto flex px-4 pt-12 md:flex-row flex-col items-center">
          <div class="order-2 sm:order-none lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600 pt-5">Web Devlopment project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
          <div class="order-1 sm:order-none lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Link href='project1'><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-4 py-5 md:flex-row flex-col pl-9">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 container mx-auto">
            <Link href="project10"><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600">Data Science project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
        
      </section>

      <section class="text-gray-600 body-font">
        <div class="pl-14 container mx-auto flex px-4 pt-12 md:flex-row flex-col items-center">
          <div class="order-2 sm:order-none lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600 pt-5">Web Devlopment project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
          <div class="order-1 sm:order-none lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Link href='project1'><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-4 py-5 md:flex-row flex-col pl-9">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 container mx-auto">
            <Link href="project10"><Image height={300} width={400} class="object-cover object-center rounded" alt="hero" src={project_img} /></Link>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <Link href='project1'><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-600">Data Science project
            </h1></Link>
            <Link href='project1'><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p></Link>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
