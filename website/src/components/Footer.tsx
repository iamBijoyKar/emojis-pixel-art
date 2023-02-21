


function FooterLinks(){

    return(
        <div className="flex flex-col md:flex-row lg:inline-flex gap-4">
            <a className="" href="https://github.com/iamBijoyKar/emojis-pixel-art/blob/master/CONTRIBUTING.md">Contribute</a>
            <a className="" href="/">About</a>
            <a className="" href="https://github.com/iamBijoyKar/emojis-pixel-art/blob/master/LICENSE">License</a>
        </div>
    )
}

export default function Footer(){


    return(
        <footer className="bg-grey p-8 flex flex-row justify-between align-middle ">

            <div className="ml-8">
                Copyright © Bijoy Kar 2023
            </div>
            <FooterLinks/>
        </footer>
    )
}