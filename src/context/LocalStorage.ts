import { useEffect, useState } from "react";

export function useLocaStage<T>(key: string, initialvalue: T) {
  const [value, setValue] = useState<T>(() => {
    let localCart = localStorage.getItem("order");
    if (localCart != null) return JSON.parse(localCart);
    else {
      return initialvalue;
    }
  });
useEffect(()=>{
localStorage.setItem(key , JSON.stringify(value))
},[value , setValue])

return [value , setValue] as [typeof value , typeof setValue]
}
