const Nav = ({cast, onChoice}) => {
  return(
    <nav>
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="list"></summary>
            <ul role="listbox">
            {
              cast.map(member => (
                <li key={member.id}>
                  <a onClick={()=>{onChoice(cast)}} data-tooltip={member.name} >{member.name}</a>
                </li>
              ))
            }
            </ul>
            
          </details>
        </li>
      </ul>
      <ul>
        <li><a href="#"><img style={{width: '50px'}}src="imags/logo_bug_stargazers.svg" alt="stargazers.svg"></img></a></li>
      </ul>
    </nav>
  )
}

export default Nav;