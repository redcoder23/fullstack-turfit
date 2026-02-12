import { useContext,createContext, useState } from 'react'
import React from 'react';
       const Usercontext=createContext();  
       export const Usercontextprovider=({children})=>{ 
              const [user,setuser]=React.useState(null); 
              return( 
                     <Usercontext.Provider value={{user,setuser}}> 
                     {children} 
                     </Usercontext.Provider>
              ); 
       }  ;

export default Usercontext;