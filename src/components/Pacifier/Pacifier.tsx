import Image from "next/image";

export interface iPacifier{
  pacifier : "coffee-cup"
}

export const Pacifier =(props:iPacifier)=>{
  switch (props.pacifier){
    case "coffee-cup":
      return (
        <div>
          <Image
              src="https://www.keurig.com/storefrontImages/icons/cup_loader.gif"
              alt="loading"
              unoptimized={true}
              width={500}
              height={500}
          />
        </div>
      )
  }
}
