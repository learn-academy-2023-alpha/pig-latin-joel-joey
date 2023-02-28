import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u" ||
          vowel === "A" || 
          vowel === "E" || 
          vowel === "I" || 
          vowel === "O" || 
          vowel === "U"
        )
      })
      console.log("vowelsArray:", vowelsArray)

// We got out of hand here.....
      // //function that returns index of first vowel.
      // const indexOfFirstVowel = () => {
      //  const checkingVowelsIndex = eachWord.search(/[a,e,i,o,u]/i)
      //   return checkingVowelsIndex
      // }

      // const pigLatinLogic = () => {
      //   const newArray = []
      //   return  arrayOfUserInput.map((value) => {
      //     if(indexOfFirstVowel(value) === 0){
      //       console.log("value of index:", indexOfFirstVowel(value))
      //       newArray.push(value + "way")
      //       console.log("new array1:", newArray)
      //       return newArray
      //     }else if(indexOfFirstVowel(value) !==0){
      //       const saveCons = value.slice(0,indexOfFirstVowel(value))
      //       const cons = value.slice(indexOfFirstVowel(value))
      //       newArray.push(cons + saveCons + "ay")
      //       console.log("new array2:", newArray)
      //       return newArray
      //     }
         
      //   })
        
      // }
 


      // ACTION ITEM: your Pig Latin logic goes here!
     

      //----> **Story 1: In order to see English words converted to Pig Latin, as the user of the application, I need to see words beginning with a vowel translated to add "way" the end.**
      if(vowelsArray.includes(eachWord.charAt(0))){
        return eachWord + "way"
      //-----> **Story 2: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have "qu" in the first syllable translated by moving all the consonant and the "u" to the end and add "ay".**
      }else if(eachWord.includes("qu")){
        const indexOfU = eachWord.indexOf("u")
        const leftOfU = eachWord.slice(0,indexOfU+1)
        return vowelsArray.join("").slice(1) + leftOfU + "ay"
        //---->**Story 4: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have one or more consonants translated by moving all the consonant to the end and add "ay".**
      }else if(vowelsArray.length !== 0){
       const firstVowel = eachWord.indexOf(vowelsArray[0])
       const saveCons = eachWord.slice(0, firstVowel)
       return vowelsArray.join("") + saveCons + "ay"
       //----> **Story 3: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have no vowels other than "y" translated by moving all the consonant to the end and add "ay".**
      }else if(vowelsArray.length === 0 && eachWord.includes("y")){
          const indexOfY = eachWord.indexOf("y")
          const everythingButTheY = eachWord.slice(0,indexOfY)
          return "y" + everythingButTheY + "ay"   
      }else {
        const catchAll = "something went wrong"
        return catchAll
      }
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App