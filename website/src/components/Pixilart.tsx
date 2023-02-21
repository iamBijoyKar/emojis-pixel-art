import Card from "./Card";
import emojis from './../pixilart.json';

function filter(text:string):string{
    const tempText = text.replaceAll('-',' ');
    let ans:string = "";
    for(let i=0;i<tempText.length;i++){
        if(i===0){
            ans += tempText[i].toUpperCase();
        }
        else{
            if(tempText[i-1] ===' '){
                ans +=  tempText[i].toUpperCase();
            }
            else{
                ans +=  tempText[i].toLowerCase()
            }
        }
    }
    return ans;
}

export default function Pixilart(){

    return(
        <main className="m-8 ">
            <h1 className="text-xl lg:text-6xl font-bold my-10">Emojis</h1>
            <div className="flex gap-4 flex-row flex-wrap justify-center align-top">
                { emojis && emojis["emojis"].map((emoji)=>
                    <Card name={filter(emoji.name)} imgSrc={emoji.name} />
                    )
                }
            </div>
        </main>
)
}