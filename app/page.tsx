'use client'
import { AppWrapper, ContentWrraper,Header,BoxContent, Box,BoxWrapper, BoxText, Button, CustomBill } from "@/components/app.styled.component";
import { useState } from "react";

export default function Home() {
  const [price,setPrice]=useState(0);
  const objekat=[
    {drink:"mojito",price:3},
    {drink:"Beer",price:1},
    {drink:"Red Wine",price:1},
    {drink:"Gin Tonic",price:1},
    {drink:"White Wine",price:1},
    {drink:"Tequila Shot",price:1},

  ]
  const handlerButton=(pricee:number)=>{
    setPrice(price+pricee);
  }
  return (
   <AppWrapper>
    <ContentWrraper>
      <Header>
        React Bar
      </Header>
      <BoxWrapper>
        {objekat.map((obj,index)=>{
          return(
          <Box key={index}>
            <BoxContent>
            <BoxText>{obj.drink}</BoxText>
            <BoxText>{obj.price}</BoxText>
            <Button onClick={()=>handlerButton(obj.price)}>Order drink</Button>
            </BoxContent>
        </Box>
          )
        })}
      </BoxWrapper>
      <CustomBill> Bill is {price}$</CustomBill>
    </ContentWrraper>
   </AppWrapper>
    
  );
}
