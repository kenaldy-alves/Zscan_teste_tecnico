
  const handleSwitch = () => {
    let w = 24, z = 99
    console.log(w, z)

    /* Lógica
    
        atribuo a "w" a soma dos valores de w e z
        w = 24 + 99 
        w= 123
        
        atribuo a "z" a diferença dos valores de w e z
        z = 123 - 99
        z = 24

        Por fim atribuo a "w" a diferença dos valores de w e z
        w = 123 - 24 
        w = 99
   */
    w = w + z
    z = w - z
    w = w - z
    console.log(w, z)


  }

  //Passando quaisquer valores
  const handleSwitch = (w, z) => {
    console.log(w, z)

    /* Lógica
    
        atribuo a "w" a soma dos valores de w e z
        w = 24 + 99 
        w= 123
        
        atribuo a "z" a diferença dos valores de w e z
        z = 123 - 99
        z = 24

        Por fim atribuo a "w" a diferença dos valores de w e z
        w = 123 - 24 
        w = 99
   */
    w = w + z
    z = w - z
    w = w - z
    console.log(w, z)
    
  }