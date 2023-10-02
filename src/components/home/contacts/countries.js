import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Usa from "../../../assets/images/images.jpg"
import { useState } from "react"

function Countries() {
  const [view, setView] = useState(false)
  const [selected, setSelected] = useState(0)
  const [listCountries, setCountries] = useState([
    {id: 1, name: 'USA'},
    {id: 2, name: 'Philippines'},
    {id: 3, name: 'South Korea'},
    {id: 4, name: 'Japan'},
    {id: 5, name: 'China'},
  ])
  
  const viewHndlr = () => {
      setView(!view)
      // listCountries
      
  }

  const selectedHndlr = (id) => {
      setSelected(id)
  }
  return (
    <div>
        <div className="countries" onClick={viewHndlr}>
          {
              listCountries.filter((value) => value.id === selected).length !== 0 ? (
                listCountries.filter((value) => value.id === selected)[0].name
                ) : (
                  <div></div>
                )
          }
          <ArrowDropDownIcon/>
        </div>
        {
          view === true && (
            <div>
              {
                listCountries.map((v,k) => (
                    <div key={k} onClick={() => selectedHndlr(v.id)}>{v.name}</div>
                ))
              }
            </div>
          )
        }
    </div>
    );
  }
  
  export default Countries;
  