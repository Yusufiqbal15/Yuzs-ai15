import React from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import Image from 'next/image'

const AboutTeam = () => {
  return (
  



           <section className="w-full py-6 md:py-24 lg:py-32 ">
                <div className="container mx-auto px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
                   About our team 
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  <Card className="col-span-1 md:col-span-2 lg:col-span-3 w-full border-2 hover:border-primary duration-100 hover:scale-90 transform transition rounded-lg">
    <CardContent className="pt-6 text-center flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <Image 
            src={"/selfpic.jpg"}
            alt="team leader"
            height={200}
            width={1000}
            className="h-12 py-1 w-auto object-contain team"
          />
        </Link>
        <h3 className="text-xl font-bold mb-2">Mohammad Yusuf iqbal</h3>
        <p className="text-xl font-light mb-2">(Full Stack Developer)</p>
        <p className="text-muted-foreground">
          As a Team Leader, My overall focus on right direction and making 
          sure everyone knows what to do. 
          I plan the work and divide tasks fairly, and check if they are facing any problems. 
          If someone needs help, I am always ready to support and motivate them.
          I also make sure we all work together as a team and finish our work on time.
        </p>
        <p className="text-xl font-light mt-2 mb-2 flex justify-center space-x-4">
          <Link href="https://www.linkedin.com/in/yusuf-iqbal-971686259/">
            <Image 
              src={"/linkedin.png"}
              alt="social media"
              height={200}
              width={1000}
              className="h-12 py-1 w-auto object-contain logo"
            />
          </Link>
          <Link href="https://github.com/Yusufiqbal15">
            <Image 
              src={"/gti.png"}
              alt="team leader"
              height={200}
              width={1000}
              className="h-12 py-1 w-auto object-contain logo"
            />
          </Link>
        </p>
      </div>
    </CardContent>
  </Card>
</div>
                   </div>
              </section>
       


       

  )
}

export default AboutTeam
