import { ImInstagram,ImTwitter,ImWhatsapp,ImLinkedin,ImMail2} from "react-icons/im";
export default function contact() {
    return (
        <div>
            <h1 className="text-neutral-700 text-3xl pl-20">Connect</h1>
            <div className="flex px-20 py-5 space-x-4 text-stone-500 font-bold">
                <h2><ImWhatsapp/></h2>
                <h2><ImInstagram/></h2>
                <h2><ImLinkedin/></h2>
                <h2><ImMail2/></h2>
                <h2><ImTwitter/></h2>
            </div>
            <div class="bg-zinc-950">
                <section>
                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-neutral-500">Contact Me</h2>
                        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-500 sm:text-xl">Let's Connect and Bring Your Ideas to Life: Contact Me Today!</p>
                        <form action="#" class="space-y-8">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Subject</label>
                                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your message</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-500 hover:to-sky-500 rounded-lg">Send message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}
