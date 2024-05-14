'use client'
import styled from "styled-components";

export const AppWrapper = styled.div`
background-color: black;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const ContentWrraper = styled.div`
color:black;
margin-bottom: 250px;
display: flex;
flex-direction: column;
 align-items: center;
`
export const Header = styled.h1`
color: white;
`
export const Box = styled.div`
border: 2px solid white;
justify-content: center;
align-items: center;
`
export const BoxWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 10px;
row-gap: 10px;
margin-top: 30px;
`
export const BoxContent = styled.div`
display: flex;
padding: 10px;
flex-direction: column;
align-items: center;
gap: 10px;
`
export const BoxText = styled.h3`
color: white;
`
export const Button = styled.button`
background-color: white;
color:black;
border: none;
cursor: pointer;
`
export const CustomBill = styled.div`
background-color: white;
color: black;
margin-top: 50px;
`
