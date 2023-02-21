export interface iPacifier{
  pacifier : "coffee-cup"
}

export const Pacifier =(props:iPacifier)=>{
  switch (props.pacifier){
    case "coffee-cup":
      return (
        <div>
          <img src="https://www.keurig.com/storefrontImages/icons/cup_loader.gif" alt="loading" />
        </div>
      )
  }
}