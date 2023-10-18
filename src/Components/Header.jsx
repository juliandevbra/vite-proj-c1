import React from 'react'

const styles = {display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}

const Header = () => {
    const titulos = ['Home',  'Shop', 'Contact', 'About']
  return (
    <div style={styles}>
        {titulos.map((titulo, index) => {
            return <h5 key={index}>{titulo}</h5>
        })}
    </div>
  )
}

export default Header