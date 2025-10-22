import { redirect } from 'next/navigation';


export default function Home() {
  
  redirect('https://supanova.quest/social');

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 
      
      /** 🎨 NEW CUTE BACKGROUND HERE 🎨 **/
      bg-pink-50 
      bg-[image:repeating-linear-gradient(45deg,#ffffff_0,#ffffff_2px,transparent_2px,transparent_4px)] 
      bg-[size:20px_20px]
      /** 🎨 END NEW CUTE BACKGROUND 🎨 **/
      
      ">
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        
        <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border-2 border-pink-300">
            
            <span className="text-6xl mb-4" role="img" aria-label="Construction Cone">
                🚧
            </span>
            
            <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
                Pardon Our Dust!
            </h1>

            <p className="text-lg text-gray-600 max-w-md">
                I&apos;m hard at work putting the finishing touches on my new link hub. 
                Check back soon to see all my new links and content!
            </p>

            <p className="mt-4 text-sm text-gray-500">
                In the meantime, check out my <a href="https://supanova.quest/social" className="text-pink-500 hover:text-pink-600 font-semibold underline">social media here</a>!
            </p>

        </div>
        
      </main>
    </div>
  );
}
